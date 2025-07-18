import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import { useSignUp, isClerkAPIResponseError  } from '@clerk/clerk-expo'

// Validaciones con zod
const signUpSchema = z.object({
  email: z.string({ message: 'Email is required' }).email('Invalid email address'),
  password: z.string({ message: 'Password is required' }).min(8, 'Password must be at least 8 characters long'),
});

type SignUpField = z.infer<typeof signUpSchema>;

const mapClerkErrorToFormField = (error: string) => {
  switch (error.meta?.paramName) {
    case 'email_address':
     return 'email';
    case 'password':
      return 'password';
    default:
      return 'root'; // Default to root if no specific field is matched
  }
}

export default function SignUpScreen() {
  const { control, handleSubmit, setError, formState: { errors } } = useForm<SignUpField>({
    resolver: zodResolver(signUpSchema),
  });

  const { signUp, isLoaded } = useSignUp();

  const onSignUp = async (data: SignUpField) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
      emailAddress: data.email,
      password: data.password,
     });

      // Aquí dirigimos al usuario a la pantalla de verificación 
      await signUp.prepareVerification({strategy: 'email_code'});
      router.push('/verify');

    } catch (err) {
      console.log('Error del sign up: ', err);
       if (isClerkAPIResponseError(err)) {    
          err.errors.forEach((error) => {
            const fieldName = mapClerkErrorToFormField(error);
            setError(fieldName, {message: error.longMessage})
          });
      }else{
        setError('root', { message: 'An unexpected error occurred. Please try again later.' });
      } 
      // Alert.alert('Sign In Error', 'Invalid email or password');
    }

    
    console.log('Sign up: ', data);
    
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign Up / Create an Account</Text>

      <View style={styles.form}>
        <CustomInput<SignUpField>
          control={control}
          name="email"
          textContentType="emailAddress"
          placeholder="Email"
          autoComplete="email"
          autoFocus
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomInput<SignUpField>
          control={control}
          name="password"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
          keyboardType="default"
          autoCapitalize="none"
        />

    {errors.root && <Text style={{ color: 'crimson' }}>{errors.root.message}</Text>}

      </View>
      <CustomButton text="Registrate" onPress={handleSubmit(onSignUp)} />
      <Text style={styles.link}>
          <Link href="/(auth)/sign-in">Already have an account? Sign in</Link>
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