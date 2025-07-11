import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
//import icon from "./assets/splash-icon.png";
import Logo from "./componente/logo";
import { Main } from "./componente/main";


export default function App() {

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
