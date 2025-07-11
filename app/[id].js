import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getDetallesEpisodio } from "../lib/rickyMorty";
import { Alert, View, ActivityIndicator, StyleSheet } from "react-native";
import { DetallesEpisodio } from "../componente/detallesEpisodio";

export default function PaginaEpisodio(){
    const {id} = useLocalSearchParams();
    const [episodio, setEpisodio] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {

        const fetchDetallesEpisodio = async () => {
            try{
                setLoading(true);
                const datosEpisodio = await getDetallesEpisodio(id);
                setEpisodio(datosEpisodio);
            } catch (error) {
                console.error('Error fetching episode:', error);
                Alert.alert(
                'Error',
                'No se pudieron cargar los detalles del episodio',
                [{ text: 'OK' }]
                );
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDetallesEpisodio();
            }
    }, [id]);

        if (loading) {
            return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#333" />
            </View>
            );
        }

        return (
            <View style={styles.container}>
                <DetallesEpisodio episodio={episodio} />
            </View>
        );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});