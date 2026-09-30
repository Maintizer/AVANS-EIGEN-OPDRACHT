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