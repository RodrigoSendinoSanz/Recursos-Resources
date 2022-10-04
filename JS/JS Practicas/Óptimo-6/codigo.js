"use strict";

const  mq = matchMedia("(max-width: 500px)");
const caja = document.querySelector(".caja");

console.log(mq);
console.log(mq.matches);

mq.addEventListener("change", () => {
   // console.log("Resolucion cambiada");
    if (mq.matches) 
        caja.classList.replace("caja","responsive-caja");
    else if (caja.className = "responsive-caja")
        caja.classList.replace("responsive-caja","caja");
})