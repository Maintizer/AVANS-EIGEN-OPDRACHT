document.getElementById('test').style.color = "blue";



function jtoggle() {
    const box = document.querySelector("#box");
    box.classList.toggle("ptest");
}

function ptoggle() {
    const logotoggle = document.querySelector("#logotoggle");
    logotoggle.classList.add("logorotateA");
}

function ptoggleB() {
    const logotoggle = document.querySelector("#logotoggle");
    logotoggle.classList.remove("logorotateA");
}

document.getElementById("calculator").textContent = (8*3*2);
