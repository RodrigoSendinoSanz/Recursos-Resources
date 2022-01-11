//let cadena = "Cadena de prueba";
let cadena = new String("Cadena de prueba");

let cadena2  = "Cadena"//a
let cadena3 = "abc";

// Concat - Concatena dos cadenas

let resultado = cadena.concat(" hola");

let resultado2 = cadena.concat(" ", cadena2);

console.log(resultado);

console.log(resultado2);

//BUSQUEDA

// startsWith - Comprueba si la cadena empieza por una determinada cadena
                              //"Cadena"
resultado3 =  cadena.startsWith(cadena2);// si pones cadena 2 daria false

console.log(resultado3);

// endsWith - Comprueba si la cadena termina por una determinada cadena

resultado4 =  cadena.endsWith(cadena2);
console.log(resultado4);

//includes - Comprueba si la cadena contiene una determinada cadena

resultado5 =  cadena.includes(cadena2);

console.log(resultado5);

//indexOf - Devuelve la posición de la primera ocurrencia de una cadena

resultado6 =  cadena.indexOf("a");// si no se encuentra  devuelve -1

console.log(resultado6);

//lastIndexOf - Devuelve la posición de la última ocurrencia de una cadena

resultado7 =  cadena.lastIndexOf("a");

console.log(resultado7);

//RELLENAR

//padStart - Añade una cadena a la izquierda rellenando con una string
                            //numero de caracteres a añadir
resultado8 =  cadena3.padStart(10, "111");

console.log(resultado8);

//padEnd - Añade una cadena a la derecha el rellenando con una string

resultado9 =  cadena3.padEnd(10, "1111");

console.log(resultado9);

//repeat - Repite una cadena un número determinado de veces

resultado10 =  cadena.repeat(3);

console.log(resultado10);


//TRANSFORMAR

//split - Divide una cadena en un array

let cadena4 = "Hola,mundo,como,estas";

resultado11 =  cadena4.split(",");// se pued una cadena o un caracter o un espacio

console.log(resultado11);
console.log(resultado11[1]);

//substring - Devuelve una subcadena de una cadena

resultado12 =  cadena4.substring(0,4);
resultado13 =  cadena4.substring(5,10);

console.log(resultado12);
console.log(resultado13);

//toLowerCase - Convierte una cadena a minúsculas

resultado14 =  cadena4.toLowerCase();

console.log(resultado14);

//toUpperCase - Convierte una cadena a mayúsculas

resultado15 =  cadena4.toUpperCase();

console.log(resultado15);

//toString - Convierte un número o un booleano a cadena
let numero = 50;
console.log(typeof numero);
let resultado16 =  numero.toString();
console.log(typeof resultado16);
console.log(2 + resultado16);// no funciona con multiplicacion y division

// trim - Elimina los espacios en blanco de una cadena

let cadena5 = "   Hola mundo   ";
let resultado17 =  cadena5.trim();
console.log(resultado17);

//trimEnd - Elimina los espacios en blanco al final de una cadena

let resultado18 =  cadena5.trimEnd();
console.log(resultado18);//"   Hola mundo";

//trimStart - Elimina los espacios en blanco al inicio de una cadena
let resultado19 =  cadena5.trimStart();
console.log(resultado19);//"Hola mundo   ";

// valueOf - Devuelve el valor de una cadena o un número

let resultado20 =  cadena.valueOf();
let resultado21 =  numero.valueOf();
console.log(resultado20);
console.log(resultado21);




//METDOS DE ARRAY

//TRANSFORMADORES

let nombres = ["Juan", "Pedro", "Luis", "Maria"];

//pop() - Elimina el último elemento de un array y lo devuelve

let resultado22 = nombres.pop();

console.log(resultado22);// nos muestra cual fue eliminado

console.log(nombres);// nos muestra el array sin el elemento eliminado

//shift() - Elimina el primer elemento de un array y lo devuelve

let resultado23 = nombres.shift();

console.log(resultado23);// nos muestra cual fue eliminado

console.log(nombres);// nos muestra el array sin el elemento eliminado

let nombres2 = ["Juan", "Pedro", "Luis", "Maria"];
document.write("Array original: <b>" + nombres2 + "</b> <br>");
let resultado24 = nombres2.pop();//shift()
document.write("Nombrer borrado: <b style='color:red;'>" + resultado24 + "</b> <br>");
document.write("Array despues de shift: <b>" + nombres2 + "</b> <br>");


//push() - Añade uno o más elementos al final de un array

let nombres3 = ["Juan", "Pedro", "Luis", "Maria"];

let resultado25 = nombres3.push("Ana", "Juana");//tambien se puede añadir un un solo valor

console.log(resultado25);// nos muestra el número de elementos añadidos
console.log(nombres3);


