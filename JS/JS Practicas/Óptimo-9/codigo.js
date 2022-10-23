"use strict";

const cajadoc = document.querySelector(".cajavisible");
const textodoc = document.querySelector(".texto");

addEventListener("visibilitychange",e => {
    if(e.target.visibilityState == "visible"){
        cajadoc.style.border = "5px dashed orange";
        cajadoc.style.background = "black";
        textodoc.textContent = "";
        textodoc.style.color = "white";
        textodoc.textContent = "Se ha cambiado de ventana";
    } else {
        alert("Has vuelto!");
    }
});