import { Stack, useRouter } from "expo-router";
import { Provider, FAB } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

const { width } = Dimensions.get("window");

export default function Layout() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setOpen(!open);
    Animated.spring(animation, {
      toValue: open ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  // Les icônes de ton menu
  const menuItems = [
    { icon: "briefcase", route: "/travail", color: "#FF9500" },
    { icon: "chatbubble", route: "/chat", color: "#34C759" },
    { icon: "home", route: "/", color: "#007AFF" },
    { icon: "settings", route: "/parametres", color: "#FF3B30" },
    { icon: "person", route: "/profil", color: "#5856D6" },
  ];

  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />

        {/* Bouton flottant + menu demi-cercle */}
        <View style={styles.container}>
          {menuItems.map((item, index) => {
            const angle = (index / (menuItems.length - 1)) * Math.PI; // demi-cercle
            const x = animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -80 * Math.cos(angle)],
            });
            const y = animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -80 * Math.sin(angle)],
            });

            return (
              <Animated.View
                key={item.icon}
                style={[
                  styles.item,
                  {
                    transform: [{ translateX: x }, { translateY: y }],
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    toggleMenu();
                    router.push(item.route);
                  }}
                  style={[styles.circle, { backgroundColor: item.color }]}
                >
                  <Ionicons name={item.icon} size={20} color="white" />
                </TouchableOpacity>
              </Animated.View>
            );
          })}

          <FAB
            icon={open ? "close" : "plus"}
            onPress={toggleMenu}
            style={styles.fab}
            color="white"
          />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: width / 2 - 28, // centre horizontal
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#007AFF",
  },
  item: {
    position: "absolute",
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
