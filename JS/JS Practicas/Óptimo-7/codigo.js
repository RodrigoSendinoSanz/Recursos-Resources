"use strict";

const cajas = document.querySelectorAll(".caja");


const verifyVisibility = (entries) => {
    //const entry = entries[0];
   //console.log(entry.isIntersecting);
   for (const entry of entries) {
        if(entry.isIntersecting){
            console.log("Se esta viendo la caja: ", entry.target.textContent);
        }
   }

}

const options = {
    //rootMargin: "60px"
    //treshold: 0 // 0 realiza el evento al principio 1 cuando termina de verse 0.5 la mitad
}

const observer = new IntersectionObserver(verifyVisibility,options);

//observer.observe(caja3);

for(const caja of cajas) {
    observer.observe(caja);
}