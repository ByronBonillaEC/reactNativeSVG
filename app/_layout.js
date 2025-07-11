import {Stack} from "expo-router"
export default function RootLayout(){
    return (
      <Stack>
        <Stack.Screen
        name="index"
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen
        name="about"
        options={{
            title: 'Acerca de..',
            //headerShown: false       
        }}        
        />
        <Stack.Screen 
          name="[id]" 
          options={{
            //headerShown: false
        }}
        />
      </Stack>  
    );
}