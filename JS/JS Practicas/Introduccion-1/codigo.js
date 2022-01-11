alert('Hola codigo')



recipiente = "papel";

console.log(recipiente);

string = "cadena de texto"
number = 14
booleano = true

/*
	var: Sin limitaciones
	let: Limita la variable a el bloque en la que la utilizamos
	const: las variable constantes NO pueden cambiar su valor
*/

var dato;
let dato2;
/*Estas variables imprimirian undefined por que no estan inicializadas */
const dato3 = 1.14;/*Cons se tiene que declarar e inicializar seguido*/
console.log(dato);

console.log(dato3);

var dato4 ="Dato 4";

console.log(dato4);


let numero= 23,numero2,numero3;

numero2=12;

console.log(numero,numero2,numero3);

let numeronull = null;//declarada como vacia


let dato1 = "Hola";
let datonum = 2;
console.log(dato1+datonum);// concatenacion
console.log(dato1*dato2);// da NaN porque no es un numero



//prompt("Hola");//pregunta al usuario
let salidaprompt = prompt("Dime tu nombre");//guardar la respuesta del usuario
console.log(salidaprompt);
alert("Hola "+salidaprompt);

//Operadores de asignacion
//adiccion
let numAdd=3452.46;
numAdd+=5;// numAdd=numAdd+5;\Suma
numAdd-=5;// numAdd=numAdd-5;\Resta
numAdd*=5;// numAdd=numAdd*5;\Multiplicacion
numAdd/=5;// numAdd=numAdd/5;\Division
numAdd%=5;// numAdd=numAdd%5;\Resto
numAdd**=5;// numAdd=numAdd**5;\Potencia numAdd^5
document.write(numAdd);
numAdd--;//numAdd=numAdd-1;\Decremento La resta se hace despues de la asignacion
numAdd++;//numAdd=numAdd+1;\Incremento La suma se hace despues de la asignacion
++numAdd;//numAdd=numAdd+1;\Incremento
--numAdd;//numAdd=numAdd-1;\Decremento
numAdd**5;//Potencia numAdd^5
numAdd&5;//numAdd=numAdd&5;\AND
numAdd|5;//numAdd=numAdd|5;\OR
numAdd^5;//numAdd=numAdd^5;\XOR
numAdd<<5;//numAdd=numAdd<<5;\Desplazamiento a la izquierda
numAdd>>5;//numAdd=numAdd>>5;\Desplazamiento a la derecha
numAdd>>>5;//numAdd=numAdd>>>5;\Desplazamiento a la derecha sin signo
numAdd&=5;//numAdd=numAdd&=5;\AND
numAdd|=5;//numAdd=numAdd|=5;\OR
numAdd^=5;//numAdd=numAdd^=5;\XOR
numAdd<<=5;//numAdd=numAdd<<=5;\Desplazamiento a la izquierda
numAdd>>=5;//numAdd=numAdd>>=5;\Desplazamiento a la derecha
numAdd>>>=5;//numAdd=numAdd>>>=5;\Desplazamiento a la derecha sin signo
-numAdd; //numAdd=-numAdd;\Negativo

//Operadores de comparacion
let numComparacion=23;
console.log(numComparacion>=23);//mayor o igual que
console.log(numComparacion<=23);//menor o igual que
console.log(numComparacion!=23);//diferente que
console.log(numComparacion==23);//igual que
console.log(numComparacion===23);//identico que
console.log(numComparacion!==23);//diferente identico

//Operadores logicos
let numLogico=23;
console.log(numLogico&&23);//AND
console.log(numLogico||23);//OR
console.log(!numLogico);//NOT

//Operadores ternarios
let numTernario=23;
numTernario>=23?console.log("verdadero"):console.log("falso");// argumento?true:false

//Concatnar
let cadena1="Hola";
let cadena2="Mundo";

let frase = cadena1+" "+cadena2;
console.log(frase);

let numcon1=3;
let numcon2=34;

let resultadocon = ""+numcon1+numcon2;//Si detecta texto lo convierte a String
console.log(resultadocon);// da el resultado en String

//Contcat
let numconcat1 = "58";
let numconcat2 = 3;

let resultadoconcat = numconcat1.concat(numconcat2);//Metodo concat para usarlo si o si tenemos que tener un String
console.log(resultadoconcat);// da el resultado en String

let frase1="Rodrigo";
//let frase2="estoy "+frase1+" programando en javascript";
let frase2= `Soy ${frase1} 
y estoy programando en javascript ""'' `;
console.log(frase2);

let escribirhtml =`<h1>Hola</h1>
<p>Hola</p>`;
document.write(escribirhtml);

//no se pueden usar las comillas simples dentro de las comillas dobles y viceversa

//Operadores Comparacion
let numcomp = 23;
let numconp2 = 34;
//El resultado es true o false
console.log(numcomp>numconp2);//mayor que
console.log(numcomp<numconp2);//menor que
console.log(numcomp>=numconp2);//mayor o igual que
console.log(numcomp<=numconp2);//menor o igual que
console.log(numcomp!=numconp2);//diferente que
console.log(numcomp!==numconp2);//diferente en tipo y valor que
console.log(numcomp==numconp2);//igual que
console.log(numcomp===numconp2);//identico que

// == comparacion de valores y === comparacion de tipos (Tambien funciona con Strings)

//Operadores logicos
let log = true;
let log2 = false;
//El resultado es true o false
console.log(log&&log2);//AND Solo es verdadero si los dos son verdaderos
console.log(log||log2);//OR Solo es verdadero si alguno de los dos es verdadero
console.log(!log);//NOT Solo es verdadero si el valor es falso

let numlog1=12;
let numlog2=13;

let afi1=numlog1>numlog2;//false
let afi2=numlog1!=numlog2;// true

console.log(afi1&&afi2);// ||
console.log(numlog1>numlog2&&numlog1!=numlog2);// &&

let numlog3=12;
let numlog4=24;
let numlog5=25;
let numlog6=92;
let numlog7=91;

op=(numlog7>numlog4&&numlog6<numlog5)||(!(numlog3===numlog4)&&numlog5!=numlog5);

console.log(op);

//CamelCase y PascalCase

//nombreMetodo , getElementById , getElementsByClassName , getElementsByTagName , querySelector , querySelectorAll

//Condicionales

	//La condicion del if comprueba si lo que en los parentesis es true o false
if(10<20){
	console.log("If Verdadero");
}

let nombreif = "Rodrigo";

//Tambien se podria utilizas con && ejemplo: (10<20&&nombreif=="Rodrigo")

if(nombreif=="Rodrigo"){//Solo uno si se cumople evita ejecutar las demas por eso el uso del else if
	console.log("If NombreVerdadero"+nombreif);
} else if(nombreif=="Juan"){//Puedes poner todos los elseif en caso de que sea necesario
	console.log("No es rodrigo, es el nombre  Juan");
}else{//Solo uno
	console.log("Else Tu nombre es otro");//Si no cumple ninguna de las condiciones anteriores
}