import { View, Text } from 'react-native'
import React from 'react'
import Container from '@/components/Container'

export default function Travail() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Travail Component</Text>
      </View>
    </Container>
  )
}