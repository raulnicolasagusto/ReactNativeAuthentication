import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, } from 'react-native';
export default function App() {

  const onPress1 = () => {
      alert('Sign in button pressed');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign in</Text>

      <TextInput autoCapitalize='none' placeholder="Email" autoCorrect={false} autoComplete="email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <Pressable style={styles.button} onPress={onPress1}>
        <Text style={styles.buttonText}>Iniciar sesion</Text>
      </Pressable>

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
  input: {
    borderWidth: 1,
    width: '95%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width: '95%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
