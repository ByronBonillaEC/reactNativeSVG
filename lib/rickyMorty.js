export async function getPersonajes() {
    
    const urlWs = "https://rickandmortyapi.com/api/character";

    const rawData = await fetch(`${urlWs}`);
    console.log("rawData;", rawData);

    const json = await rawData.json();    
    console.log("json;", json);

    const { results } = json; //Deconstruccion
    console.log("results;", results);

    return results.map((item) => {
        const {id, name, status, species, gender, episode, image} = item; //Deconstruccion

        return {id, name, status, species, gender, episode, image};
    })

}