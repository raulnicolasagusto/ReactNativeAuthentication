import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
export default function App() {

  const onPress1 = () => {
      alert('Sign in button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <TextInput autoCapitalize='none' placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <Button title="Sign in" onPress={onPress1} />
      <Text>Don't have an account? Sign up</Text>

      <Pressable style={styles.button} onPress={() => { console.log('Iniciar sesion pressed'); }}>
        <Text style={styles.buttonText}>Iniciar sesion</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
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
