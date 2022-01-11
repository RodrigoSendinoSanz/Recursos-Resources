/*

Fiesta:
a
- solo pueden pasar los que tienen 18 años o más
- el primero que entre despues de las 2am no paga

Universidad:
b
- crear un minisistema para registrar los presentes (p) y los asistentes (a)
-Pasados 30 dias, se debe mostrar su situacion final del alumno
-maximo de ausencias 10% si np estas suspenso

tarea calculadora
c
- crear una calculadora
*/
//A
/*
let free = false;

const validarCliente = (time) => {
    let edad = prompt("Ingrese su edad");
    if(edad > 18){
       if(time >= 2 && time < 7 && free == false){
              alert("Puedes entrar gratis por que eres la primera persona que entra despues de las 2am");
              free = true;
       }else {
              alert(`Puedes entrar a pagar son las ${time}hs`);
         }
    }else{
        alert("No puede pasar eres menor");
    }
}
// Resultado
validarCliente(8);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1)
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
*/

//B

/*
let cantidad = prompt("Cuantos alumnos son");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++)
    alumnosTotales[i] = [prompt("Nombre del alumno "+(i+1)),0];


const tomarAsistencia = (nombre,p) => {
    let presencia = prompt(`${nombre} esta presente?`);
    if(presencia == "p" || presencia == "P"){
       alumnosTotales[p][1]++;// seleciona un elemento del array que esta en otro array
    }
}

let dias = 30;
for (i = 0; i < dias; i++){
    for (alumno in alumnosTotales) {//pasa la posicion del array
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {//pasa la posicion del array
    let resultado = `${alumnosTotales[alumno][0]} <br>
    ____________Presentes: <b>${alumnosTotales[alumno][1]} </b><br>
    ____________Ausencias: <b>${dias - parseInt(alumnosTotales[alumno][1])} </b>`;

    if(dias - alumnosTotales[alumno][1] > 18){
        resultado += "<b style='color:red'> Suspenso por inasistencia</b><br><br>";
    }else{
        resultado += "<br><br>";
    }
    document.write(resultado);
}
*/
//C
const sumar = (a,b) => {
    return parseInt(a)+parseInt(b);
}

const restar = (a,b) => {
    return parseInt(a)-parseInt(b);
}

const multiplicar = (a,b) => {
    return parseInt(a)*parseInt(b);
}

const dividir = (a,b) => {
    return parseInt(a)/parseInt(b);
}

alert("Que operacion quires realizar?");
let operacion = prompt("Suma (1), Resta (2), Multiplicacion (3), Division (4)");

if(operacion == 1){
    let num1 = prompt("(+) Ingrese el primer numero");
    let num2 = prompt("(+)Ingrese el segundo numero");
    let resultado=sumar(num1,num2);
    alert(`El resultado es ${resultado}`);
}else if(operacion == 2){
    let num1 = prompt("(-) Ingrese el primer numero");
    let num2 = prompt("(-) Ingrese el segundo numero");
    let resultado=restar(num1,num2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 3){
    let num1 = prompt("(*) Ingrese el primer numero");
    let num2 = prompt("(*) Ingrese el segundo numero");
    let resultado=multiplicar(num1,num2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 4){
    let num1 = prompt("(/) Ingrese el primer numero");
    let num2 = prompt("(/) Ingrese el segundo numero");
    let resultado=dividir(num1,num2);
    alert(`El resultado es ${resultado}`);
}
else{
    alert("No selecciono una operacion valida");
}

 
