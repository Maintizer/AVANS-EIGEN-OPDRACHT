const url = "https://jsonplaceholder.typicode.com" + "/posts/2";

const titel = document.querySelector('#titel');
const tekst = document.querySelector('#bericht');

async function toonBericht(){
    const bericht = await fetch(url);
    const post = await bericht.json();
    titel.textContent = post.title;
    tekst.textContent = post.body;

}

toonBericht();