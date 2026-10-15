// const confirmSearch = document.getElementById("confirmSearch")

// confirmSearch.addEventListener("click", async function(){
//     const titleInput = document.getElementById("searchInput").value
//     const res = await fetch('https://openlibrary.org/search.json?q=' + titleInput + '&limit=1');
//     const data = await res.json();
//     document.getElementById('resultField').innerHTML = (data.docs.map(d => d.title));
// })

// const searchStatus = document.getElementById("searchStatus")
// const confirmSearch = document.getElementById("confirmSearch")
// const searchResult = document.getElementById("searchResult")

// confirmSearch.addEventListener("click", async function(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//     const data = res.json();
//     console.log(data)
// })

// Stap 1.3: Selecteer de elementen met jouw exacte HTML-ID's
const laadKnop = document.getElementById("confirmSearch");
const statusMelding = document.getElementById("searchStatus");
const resultatenContainer = document.getElementById("searchResult");

// 1. Een eigen functie die handmatig een Promise maakt en teruggeeft
function fetchGegevensPromise() {
  return new Promise((resolve, reject) => {
    statusMelding.textContent = "Gegevens laden...";
    laadKnop.disabled = true;

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(response => {
        if (!response.ok) {
          // Als het misgaat, wijzen we de Promise af (reject)
          reject(new Error(`Request mislukt: ${response.status}`));
        }
        return response.json();
      })
      .then(data => {
        // Als het lukt, geven we de data terug via resolve
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// 2. Een async functie waarin we de eigen Promise opvangen met await
async function laadGegevens() {
  try {
    // Wacht tot de eigen Promise klaar is (resolve of reject)
    const gegevens = await fetchGegevensPromise();

    // Toon de opgehaalde resultaten op de pagina
    toonResultaten(gegevens);

  } catch (fout) {
    // Stap 4.4: Fout - Toon een begrijpelijke melding zonder technische details
    statusMelding.textContent = "Er is iets misgegaan bij het ophalen van de gegevens. Probeer het later opnieuw.";
    
    // Stap 4.5: Schakel de knop na de fout opnieuw in
    laadKnop.disabled = false;
  }
}

// Functie om de resultaten op de pagina te tonen
function toonResultaten(gegevens) {
  // Stap 3.1 & 4.5: Maak de container leeg om dubbele resultaten te voorkomen
  resultatenContainer.innerHTML = "";

  // Stap 4.3: Leeg - Toon een melding als de lijst geen items bevat
  if (gegevens.length === 0) {
    statusMelding.textContent = "Geen items gevonden.";
    laadKnop.disabled = false;
    return;
  }

  // Stap 3.2 & 3.3: Loop door elk item en maak een <article> met titel en beschrijving
  gegevens.forEach(item => {
    const artikel = document.createElement("article");

    const titelElement = document.createElement("h2");
    titelElement.textContent = item.title; // Stap 3.4: Veilig met textContent

    const beschrijvingElement = document.createElement("p");
    beschrijvingElement.textContent = item.body; // Stap 3.4: Veilig met textContent

    // Voeg elementen samen in het artikel
    artikel.appendChild(titelElement);
    artikel.appendChild(beschrijvingElement);
    
    // Voeg het artikel toe aan de resultatencontainer
    resultatenContainer.appendChild(artikel);
  });

  // Stap 3.5 & 4.2: Succes - Toon hoeveel items zijn geladen
  statusMelding.textContent = `Succes! Er zijn ${gegevens.length} items geladen.`;

  // Stap 4.5: Schakel de knop na succes weer in
  laadKnop.disabled = false;
}

// Koppel de functie aan de klik-actie van de knop
laadKnop.addEventListener("click", laadGegevens);