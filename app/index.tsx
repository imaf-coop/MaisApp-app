import Container from "@/components/Container";
import * as React from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Home() {
  const [text, setText] = React.useState("");

  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <TextInput
          label="Votre nom"
          value={text}
          onChangeText={setText}
          mode="outlined"
        />
        <Button mode="contained" onPress={() => console.log(text)} style={{ marginTop: 20 }}>
          Valider
        </Button>
      </View>
    </Container>
  );
}
