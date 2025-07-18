import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Alert } from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo'

// Validaciones con zod
const signInSchema = z.object({
  email: z.string({ message: 'Email is required' }).email('Invalid email address'),
  password: z.string({ message: 'Password is required' }).min(8, 'Password must be at least 8 characters long'),
});

type SignInFields = z.infer<typeof signInSchema>;

//metodo simple para mapear los errores de Clerk a los campos del formulario
// const clerkErrorToFormField = {
//   'identifier': 'email',
//   'password': 'password',
// }

const mapClerkErrorToFormField = (error: string) => {
  switch (error.meta?.paramName) {
    case 'identifier':
     return 'email';
    case 'password':
      return 'password';
    default:
      return 'root'; // Default to root if no specific field is matched
  }
}


export default function SignInScreen() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInFields>({
    resolver: zodResolver(signInSchema),
  });

  console.log(errors);

  const onSignIn = async (data: SignInFields) => {

    

    if (!isLoaded) return;

    try {
     const signInAttempt =  await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (signInAttempt.status === 'complete') {
        setActive({ session: signInAttempt.createdSessionId });
        console.log('Sign in successful');
      } else {
        console.log('Sign in not completed, status:', signInAttempt.status);
        setError('root', { message: 'sign in could not be completed.' });
      }

      

    } catch (err) {
      console.log('Error del sign in: ', JSON.stringify(err, null, 2));
      //verificamos si el error al iniciar sesion es de la API de Clerk
        if (isClerkAPIResponseError(err)) {    
          err.errors.forEach((error) => {
            const fieldName = mapClerkErrorToFormField(error);
            setError(fieldName, {message: error.longMessage})
          });
      }else{
        setError('root', { message: 'An unexpected error occurred. Please try again later.' });
      } 
      // Alert.alert('Sign In Error', 'Invalid email or password');

    console.log('Sign in: ', data);
    }
     
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign in</Text>

      <View style={styles.form}>
        <CustomInput
          control={control}
          name="email"
          textContentType="emailAddress"
          placeholder="Email"
          autoComplete="email"
          autoFocus
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomInput
          control={control}
          name="password"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
          keyboardType="default"
          autoCapitalize="none"
        />

             
      </View>
 {errors.root && <Text style={{ color: 'crimson' }}>{errors.root.message}</Text>}
      <CustomButton text="Iniciar sesion" onPress={handleSubmit(onSignIn)} />
      <Text style={styles.link}>
        <Link href="/(auth)/sign-up">Don't have an account? Sign up</Link>
      </Text>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  form: {
    width: '100%',
    paddingHorizontal: 5,
    gap: 5,
  },
    link: {
        marginTop: 20,
        fontSize: 18,
        color: '#007BFF',
    },
});