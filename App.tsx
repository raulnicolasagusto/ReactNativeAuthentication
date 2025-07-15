import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, } from 'react-native';
import  CustomInput  from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';
export default function App() {



  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign in</Text>

      <CustomInput
        placeholder="Email"
        autoFocus
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <CustomInput
        placeholder="Password"
        secureTextEntry
      />

      <CustomButton text='Iniciar sesion' onPress={() => {console.log('Button Pressed')}}/>
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
