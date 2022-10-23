"use strict";

/* 
  Screen


*/
let AnchoTotal = screen.width //ancho total de La pantalla
let AlturaTotal = screen.height //altura total de la pantalla

let AnchoDisponible = screen.availWidth //ancho disponible de la pantalla
let AlturaDisponible = screen.availHeight //altura disponible de la pantalla

let Resolucion = screen.pixelDepth //resoLucién de color de la pantalla
let Profundidad = screen.colorDepth //profundidad de bits de la paleta de colores

console.log(`Width: ${AnchoTotal}`);
console.log(`Height: ${AlturaTotal}`);
console.log();
console.log(`Disponible Width: ${AnchoDisponible}`);
console.log(`Disponible Height: ${AlturaTotal}`);
console.log();
console.log(`Resolucion: ${Resolucion}`);
console.log(`Profundidad: ${Profundidad}`);