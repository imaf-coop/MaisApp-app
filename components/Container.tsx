// components/Container.tsx
import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // équivalent à px-4
    paddingVertical: 20,   // équivalent à py-5
    backgroundColor: "#fff",
  },
});
