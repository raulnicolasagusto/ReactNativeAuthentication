import { View, Text, StyleSheet, Button } from 'react-native' 
  import React from 'react'
import { Link } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function Index() {

const {signOut, isSignedIn} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla index de bienvenida!</Text>
      <Text style={[styles.text, { marginTop: 20}]}>
        {isSignedIn ? 'Usuario autenticado' : 'Usuario no autenticado'}
      </Text>
      <Button title="Cerrar sesión" onPress={() => signOut()} />
      <Link href="/sign-in" style={styles.link}>
        Ir a Sign In
      </Link>
      <Link href="/sign-up" style={styles.link}>
        Ir a Sign Up
      </Link>
      <Link href="/(protected)" style={styles.link}>
        Ir a protected
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  link: {
    marginTop: 20,
    fontSize: 18,
    color: '#007BFF',
  },
  
});