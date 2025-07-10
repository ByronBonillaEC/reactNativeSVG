import { StyleSheet, View, Text, Image } from "react-native";
export function Tarjeta({ item }) {
  return (
    <View style={styles.container}>      
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.status}>{item.status}</Text>
          <Text style={styles.species}>{item.species}</Text>
          <Text style={styles.gender}>{item.gender}</Text>
          <Image
            source={{ uri: item.image }}
            style={styles.imagenp}
            resizeMode="cover"
          />
        </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  imagenp: {
    width: 100,
    height: 100,
    borderRadius: 20,
    padding: 10
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 16,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',

    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    // Sombra para Android
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffff'
  },
  species: {
    fontSize: 16,
    color: '#fff'
  },
  status: {
    fontSize: 16,
    color: '#33caff'
  },
  gender: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  logo: {
    backgroundColor: 'orange',    
    padding: 20
  }
  ,
  logoAlt: {
    backgroundColor: 'violet',    
    padding: 20
  }
});
