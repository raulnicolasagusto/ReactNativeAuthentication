import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function HomePage() {
  const { user } = useUser();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Page</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Only logged users can see this</Text>
      {user && (
        <Text style={{ fontSize: 20, marginTop: 20 }}>
          Hola, {user.firstName || user.username || user.emailAddress}!
        </Text>
      )}
    </View>
  )
}
