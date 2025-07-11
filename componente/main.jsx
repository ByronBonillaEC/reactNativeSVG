import { useEffect, useState } from "react";
import { Tarjeta } from "./tarjeta";
import { ScrollView } from "react-native";
import { ActivityIndicator, FlatList } from "react-native-web";
import { getPersonajes } from "../lib/rickyMorty"

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
        {/*     
        <ScrollView>
            {personajes.map((item) => (
            <Tarjeta item={item} key={item.id} />
            ))}
        </ScrollView>
        */}

        {personajes.length === 0 ? (
            <ActivityIndicator size={"large"}/>
        ) : (
            <FlatList
            data={personajes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({item, index}) => (
                    <Tarjeta item={item} index={index}/>
                )
            }/>
        )}
        
    </>
  );
}
