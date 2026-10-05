// function calculateTotal(avgPrice, avgAmount) {
//     let avgResult = avgPrice * avgAmount;
//     return avgResult;
// }

const avgPrice = 5
const avgAmount = 10;

function calculateTotal() {
    let result = avgPrice * avgAmount;
    return result
}

let calcResult = calculateTotal(avgPrice, avgAmount)

document.getElementById("price").innerHTML =avgPrice + " ";
document.getElementById("amount").innerHTML = " " + avgAmount;
document.getElementById("result").innerHTML = calcResult;


// Generation generator


const genButton = document.getElementById("generation");

genButton.addEventListener("click", function(){
    let inputValue = document.getElementById("birthYear").value;

    if(inputValue >= 1901 && inputValue <= 1927){
        window.alert("The Greatest Generation");
    } else if(inputValue >= 1928 && inputValue <= 1945){
        window.alert("The Silent Generation");
    } else if(inputValue >= 1946 && inputValue <= 1964){
        window.alert("Baby Boom Generation");
    } else if(inputValue >= 1965 && inputValue <= 1980){
        window.alert("Generation X");
    } else if(inputValue >= 1981 && inputValue <= 1996){
        window.alert("Millennial Generation or Generation Y");
    } else if(inputValue >= 1997 && inputValue <= 2012){
        window.alert("Generation Z or iGen");
    } else if(inputValue >= 2013 && inputValue <= 2024){
        window.alert("Generation Alpha");
    } else if(inputValue >= 2025 && inputValue <= 2039){
        window.alert("Generation Beta");
    } else if(isNaN(inputValue)){
        window.alert("A year only has numbers...");
    }
    else{
        window.alert("This year does not have a name.");
    }
    
});
