import { StatusBar } from "expo-status-bar";
import { use, useEffect, useState } from "react";
import { Pressable, TouchableHighlight } from "react-native";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from "react-native-web";
import icon from "./assets/splash-icon.png";
import { getPersonajes } from "./lib/rickyMorty";
import Logo from "./componente/logo";
import Main from "./componente/logo";


export default function App() {
  const [dato, setDato] = useState("");
  const ejecutar = () => {
    setDato("Nuevo Dato");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo style={styles.logo}></Logo>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    backgroundColor: "orange",
    padding: 20,
  },
});
