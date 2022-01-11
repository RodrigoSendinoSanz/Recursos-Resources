let arrays =["bannana", "pera", "manzana"];//Todas las posiciones del array estan declaradas pero a partir de la posicion [2] son undefined 


console.log(arrays)
alert(arrays);
console.log(arrays[0]);
alert(arrays[1]);
console.log(arrays[3]);//undefined

let multi =["nombre", 12, true, 'a'];

console.log(multi[0]);
console.log(multi[1]);
console.log(multi[2]);
console.log(multi[3]);

//Arrays asociativos
    //propiedad : valor

let pc1 ={
    nombre : 'MiPc',
    procesador : 'i7',
    ram : '16gb',
    discoDuro : '1tb',
    marca : 'MSI'
}

let pc2=["MiPc", "i7", "16gb", "1tb", "MSI"];

console.log("Array normal");
console.log(pc2[0]);
console.log(pc2[1]);

console.log("Array asociativo 1");
console.log(pc1["nombre"]);
console.log(pc1["procesador"]);

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let discoDuro = pc1["discoDuro"];
let marca = pc1["marca"];

let frase = "Mi PC es un " + nombre + " con un procesador " + procesador + " y una ram de " + ram + " y un disco duro de " + discoDuro + " y una marca " + marca;
let frase2 = `Mi PC es un <b>${nombre}</b> con un procesador <b>${procesador}</b> y una ram de <b>${ram}</b> y un disco duro de <b>${discoDuro}</b> y una marca <b>${marca}</b> <br>`;
console.log(frase);
document.write(frase2);

console.log("Array asociativo 2");
console.log(pc1.nombre);
console.log(pc1.procesador);

let personas = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
    direccion: {
        calle: "Calle falsa",
        numero: "123"
    }
}

//Buccles

//While

let numeroParaSumar = 0;

/*if(numeroParaSumar < 10){
    numeroParaSumar++;//Aumenta 1
    console.log("El numero es " + numeroParaSumar);
}*/
while(numeroParaSumar < 1000){ //hasta que no sea falsa no para el bucle
    numeroParaSumar++;//Aumenta 1
    console.log("El numero es " + numeroParaSumar);

    if(numeroParaSumar == 10){
        break;//rompe el bucle
    }
}


//do while
numeroParaSumar = 0;

do{//se ejecuta al menos una vez

    console.log("El numero es " + numeroParaSumar);
    numeroParaSumar++;//Aumenta 1
}
while(numeroParaSumar < 10)


let bd = ["Pepe", "Juan", "Maria", "Pedro", "Jorge", "Ana", "Luis", "Juana", "Juanito", "Juanita","Jose","Fernando","Sancho","Jimena","Raul","Eustaquio","Ramon","Esmeralda","Francisca","Alejandro","Alejandra","Anton","Andrea","Cristiano","Pablo"];
let length = bd.length;
let i = 0;
let busqueda = "Luis";//Busca el nombre en el array

//buscar un nombre en el array

//los bucles for y while son  indeterminados por
// que mientras la condicion se cumpla se efectuan un numero infinito de veces

console.log("==========Bucle while============");
while(i < length){
    console.log(bd[i] + " " + i);
    i++;
    if(bd[i] == busqueda){
        console.log("Encontrado! "+bd[i] + " posicion:" + i);
        i=0;
        break;//rompe el bucle
    }
}

console.log("=========Bucle do while==========");

do{
    console.log(bd[i] + " " + i);
    i++;
    if(bd[i] == busqueda){
        console.log("Encontrado! "+bd[i] + " posicion:" + i);
        i=0;
        break;//rompe el bucle
    }
}
while(i < length)


//For
//delacracion/inicilizacion - condicion - incremento/decremento/iteracion
//for(inicio; condicion; incremento)

for (let i = 0; i <= 6; i++) {
    console.log(i);
}

for (let i = 6; i >= 0; i--) {
    console.log(i);
}
console.log("Bucle for continue 10");
for (let i = 1; i <= 5; i++) {
    if(i == 3){// ejemplo si una palabra es igual a otra o no se quiere incluir en un array se usa continue
        continue;//salta ese numero del bucle
    }
    //si queremos que termine antes de mostrar el numero el if se coloca aqui
    console.log(i);
}

let animales = ["perro", "gato", "pajaro", "pez", "tortuga", "caballo", "cabra", "camello", "cocodrilo", "canguro"];
    //animales.tama = "grande";
// animal es igual a cada valor en cada vuelta del bucle
for (animal in animales) {
    console.log(animal);//devuleve la posicion del array
    //console.log(animales[animal]);//devuleve el valor del array
}

for (animal of animales) {
    console.log(animal);//devuleve el valor del array
}

console.log("=====Bucle for=======");
for(let i = 0; i < length; i++){
    console.log(bd[i] + " " + i);
    if(bd[i] == busqueda){
        console.log("Encontrado! "+bd[i] + " posicion:" + i);
        i=0;
        break;//rompe el bucle
    }
}


let array1= ["c", "d", "e"]
let array2= ["a", "b",array1,"f"]


forLabel:
for (array in array2) {
    if(array == 2){//recorre el array en la psoicion 2
        for (let array of array1) {
            //continue;salta el array
            console.log(array);
            //break;// muestra f por que el break solo finaliza este bucle
            break forLabel;//rompe el bucle de arriba
            //pasa lo mismo con el continue
        }
    }else{
        console.log(array2[array]);
    }
}


//funciones
console.log("=========Funciones==========");
function saludar(){ //declarar funcion
    let respuestafun = prompt("¿Como estas?");

    if (respuestafun == "bien") {
        console.log("Me alegro");
    } else {
        console.log("Vaya lo siento");
    }
    
}

saludar();//llamar funcion

let saludar2 =function(){
    let respuestafun = prompt("¿Como estas?");

    if (respuestafun == "bien") {
        console.log("Me alegro");
    } else {
        console.log("Vaya lo siento");
    }
    
}

saludar2();


function funcreturn(){
    return "Valor returndo";//finaliza la funcion
    // lo que venga despues no se ejecutaria
}

let respuesta = funcreturn();

document.write(respuesta);






function sumar(num1fun, num2fun){
    let sumafun =  num1fun + num2fun;
    console.log("La suma es " + sumafun);
}

sumar(12,13);
sumar(21,31);

let num1funPro = parseInt(prompt("Introduce un numero"));
let num2funPro = parseInt(prompt("Introduce otro numero"));

sumar(num1funPro, num2funPro);


function sumar2(x, y){
    let ressum2 = x + y;
    return ressum2;
}

let resulSum2 = sumar2(12,13);//sumar2(12,13) = ressum2

console.log(resulSum2);

function saludar3(nombre){
    let frase =`<br> Hola ${nombre}`;
    document.write(frase);
}

saludar3("Juan");

//funciones flecha
//ejemplo:
const saludar4 = function(nombre){
        let frase =`<br> Hola ${nombre}`;
        document.write(frase);
}

saludar4("Pepe");

/*
const x = () => {
   ... 
}

Si solo tiene una linea de codigo no es necesario usar llaves y
 si solo tiene un parametro no es necesario poner los parentesis 
 y se retorna automaticamente no es necesario poner return

const imprimirnombre = nombre => document.write(nombre);


*/


                //(nombre) si solamente se pasa un parametro en la funcion se puede poner sin parentesis nombre
const saludar5 = (nombre) => {
    let frase =`<br> Hola ${nombre}`;
    document.write(frase);
}

saludar5("Jose Luis");

const imprimirnombre = nombre => document.write(`<br> Hola ${nombre}`);

imprimirnombre("Flecha");