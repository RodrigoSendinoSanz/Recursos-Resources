/*                                    
`7MMF'   `7MF'                    db           *MM        `7MM                   
  `MA     ,V                                    MM          MM                   
   VM:   ,V    ,6"Yb.  `7Mb,od8 `7MM   ,6"Yb.   MM,dMMb.    MM   .gP"Ya  ,pP"Ybd 
    MM.  M'   8)   MM    MM' "'   MM  8)   MM   MM    `Mb   MM  ,M'   Yb 8I   `" 
    `MM A'     ,pm9MM    MM       MM   ,pm9MM   MM     M8   MM  8M"""""" `YMMMa. 
     :MM;     8M   MM    MM       MM  8M   MM   MM.   ,M9   MM  YM.    , L.   I8 
      VF      `Moo9^Yo..JMML.   .JMML.`Moo9^Yo. P^YbmdP'  .JMML. `Mbmmd' M9mmmP'                                                                                                             
*/                        

/* NUMÉRICAS */
var iva = 21; // variable tipo entero
var total = 150.25; // variable tipo decimal

/* CADENAS DE TEXTO */
var mensaje = "Bienvenido a nuestro sitio web";
var nombreProducto = 'Producto Blablabla';
var letraSeleccionada = 'x';
var texto1 = "Una frase con 'comillas simples' dentro";
var texto2 = 'Una frase con "comillas dobles" dentro';

// De la siguiente forma se mejora bastante la codificación, haciéndola más
var texto1 = 'Una frase con \'comillas simples\' dentro';
var texto2 = "Una frase con \"comillas dobles\" dentro";

/* ARRAY */
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"];
var diaSeleccionado = dias[0]; // diaSeleccionado = "Lunes"
var otroDia = dias[5]; // otroDia = "Sábado"

/* BOOLEAN */
var clienteRegistrado = false;
var ivaIncluido = true;

/*                                   
  .g8""8q.                                              `7MM                                      
.dP'    `YM.                                              MM                                      
dM'      `MM `7MMpdMAo.  .gP"Ya  `7Mb,od8  ,6"Yb.    ,M""bMM   ,pW"Wq.  `7Mb,od8  .gP"Ya  ,pP"Ybd 
MM        MM   MM   `Wb ,M'   Yb   MM' "' 8)   MM  ,AP    MM  6W'   `Wb   MM' "' ,M'   Yb 8I   `" 
MM.      ,MP   MM    M8 8M""""""   MM      ,pm9MM  8MI    MM  8M     M8   MM     8M"""""" `YMMMa. 
`Mb.    ,dP'   MM   ,AP YM.    ,   MM     8M   MM  `Mb    MM  YA.   ,A9   MM     YM.    , L.   I8 
  `"bmmd"'     MMbmmd'   `Mbmmd' .JMML.   `Moo9^Yo. `Wbmd"MML. `Ybmd9'  .JMML.    `Mbmmd' M9mmmP' 
               MM                                                                                 
             .JMML.                                                                               
*/

/* INCREMENTO Y DECREMENTO */
var num = 2; ++numero;
alert(num); // numero = 3

var num = 2;--num;
alert(num); // numero = 1

var numero1 = 5; var numero2 = 2;
numero3 = numero1++ + numero2; // numero3 = 7, numero1 = 6

var numero1 = 5; var numero2 = 2;
numero3 = ++numero1 + numero2; // numero3 = 8, numero1 = 6

/* NEGACIÓN */
var result= true;
alert(!result); // Muestra "false"

/* AND y OR */
var cantidad = 0;
vacio = !cantidad; // vacio = true

cantidad = 2;
vacio = !cantidad; // vacio = false

var mensaje = "";
mensajeVacio = !mensaje; // mensajeVacio = true

mensaje = "Bienvenido usuario";
mensajeVacio = !mensaje; // mensajeVacio = false

var valor1 = true; var valor2 = false;
resultado = valor1 && valor2; // resultado = false

valor1 = true; valor2 = true;
resultado = valor1 && valor2; // resultado = true

var valor1 = true; var valor2 = false;
resultado = valor1 || valor2; // resultado = true

valor1 = false; valor2 = false;
resultado = valor1 || valor2; // resultado = false

/* MATEMÁTICOS */
var numero1 = 10; var numero2 = 5;

resultado = numero1 / numero2; // resultado = 2
resultado = 5 + numero1; // resultado = 15
resultado = numero2 - 2; // resultado = 3
resultado = numero1 * numero2; // resultado = 50
resultado = numero1 % numero2; // resultado = 0

numero1 = 9; numero2 = 5;
resultado = numero1 % numero2; // resultado = 4

var numero1 = 5;
numero1 += 6; // numero1= 11
numero1 -= 1; // numero1 = 4
numero1 *= 2; // numero1 = 10
numero1 /= 5; // numero1 = 1
numero1 %= 4; // numero1 = 1

