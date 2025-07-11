export async function getPersonajes() {
  const urlWs = "https://rickandmortyapi.com/api/character";

  const rawData = await fetch(`${urlWs}`);
  console.log("rawData;", rawData);

  const json = await rawData.json();
  console.log("json;", json);

  const { results } = json; //Deconstruccion
  console.log("results;", results);

  return results.map((item) => {
    const { id, name, status, species, gender, episode, image } = item; //Deconstruccion

    return { id, name, status, species, gender, episode, image };
  });
}

export async function getDetallesEpisodio(episodeId) {
  const urlWs = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  try {
    const rawData = await fetch(`${urlWs}`);
    console.log("rawData;", rawData);

    const json = await rawData.json();
    console.log("json;", json);


   
    const { id, name, air_date, episode } = json; //Deconstruccion

    return { 
        id, 
        name, 
        air_date, 
        episode 
    };
    
  } catch (error) {
    console.error("Error fetching detalles episodio", error);
    throw error;
  }
}
