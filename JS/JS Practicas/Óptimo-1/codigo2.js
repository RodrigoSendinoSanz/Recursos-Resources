"use strict";
console.log("-------- Recursividad --------");

const validarEdad =(msg) => {
    let edad;
    try{
        if(msg) edad = prompt(msg);
        else edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para la edad";
        if (edad > 18) console.log("Es mayor de edad");
        else console.log("Es menor de edad");
    } catch(err){
        validarEdad(err);
    }
}


validarEdad();

const saludar = (nombre) => {
    return function(){
        console.log("Hola "+nombre);
    }
}

let saludo = saludar("Juan");

addEventListener("load", saludo);



let aux;

const cambiarTamaño = tamaño => {
    return () => {
        document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}
let px12 = cambiarTamaño(12);
let px14 = cambiarTamaño(14);
let px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t16").addEventListener("click", px16);


            //a= 0,b =0
const suma =(frase,...num) => {//parametro rest(tiene que ser el ultimo parametro)
    //b = typeof b !== "undefined" ? b : 0;
    //b = b || 0;
    let resultado = 0;
    for(let i = 0; i < num.length; i++){
        resultado += num[i];
    }
    console.log(`${frase} ${resultado}`);
}
suma("Resultado : ",10,23);


/* Operador ternario */
console.log("-------- Operador ternario --------");
//utiliza menos recursos


let edad = 19;
if (edad > 18){
     console.log("es mayor de edad");
     console.log("puede pasar");
} else {console.log("es menor de edad")}


/*Operador ternario */

/*
if (edad > 18) console.log("es mayor de edad");
else {console.log("es menor de edad")}
 */
(edad > 18) ? console.log("es mayor de edad") : console.log("es menor de edad");
// si quieres qu realize una accion se encierra en parentesis y se separan por coma

(edad > 18) ? (console.log("es mayor de edad"),
               console.log("puede pasar")
               ) :( console.log("no puede pasar"),
                    console.log("es menor de edad"));


/* 
Operador Spread (spread operator)
    - añadir arrays a otros arrays
    - concatenar arrays
    - como argumento rest
 */ 


console.log("-------- Operador Spread --------");

let valor1 = "Valor 1";
let valor2 = "Valor 2";
let valor3 = "Valor 3";

let arr =["Valor 1", "Valor 2", "Valor 3"];

console.log(valor1, valor2, valor3); 
console.log(arr);

console.log(...arr);//devuelve los valores del array


let frutas = ["Manzana", "Pera", "Naranja"];
let frutas2 = ["Platano", "Melon", "Sandia"];

//frutas.push(frutas2);//mete un array dentro de otro
console.log(frutas);

//para agregarlo sin utliliar el spread operator seria:
// frutas.push(frutas2[0], frutas2[1], frutas2[2]);

//frutas.push(...frutas2);// este mete la informacion dentro del otro array
//console.log(frutas);


let frutas3 =[...frutas, ...frutas2];//mete los dos arrays dentro de uno
//Manteniendo los valores originales sin modificar ninguno de los 2 arrays
console.log(frutas3);


const restar = (num1,num2,num3) => {
    console.log(num1-num2);
}

let arrNum = [23,3];

restar(...arrNum);

