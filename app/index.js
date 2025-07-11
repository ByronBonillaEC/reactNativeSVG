import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../componente/logo";
import { Main } from "../componente/main";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />      
      <Logo style={styles.logo}></Logo>
      <Link href="/about" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acerca de</Text>
        </TouchableOpacity>
      </Link>
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
  button: {
    backgroundColor: '#4CAF50', // verde botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
