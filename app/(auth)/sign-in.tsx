import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { useSignIn } from '@clerk/clerk-expo'

// Validaciones con zod
const signInSchema = z.object({
  email: z.string({ message: 'Email is required' }).email('Invalid email address'),
  password: z.string({ message: 'Password is required' }).min(8, 'Password must be at least 8 characters long'),
});

type SignInFields = z.infer<typeof signInSchema>;

export default function SignInScreen() {
  const { signIn, isLoaded } = useSignIn();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFields>({
    resolver: zodResolver(signInSchema),
  });

 
  

  const onSignIn = async (data: SignInFields) => {

    

    if (!isLoaded) return;

    try {
     const signInAttempt =  await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (signInAttempt.status === 'complete') {
        console.log('Sign in successful');
      } else {
        console.log('Sign in not completed, status:', signInAttempt.status);
      }

      console.log('Sign in attempt: ', signInAttempt);

    } catch (err) {
      console.log('Error del sign in: ', err);
    }

    console.log('Sign in: ', data);
    
    
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