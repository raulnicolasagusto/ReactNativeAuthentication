import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo'

// Validaciones con zod
const signUpSchema = z.object({
  email: z.string({ message: 'Email is required' }).email('Invalid email address'),
  password: z.string({ message: 'Password is required' }).min(8, 'Password must be at least 8 characters long'),
});

type SignUpField = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  const { control, handleSubmit } = useForm<SignUpField>({
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
     
    } catch (error) {
      console.log('Error del sign up: ', error);
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