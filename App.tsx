import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, } from 'react-native';
import  CustomInput  from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';


export default function App() {
  // State variables for email and password
  const [password, setPassword] = useState('');

 const {control, handleSubmit} = useForm({
  defaultValues: {
    email: 'abc@nprimarykey',
    password: '',
  },
  mode: 'onChange',
  reValidateMode: 'onChange',
 })

  const onSignIn = (data: any) => {
    //manual validation
    console.log('Sign in: ', data);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign in</Text>

     
      <CustomInput
        control={control}
        name='email'
        secureTextEntry
        textContentType='emailAddress'
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

  
});


// VIDEO 1:06:30