import { StatusBar } from 'expo-status-bar';
import { use, useEffect, useState } from 'react';
import { Pressable, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-web';
import icon  from './assets/splash-icon.png'
import { getPersonajes } from './lib/rickyMorty';
import Logo from './componente/logo';

export default function App() {

  const [dato, setDato] = useState("");
  const ejecutar = () => {
    setDato("Nuevo Dato");
  }

    const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    getPersonajes().then((data) => {
      setPersonajes(data);
      console.log("personajes",personajes);
    })
    }, [])


  return (
    <View style={styles.container}>
      <View><Text>Hola Mundo</Text></View>
      <Logo></Logo>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <Image source={require('./assets/icon.png')} style={styles.imagen} ></Image> */}      
      <Image source={icon} style={styles.imagen} ></Image>
      <Button title='Ejemplo' onPress={ejecutar} />
      <Text>{dato}</Text>      
      <Pressable onPress={() => alert('Hola')}>
        <Text>Presione</Text>
      </Pressable>

      <ScrollView>
        <View style={styles.container}>
          {personajes.map((item) => (
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
          ))}
        </View>
      </ScrollView>
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
    backgroundColor: '#333',
    padding: 20
  }
});
