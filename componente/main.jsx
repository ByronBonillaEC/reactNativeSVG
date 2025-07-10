import { useEffect, useState } from "react";
import Tarjeta  from "./tarjeta";
import { StyleSheet, ScrollView } from "react-native";
import { getPersonajes } from "./lib/rickyMorty";
import { ActivityIndicator, FlatList } from "react-native-web";

export function Main() {

  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    getPersonajes().then((data) => {
      setPersonajes(data);
      console.log("personajes", personajes);
    });
  }, []);

  return (
    <>
        {/*}
        <ScrollView>
            {personajes.map((item) => (
            <Tarjeta item={item} key={item.id} />
            ))}
        </ScrollView>
        */}

        {personajes.length() === 0 ? (
            <ActivityIndicator size={"large"}/>
        ) : (
            <FlatList
            data={personajes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({item, index}) => (
                    <Tarjeta item={item} index={index}/>
                )
            }            
        )
        }
        
    </>
  );
}
