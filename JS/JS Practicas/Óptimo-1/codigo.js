"use strict"//Uso estricto de javascript

/*Prototipos*/ 

let info ={
    "propiedad" : "datos"
};

console.log(info);
console.log(info.__proto__);

let variable = "hola";
console.log(variable);
console.log(variable.__proto__);

let variable2 = [];
console.log(variable2);
console.log(variable2.__proto__);

let variable3 = 32;
console.log(variable3);
console.log(variable3.__proto__);//Number hereda de Object

let variable4 = true;
console.log(variable4);
console.log(variable4.__proto__);//Boolean hereda de Object

let variable5 = function(){};
console.log(variable5);
console.log(variable5.__proto__);//Function hereda de Object
console.log(variable5.prototype);//solo funciona en Funciones
//Si lo creas tu usar prototype

//Todos los objetos heredan de Object
/*
 Caracteristicas
    - Un prototipo definido en su código fuente es mutable.
    - Es en sí mismo un objeto, así como otros.
    - Tiene una existencia física en la menoria.
    - Puede ser modificado y 1lamado.
    - Puede ser visto como un modelo ejemplar de una familia objeto.
    - Un objeto hereda propiedades (valores y métodos) de su prototipo.
 */

let variable6 = ["Juan",231,null];
variable6.reverse();
console.log(variable6);

let variable7 = "Hola Mundo";
variable7 = variable7.substring(0,5);
console.log(variable7);

class Objeto{
    constructor(){};
    hablar(){
        console.log("Hola");
    }

}

let objeto = new Objeto();
console.log(objeto);
console.log(objeto.__proto__);
console.log(objeto.__proto__.__proto__);
/*
objeto.hablar = () => {
    console.log("Modificado fuera");
}

objeto.__proto__.hablar = () => {
    console.log("Modificado fuera");
}
objeto.hablar();
*/
    //.__proto__
objeto.hablar = () => {
    console.log("Modificado fuera");
}

/*Herencia del Metodo hablar*/ 
console.log(objeto);

let arr = [1,2,3,4,5];
//arr.__proto__ = objeto;

arr.__proto__ = objeto.__proto__;

//arr.__proto__ = objeto;

console.log(arr);

arr.hablar();//arr hereda hablar de objeto
arr.__proto__.hablar();
//arr.__proto__.__proto__.hablar();


console.log("-------- Modo Estricto --------");

/*
Modo Estricto ("use strict")
    - Convierte errores de JavaScript en excepciones
    - Mejorando la optimización de los errores y consiguie mejores tiempos de ejecución
    - Evita sintaxis usadas en posteriores a ES6
    - No permite que el progranador realize una "mala sintaxis"
*/
//"use strict" poner al principio del documento

//Si no esta declarada da error
// nombre = "Rodrigo"// da un error por que no esta declarada

//console.log(nombre);

const obj = {};

//Object.defineProperty(obj,"nombre",{value : "Rodrigo"});

Object.defineProperty(obj,"nombre",{value : "Rodrigo",writable : false});

//obj.nombre = "Juan";

console.log(obj.nombre);

const obj1 = { nombre : "Rodrigo"};

//Object.preventExtensions(obj1);//Evita que se agregen mas propiedades

//obj1.apellido = "Sendino";

console.log(obj1);

const str ="Hola";

//str.saludo = "Mundo";  Da error

//console.log(str);

/*
function hablar(texto,texto){//No permite tener 2 parametros iguales
    console.log(texto)
}
*/

let variable8 = "nombremio";
/*
delete variable8;//No se utiliza para eliminar variables o funciones solo propiedades

//delete obj.nombre

console.log(variable8);
*/


    this.nombre = "pedro";
    this.saludar = function(){
        console.log(`Hola ${this.nombre}`);//no se acede por que es undefined
    }

    //saludar();

//no se pueden utilizar numeros octales 023
console.log(0o23 );

//arguments y eval no pueden ser nombres de variables 


function decir(){
    //"use strict";//Solo es valido dentro de su bloque
    //nombredecir = "Juan";
    //console.log(nombredecir);
}
decir();


console.log("-------- Funciones Flecha --------");

/*
Funciones Flecha

    - ¿Porque aparecieron? (Funciones compactas y el uso de This)
    - Si solo hay una expresión, la retornan
    - Parentesis opcionales ante un solo parametro (sin paranetros se requiere parentesis)
    - No son adecuadas para ser usadas como métodos y no pueden ser usadas como constructores
    - Retornan literales si su cuerpo está entre ()
    - This Contextual (No tienen propio this, sino que toman el de la función que lo envuelve)
    - Las reglas de modo estricto aplicadas a This, son ignoradas
    - Función flecha invocada a través de los métodos call, apply y bind
    - No tienen objeto Arguments
    - No tienen propiedad del prototipo prototype
    - No se puede usar Yield (por ende no se pueden usar como funciones generadoras)
    - No puede contener saltos de linea entre sus paranetros y su flecha
    - Orden de parseo
*/

/*
const saludar = () => {
    console.log("Hola");
    console.log("Como estas?")
}
*/

const saludar = () => nombre = "Rodrigo";//Si solo devuelve una expresion se puede devolver 
                                        //cosa que en una funcion normal no funcionaria


const resultado = saludar();

console.log(resultado);//es undefined si la funcion no retorna nada


const saludarfun = function(res) {return nombre = res};
let resultadofun = saludarfun("Rodrigo Funcion");
console.log(resultadofun);

//Si solo tenemos un parametro no hace falta que se pongan parentesis res,y si es una linea {} y tampoco el return
const saludarfle = res => nombre = res;
let resultadofle = saludarfle("Rodrigo Flecha");
console.log(resultadofle);
// si es una funcion sin parametros si hay que poner = () => {}

//no usar para metodos ni constructores
const objfle = {
    nombreobj : "Rodrigo",
    saludarobjfle : () => {console.log(`Hola ${this.nombreobj}`)}//da undefined por que hace referencia a window
}

window.nombreobj = "Rodrigo Window";


objfle.saludarobjfle();

/*
const constructorPersona= (nombre,apellido)=>{
    this.nombre = nombre;
    this.apellido = apellido;
}

let persona = new constructorPersona("Rodrigo","Sendino");

console.log(persona);
*/

console.log("-------- This --------");
/* this */

console.log(this);
console.log(this === window);

this.nombre = "Rodrigo";

console.log(this.nombre);
console.log(window.nombre);

function saludarWin(){// apunta a el objeto
    console.log(`Hola ${this.nombre}`);
}

/*
const saludarWin = () =>{//apunta a window
    console.log(`Hola ${this.nombre}`);// Hace referencia a window por que se esta utilizando como metodo
}
*/

const objetoWin = {
    nombre : "Sendino",
    saludarWin// : saludarWin (No hace falta)
}

objetoWin.saludarWin();



/*const saludarWin2 = () => {
    console.log(`Hola ${this.nombre}`)
}
*/
const saludarWin2 = function(){
    console.log(`Hola ${this.nombre}`)
}


const objetoWin2 = {
    nombre : "Sanz",
    //saludarWin2 : () => {console.log(`Hola ${this.nombre}`)}//This window
    saludarWin2
}

function otroContexto(){
    this.nombre = "Juan";//redefine this y lo cambia a global
    //objetoWin2.saludarWin2();
    this.saludarWin2Otro = saludarWin2;
}

objetoWin2.saludarWin2();

const objetowin3 = new otroContexto();

objetoWin2.saludarWin2();

/*
objetoWin2.saludarWin2();

otroContexto();

console.log(this.nombre);
*/