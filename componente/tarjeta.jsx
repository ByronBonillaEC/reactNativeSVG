import { StyleSheet, View, Text, Image, TouchableOpacity  } from "react-native";
import { router } from 'expo-router';

export function Tarjeta({ item }) {

   // Función para extraer el ID del episodio de la URL
    const getEpisodeId = (episodeUrl) => {
        const parts = episodeUrl.split('/');
        return parts[parts.length - 1];
    };

    // Función para manejar el toque en la imagen
    const handleImagePress = () => {
        if (item.episode && item.episode.length > 0) {
            const firstEpisodeUrl = item.episode[0];
            const episodeId = getEpisodeId(firstEpisodeUrl);
            router.push(`/${episodeId}`);
        }
    };

  return (
    <View style={styles.container}>      
        <View key={item.id} style={styles.card}>
          <TouchableOpacity onPress={handleImagePress}>                     
              <Image source={{ uri: item.image }} style={styles.imagenp} resizeMode="cover"/>
          </TouchableOpacity>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.status}>{item.status}</Text>
          <Text style={styles.species}>{item.species}</Text>
          <Text style={styles.gender}>{item.gender}</Text>   
          <Text style={styles.episodeHint}>Toca la imagen para ver el primer episodio</Text>       
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
  ,
  episodeHint: {
    fontSize: 12,
    color: '#ccc',
    fontStyle: 'italic',
    marginTop: 8,
    textAlign: 'center',
  }
});