//reverse() - Invierte el orden de los elementos de un array

let numerosarray = [1,2,3,4,5,6,7,8,9,10];

resultado26 = numerosarray.reverse();

console.log(resultado26);


// unshift() - Añade uno o más elementos al inicio de un array

let resultado27 = numerosarray.unshift(1,3);//lo agrega al principio

console.log(resultado27);
console.log(numerosarray);

//sort() - Ordena los elementos de un array

let numerosort = [2,1,9,3,6,7,4,8,5];//si son strings los ordena alfabeticamente

numerosort.sort();

console.log(numerosort);

//splice() - Elimina elementos de un array 
                //-1 es el último elemento (pero es mejor usar el push)
numerosort.splice(1,2,"/");//elimina los elementos de la posición 1 y tres elementos

numerosort.splice(5,0,"Numero1","Numero2");// tambien puedes añadir elementos en una posición determinada

console.log(numerosort);

//ACCESORES

//join() - Devuelve una cadena con todos los elementos de un array separados por una cadena

let numerosjoin = [1,2,3,4,5,6,7,8,9,10];
document.write("Array original: <b>" + numerosjoin + "</b> <br>");

                                    //"-"
let resultado28 = numerosjoin.join("<br>elemento: ");

document.write("elemento: "+ resultado28)

//slice() - Devuelve una copia de una parte de un array

let resultado29 = numerosjoin.slice(2,5);// muestra parte del array

console.log(resultado29);

console.log("_____________Repeticion_______________");
// REPETICION

//filter() - Devuelve un nuevo array con los elementos que cumplan la condición

let numerorep = [1,2,3,4,5,6,7,8,9,10];

//numerorep.filter(numero => console.log(numero));

let resultado30 = numerorep.filter(numero => numero > 5);

console.log(resultado30);

console.log("____________________________");

//forEach() - Ejecuta una función para cada elemento de un array

let resultado31a = numerorep.forEach(numero => console.log(numero));


//let resultado31 = numerorep.forEach(numero => numero > 5);//no lo permite
//console.log(resultado31);



//map() - Devuelve un nuevo array con los resultados de la función 
console.log(numerorep)
let resultado32 = numerorep.map(numero => numero * 2);
console.log(resultado32);

//Math



console.log("_____________Funciones de Math_______________");	
//sqrt - Raiz cuadrada
numeroMath = Math.sqrt(16);
console.log(numeroMath);

//cbrt - Raiz cubica
numeroMath = Math.cbrt(27);
console.log(numeroMath);

//max - Máximo
numeroMath = Math.max(14,23,31,34,25,64,76,18,92,10);
console.log(numeroMath);

//min - Mínimo
numeroMath = Math.min(14,23,31,34,25,64,76,18,92,10);
console.log(numeroMath);

//random - Número aleatorio entre 0 y 1
numeroMath = Math.random();
console.log(numeroMath);

numeroMath = Math.random() * 99;// si no quiero que no salga el 100 o el 0 ponemos 99
console.log(numeroMath);
/*numestring = numeroMath.toString();
numstr = numestring.slice(0,2);
if (numestring[1] == "."){
    numstr = numestring[0];
}
console.log(numstr);
*/


//round - Redondea un número

numeroMathRound = Math.round(numeroMath);
console.log(numeroMathRound);


//floor - Redondea un número hacia abajo

numeroMathFloor = Math.floor(numeroMath);
console.log(numeroMathFloor);

//ceil - Redondea un número hacia arriba
numeroMath = Math.ceil(numeroMath);
console.log(numeroMath);

//fround - Redondea un número hacia abajo
numeroMathFround = Math.fround(9.1255545555555555545555557788754545555);
console.log(numeroMathFround);

//trunc - Elimina decimailes
numeroMathTrunc = Math.trunc(9.1255545555555555545555557788754545555);
console.log(numeroMathTrunc);

//PI

let numeroPI = Math.PI;
console.log(numeroPI);

//SQRT1_2 - Raiz cuadrada de 1/2
let numeroSQRT1_2 = Math.SQRT1_2;
console.log(numeroSQRT1_2);

//SQRT2 - Raiz cuadrada de 2
let numeroSQRT2 = Math.SQRT2;

//E - Euler
let numeroE = Math.E;
console.log(numeroE);

//LN2 - Logaritmo natural de 2
let numeroLN2 = Math.LN2;
console.log(numeroLN2);

//LN10 - Logaritmo natural de 10
let numeroLN10 = Math.LN10;

//LOG2E - Logaritmo de 2 base e
let numeroLOG2E = Math.LOG2E;
console.log(numeroLOG2E);

//LOG10E - Logaritmo de 10 base e
let numeroLOG10E = Math.LOG10E;
console.log(numeroLOG10E);
