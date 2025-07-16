import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, } from 'react-native';
import  CustomInput  from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';
import {  useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


//hacemos validaciones con zod
const signInSchema = z.object({
  email: z.string({message: 'Email is required'}).email('Invalid email address'),
  password: z.string({message: 'Password is required'}).min(8, 'Password must be at least 8 characters long'),
});

export default function App() {

 const {
  control,
   handleSubmit,
   formState: {errors},
  } = useForm({
    resolver: zodResolver(signInSchema)
  });

  const onSignIn = (data: any) => {
    //manual validation
    console.log('Sign in: ', data);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign in</Text>

      <View style={styles.form}>
        <CustomInput
          control={control}
          name='email'
          secureTextEntry
          textContentType='emailAddress'
          placeholder='Email'
          autoComplete='email'
          autoFocus
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <CustomInput
          control={control}
          name='password'
          secureTextEntry
          placeholder='Password'
          textContentType='password'
          keyboardType='default'
          autoCapitalize='none'
          
        />
      </View>
      <CustomButton text='Iniciar sesion' onPress={handleSubmit(onSignIn)}/>
      <Text>Don't have an account? Sign up</Text>

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
 form : {
    width: '100%',
    paddingHorizontal: 5,
    gap: 5,
 }
  
});


// VIDEO 1:06:30