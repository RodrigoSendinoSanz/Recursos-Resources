console.assert(5<4);// si es verdadero, no muestra nada y si es falso, muestra un mensaje

console.clear();// limpia la consola

console.error("Mensaje de error");// muestra un mensaje de error

console.info("Mensaje de informacion");// muestra un mensaje de informacion

console.log("Mensaje de log");// muestra un mensaje de log


let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria'];
console.table(vegetales);// muestra una tabla con los datos que le pasemos


console.warn("Mensaje de advertencia");// muestra un mensaje de advertencia

console.dir([1, 2, 3, 4]);// muestra una lista de los atributos de un objeto


console.count("Mensaje de conteo");// muestra un mensaje de conteo
console.count("Mensaje de conteo");// muestra un mensaje de conteo
console.count("Mensaje de conteo");// muestra un mensaje de conteo
console.count("Mensaje de conteo");// muestra un mensaje de conteo
console.countReset("Mensaje de conteo");// reinicia el conteo
console.count("Mensaje de conteo");// muestra un mensaje de conteo

console.group("Frutas");// crea un grupo
console.log("Manzana");// muestra un mensaje de log
console.error("Pera");// muestra un mensaje de log
console.warn("Sandia");// muestra un mensaje de log
console.groupEnd("Frutas");// cierra el grupo

console.groupCollapsed("Frutas");// crea un grupo colapsado
console.log("Manzana");// muestra un mensaje de log
console.error("Pera");// muestra un mensaje de log
console.warn("Sandia");// muestra un mensaje de log
console.groupEnd("Frutas");// cierra el grupo



console.time();// inicia un contador de tiempo
console.timeLog();// muestra el tiempo que tarda en ejecutarse una funcion
console.timeEnd();// muestra el tiempo que tarda en ejecutarse una funcion

console.log("%cMensaje personalizado","padding:10px;color:red;background:black;font-size:20px;");// muestra un mensaje personalizado


