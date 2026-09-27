// document.getElementById("countH2Elements").textContent = document.querySelectorAll("h2").length;

const allH2Elements = document.querySelectorAll("h2");

let teller = 0;

for (i = 0; i < allH2Elements.length; i++) {
    teller++;
}

document.getElementById("countH2Elements").textContent = "totale aantal h2 elementen: " + teller;

// Add and remove accents

const overigeH2 = [];

for(let i = 0; i < allH2Elements.length; i++){
    if(!allH2Elements[i].classList.contains("accent")){
        overigeH2.push(allH2Elements[i]);
    }
}

function addAccent() {
    for(let i = 0; i < overigeH2.length; i++){
        overigeH2[i].classList.toggle("accent");
    }
}