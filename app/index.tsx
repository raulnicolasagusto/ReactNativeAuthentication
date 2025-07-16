import { View, Text, StyleSheet } from 'react-native' 
  import React from 'react'
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla index de bienvenida!</Text>
      <Link href="/(auth)/sign-in" style={styles.link}>
        Ir a Sign In
      </Link>
      <Link href="/(auth)/sign-up" style={styles.link}>
        Ir a Sign Up
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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