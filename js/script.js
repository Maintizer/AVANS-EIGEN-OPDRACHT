document.getElementById('test').style.color = "blue";



function jtoggle() {
    const box = document.querySelector("#box");
    box.classList.toggle("ptest");
}

function ptoggleadd() {
    const logo = document.querySelector("#logo")
    logo.classList.add("logorotate")
}

function ptoggleremove() {
    const logo = document.querySelector("#logo")
    logo.classList.remove("logorotate")
}

document.getElementById("calculator").textContent = (8*3*2);