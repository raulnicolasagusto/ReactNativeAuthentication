import { View, Text } from 'react-native'
import React from 'react'

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Page</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Only logged users can see this</Text>
    </View>
  )
}
