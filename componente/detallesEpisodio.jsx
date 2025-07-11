import { View, Text } from "react-native-web";

export function DetallesEpisodio({episodio}){
    return (
        <View>
            <Text>{episodio.id}</Text>
            <Text>{episodio.name}</Text>
            <Text>{episodio.air_date}</Text>
            <Text>{episodio.episode}</Text>
        </View>
    );
}