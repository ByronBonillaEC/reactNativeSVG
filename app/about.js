import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.container}>
                ¿Qué es Rick y Morty?
            </Text>
            <Text style={styles.texto}>
                Rick y Morty es una serie animada de ciencia ficción y comedia que sigue las alocadas aventuras del genio científico Rick Sánchez y su nieto Morty Smith. Juntos exploran universos paralelos, viajan en el tiempo y enfrentan criaturas bizarras, todo con un humor irreverente y mucha locura.
            </Text>
            <Link href="/">
                <Text style={{ color: 'blue' }}>🔙 Volver al Inicio</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10
  },
  texto: {
    fontSize: 16, 
    marginBottom: 20
  },
});


