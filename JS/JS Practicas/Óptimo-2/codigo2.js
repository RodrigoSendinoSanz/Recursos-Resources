"use strict";
/*
LocalStorage y SessionStorage
    - diferencias
    - setItem()
    - getItem()
    - removeItem()
    - clear()
    - Ejemplo de uso (Idioma)

*/

//Se guarda en local

console.log(localStorage);

localStorage.setItem("nombre","Rodrigo");//Comentar para ver como se guarda en el almacenamiento local
//Aplicacion > Alamcenamiento > LocalStorage > nombre
let nombre = localStorage.getItem("nombre");

console.log(nombre);
setTimeout(() => {
    nombre = localStorage.removeItem("nombre");
   setTimeout(() => {
    localStorage.clear();
    sessionStorage.clear();
   },6000)
},3000);


//Sesion actual
console.log(sessionStorage);

sessionStorage.setItem("nombre","Rodrigo 2");//Comentar para ver como se guarda en el almacenamiento local
//Aplicacion > Alamcenamiento > SessionStorage > nombre
let nombre2 = sessionStorage.getItem("nombre");

console.log(nombre);

/* Cambiar el Idioma*/

const modal = document.querySelector(".modal-overlay");


const definirIdioma =() =>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal();
    });
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
        cerrarModal();
    });   
};

const cerrarModal =() =>{

    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000);
}

const idioma = localStorage.getItem("idioma")

if(idioma === null) definirIdioma();
else{ console.log(`Idioma: ${idioma}`)
     modal.style.display = "none";
    }


//if(idioma === "es")  mostrarEnEspañol();
//else mostrarEnIngles();

console.log("============= Drag & Drop ==============");
/*
    Drag & Drop
    - Eventos del objeto
        dragstart
        drag
        dragend
    eventos de zona
        - dragenter
        dragnove
        drop
        dragleave
    propiedad dataTransfer
        getData()
        setData()
    Ejemplo de uso (Texturizador)
*/

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");



//circulo.addEventListener("dragstart",()=>console.log("Iniciando el arrastre"));
//circulo.addEventListener("drag",()=>console.log("Arrastrando"));
//circulo.addEventListener("dragend",()=>console.log("Finalizando el arrastre"));

circulo.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("clase",e.target.className);//mejor con id
    
});





rectangulo.addEventListener("dragenter",()=>console.log("Entrando al rectangulo"));
rectangulo.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log("Moviendo en el cuadrado")});
rectangulo.addEventListener("drop",(e)=>{
    console.log("Rectangulo : "+e.dataTransfer.getData("clase"));
});
rectangulo.addEventListener("dragleave",()=>console.log("Saliendo del rectangulo"));






const transferirTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n);
}

const zona = document.querySelector(".zona");

zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url(./img/textura${n}.png)`;
});

for(let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e));
}

/*
Geolocalization
  - getCurrentPosition()
     - parametros (position, error, options)
     - propiedades de option (enableHightAccuracy, timeout, maximumAge)
  - watchPosition()
  - clearPosition()
*/

const geolocation = navigator.geolocation;

console.log(geolocation);

const position = (pos) =>{
    console.log(pos);
    console.log(`Latitud: ${pos.coords.latitude}`);
    console.log(`Longitud: ${pos.coords.longitude}`);
}

const err = () =>console.log(e);

const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHighAccuracy: true

}

console.log(geolocation.getCurrentPosition(position,err,options));