/* RELACIONALES */
var numero1 = 3; var numero2 = 5;
resultado = numero1 > numero2; // resultado = false
resultado = numero1 < numero2; // resultado = true

numero1 = 5; numero2 = 5;
resultado = numero1 >= numero2; // resultado = true
resultado = numero1 <= numero2; // resultado = true
resultado = numero1 == numero2; // resultado = true
resultado = numero1 != numero2; // resultado = false 

// El operador "=" asigna valores
var numero1 = 5;
resultado = numero1 = 3; // numero1 = 3 y resultado = 3

// El operador "==" compara variables
var numero1 = 5;
resultado = numero1 == 3; // numero1 = 5 y resultado = false

var texto1 = "hola"; var texto2 = "hola"; var texto3 = "adios";
resultado = texto1 == texto3; // resultado = false
resultado = texto1 != texto2; // resultado = false
resultado = texto3 >= texto2; // resultado = false


/*
`7MM"""YMM            mm                                    mm                                          
  MM    `7            MM                                    MM                                          
  MM   d    ,pP"Ybd mmMMmm  `7Mb,od8 `7MM  `7MM   ,p6"bo  mmMMmm  `7MM  `7MM  `7Mb,od8  ,6"Yb.  ,pP"Ybd 
  MMmmMM    8I   `"   MM      MM' "'   MM    MM  6M'  OO    MM      MM    MM    MM' "' 8)   MM  8I   `" 
  MM   Y  , `YMMMa.   MM      MM       MM    MM  8M         MM      MM    MM    MM      ,pm9MM  `YMMMa. 
  MM     ,M L.   I8   MM      MM       MM    MM  YM.    ,   MM      MM    MM    MM     8M   MM  L.   I8 
.JMMmmmmMMM M9mmmP'   `Mbmo .JMML.     `Mbod"YML. YMbmd'    `Mbmo   `Mbod"YML..JMML.   `Moo9^Yo.M9mmmP'                                                                                                       
*/

/* IF */
var mensaje = true;

if(mensaje) { alert("¡¡Hola usuario!!");}
// Se comparan los dos valores
if(mostrarMensaje == false) { alert("¡¡alerta")}

// Error - Se asigna el valor "false" a la variable
if(mostrarMensaje = false) { alert("¡¡alerta")}

var mostrando = false; var permiteMensajes = true;

if(!mostrado && permiteMensajes) { alert("¡¡Es la primera vez que se muestra")}

/* IF-ELSE */
if(condicion) {  alert("si se cumple")}
else { alert("si no se cumple")}

var nombre = "";
if(nombre == "") { alert("¿Cuál es tu nombre de pila");}
else {alert("Hemos guardado tu nombre respetando la LPD");}
if(edad < 12) {alert("Todavía eres muy pequeño para entrar en este programa");}
else if(edad < 19) {alert("Estás en plena adolescencia");}
else if(edad < 35) {alert("Aun sigues siendo joven, ¡¡sigue así!!");}
else {alert("Piensa en cuidarte un poco más");}


/* FOR */
for(inicialización; condición; actualización) { alert("ACEPTADO")}

var mensaje = "Hola, estoy dentro de un bucle dando muchas vueltas";
for(var i = 0; i < 5; i++) { alert(mensaje);}
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"]
for(var i=0; i<7; i++) {alert(dias[i]);} //Mostrará cada uno de los día de la semana

/* FOR-IN */

for(indice in array) {alert(mensaje);}
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"]
for(i in dias) { alert(dias[i]);} //Mostraría los días de la semana

/* WHILE */

while(condicion) { alert(mensaje); }

var resultado = 0; var num = 10; var i = 0;
while(i <= num) {
 resultado += i;
 i++;
}
alert(resultado);

/* DO-WHILE */

do {alert(mensaje); } while(condiciÓn);

var resultado = 1; var num = 5;

do {
 resultado *= num; // resultado = resultado * num
 num--;
} while(num > 0);

alert(resultado);

/* SWITCH */

switch(variable) {
    case valor_1:
    alert(resultado1);
    break;
    case valor_2:
    alert(resultado2);
    break;
    case valor_n:
    alert(resultado3);
    break;
    default:
    alert(noresultado);
    break;
   }

   switch(numero) {
    case 5:
    alert(resultado1);
    break;
    case 8:
    alert(resultado2);
    break;
    case 20:
    alert(resultado3);
    break;
    default:
    alert(resultado4);
    break;
    }

/*  BREAK y CONTINUE */

/* BREAK */
var cadena = "Esto es un texto muy largo que tomamos como ejemplo...";
var letras = cadena.split(""); var resultado = "";
for(i in letras) {
 if(letras[i] == 'a') { break; }
 else {resultado += letras[i];}
}
alert(resultado); // Aparecerá en pantalla "Esto es u"
/* CONTINUE */
var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme.";
var letras = cadena.split(""); var resultado = "";
for(i in letras) {
 if(letras[i] == 'a') { continue; }
 else { resultado += letras[i]; }
}
alert(resultado);
// muestra "En un lugr de l Mnch de cuyo nombre no quiero cordrme..."

