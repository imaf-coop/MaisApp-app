import { View, Text } from 'react-native'
import React from 'react'
import Container from '@/components/Container'

export default function parametres() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Paramètres Component</Text>
      </View>
    </Container>
  )
}