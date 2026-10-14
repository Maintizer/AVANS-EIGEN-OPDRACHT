// const confirmSearch = document.getElementById("confirmSearch")

// confirmSearch.addEventListener("click", async function(){
//     const titleInput = document.getElementById("searchInput").value
//     const res = await fetch('https://openlibrary.org/search.json?q=' + titleInput + '&limit=1');
//     const data = await res.json();
//     document.getElementById('resultField').innerHTML = (data.docs.map(d => d.title));
// })

const searchStatus = document.getElementById("searchStatus")
const confirmSearch = document.getElementById("confirmSearch")
const searchResult = document.getElementById("searchResult")

// confirmSearch.addEventListener("click", async function(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//     const data = res.json();
//     console.log(data)
// })

async function getData(){
    searchStatus.textContent = "Gegevens laden..."
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    const data = await res.json();
    searchResult.textContent = data
}

getData()