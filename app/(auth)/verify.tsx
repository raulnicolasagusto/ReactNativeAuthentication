import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { useSignUp, isClerkAPIResponseError } from '@clerk/clerk-expo'

// Validaciones con zod
const verifySchema = z.object({
  code: z.string({ message: 'Code is required' }).length(6, 'Code must be exactly 6 characters long'),
});

type VerifyField = z.infer<typeof verifySchema>;

const mapClerkErrorToFormField = (error: string) => {
  switch (error.meta?.paramName) {
    case 'code':
     return 'code';
    default:
      return 'root'; // Default to root if no specific field is matched
  }
}

export default function VerifyScreen() {
  const { control, handleSubmit, setError, formState: { errors } } = useForm<VerifyField>({
    resolver: zodResolver(verifySchema),
  });

  const { signUp, isLoaded, setActive } = useSignUp();

  const onVerify = async ({code}: VerifyField) => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === 'complete') {
        setActive({ session: signUpAttempt.createdSessionId });
      }else{
        console.log('Verification failed: ', signUpAttempt.status);
        console.log(signUpAttempt);
        setError('root', { message: 'Could not complete the sign up' });

      }
    } catch (err) {

      if (isClerkAPIResponseError(err)) {    
          err.errors.forEach((error) => {
            const fieldName = mapClerkErrorToFormField(error);
            setError(fieldName, {message: error.longMessage})
          });
      }else{
        setError('root', { message: 'An unexpected error occurred. Please try again later.' });
      } 

      
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Verify your Email</Text>

   
        <CustomInput
          control={control}
          name="code"
          textContentType="emailAddress"
          placeholder="123456"          
          autoFocus
          keyboardType="number-pad"
          autoComplete='one-time-code'
        />
    
      <CustomButton text="Verify" onPress={handleSubmit(onVerify)} />
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