/*
`7MMF'  `7MMF'                                               db                         mm                     
  MM      MM                                                                            MM                     
  MM      MM   .gP"Ya  `7Mb,od8  ,6"Yb.  `7MMpMMMb.pMMMb.  `7MM   .gP"Ya  `7MMpMMMb.  mmMMmm   ,6"Yb.  ,pP"Ybd 
  MMmmmmmmMM  ,M'   Yb   MM' "' 8)   MM    MM    MM    MM    MM  ,M'   Yb   MM    MM    MM    8)   MM  8I   `" 
  MM      MM  8M""""""   MM      ,pm9MM    MM    MM    MM    MM  8M""""""   MM    MM    MM     ,pm9MM  `YMMMa. 
  MM      MM  YM.    ,   MM     8M   MM    MM    MM    MM    MM  YM.    ,   MM    MM    MM    8M   MM  L.   I8 
.JMML.  .JMML. `Mbmmd' .JMML.   `Moo9^Yo..JMML  JMML  JMML..JMML. `Mbmmd' .JMML  JMML.  `Mbmo `Moo9^Yo.M9mmmP' 
*/

/* Herramientas útiles */

/* LENGHT */
var mensaje = "Hola Mundo";
var numLetras = mensaje.length; // numLetras = 10

/* + */
var variable1 = "Hola "; var variable2 = 3;
var mensaje = variable1 + variable2; // mensaje = "Hola 3"

var mensaje1 = "Hola";
var mensaje2 = "usuario";
var mensaje = mensaje1 + " " + mensaje2; // mensaje = "Hola usuario"

/* UPPER & LOWER */
var mensaje1 = "HolA";
var mensaje2 = mensaje1.toUpperCase(); // mensaje2 = "HOLA"
var mensaje2 = mensaje1.toLowerCase(); // mensaje2 = "hola"

/* CHARAT */
var mensaje = "Hola";
var letra = mensaje.charAt(0); // letra = H
letra = mensaje.charAt(2); // letra = l

/* INDEXOF & LASTINDEXOF */
var mensaje = "Hola";
var posicion = mensaje.indexOf('a'); // posicion = 3
posicion = mensaje.indexOf('b'); // posicion = -1
var mensaje = "Hola";
var posicion = mensaje.lastIndexOf('a'); // posicion = 3
posicion = mensaje.lastIndexOf('b'); // posicion = -1

/* SUBSTRING */
var mensaje = "Hola usuario";
var porcion = mensaje.substring(2); // porcion = "la usuario"
porcion = mensaje.substring(5); // porcion = "usuario"
//Ejemplo de utilización de herramientas para textos.
porcion = mensaje.substring(7); // porcion = "rio"
var porcion = mensaje.substring(5, 0); // porcion = "Hola "
porcion = mensaje.substring(0, 5); // porcion = "Hola "

/* SPLIT */
var mensaje = "¡¡Hola usuario, soy una cadena de texto!!";
var palabras = mensaje.split(" ");
// palabras = ["¡¡Hola", "usuario,", "soy", "una", "cadena", "de", "texto!

var palabra = "Hola";
var letras = palabra.split(""); // letras = ["H", "o", "l", "a"]


/* Herramientas para números */

/* NAN */
var numero1 = 0; var numero2 = 0;
alert(numero1/numero2); //muestra el valor NaN
/* ISNAN */
var num1 = 0;
var num2 = 0;
if(isNaN(num1/num2)) {alert("La división no está definida para estos número")}
else {alert("La división es igual a => " + numero1/numero2);}
/* TOFIXED*/
var numero1 = 4564.34567;
numero1.toFixed(2); // 4564.35
numero1.toFixed(6); // 4564.345670
numero1.toFixed(); // 4564

/* Herramientas para arrays */
var vocales = ["a", "e", "i", "o", "u"];
var numVocales = vocales.length; // numVocales = 5
/* CONCAT */
var array1 = [1, 2, 3];
array2 = array1.concat(4, 5, 6); // array2 = [1, 2, 3, 4, 5, 6]
array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6]
/* JOIN */
var array = ["hola", "ususario"];
var mensaje = array.join(""); // mensaje = "holausuario"
mensaje = array.join(" "); // mensaje = "hola usuario"
/* POP & PUSH */
var array = [1, 2, 3];
var ultimo = array.pop(); //array = [1, 2], ultimo = 3
array.push(4); //array = [1, 2, 3, 4]
/* SHIFT & UNSHIFT */
var array = [1, 2, 3];
var primero = array.shift(); // array = [2, 3], primero = 1
array.unshift(0); // array = [0, 1, 2, 3]
/* REVERSE */
var array = [1, 2, 3];
array.reverse(); // array = [3, 2, 1]



/*Escribir texto en panatalla

 <script>
document.write("Hola Mundo, este es el primer JS.");
 </script>
 
 */