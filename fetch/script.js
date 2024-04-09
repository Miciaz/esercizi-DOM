//Lo scopo di questo task è di mostrare nella pagina una carta de "Il signore degli anelli" con:

//Nome del personaggio
//immagine del personaggio
//Prova a fetchare una card dal db del gioco di carte di Lord of the Rings, la documentazione dell'API la puoi trovare a questo link: https://ringsdb.com/api/doc
//Fai in modo che nella tua pagina html spuntino il nome del personaggio della carta, la sua immagine

//GET https://ringsdb.com/api/public/card/{card_code}.{_format}


async function fetchData() {
  try {
    const response = await fetch(
      "https://ringsdb.com/api/public/card/01001.json"
    );

    if (!response.ok) {
      throw new Error("Errore nella richiesta API");
    }

    const data = await response.json();
    console.log(data)
    document.getElementById("characterName").textContent = data.name;

    const url = 'https://ringsdb.com/'
    const imgUrl = url + data.imagesrc
    
    document.getElementById("characterImage").src = imgUrl;
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}

fetchData();
