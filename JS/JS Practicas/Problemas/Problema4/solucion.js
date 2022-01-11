//A -
// Calculadorea para calcular potencias, raices cuadradas y cubicas de un numero
class Calculadora{
    constructor(){

    }
     sumar (a,b)  {
        return parseInt(a)+parseInt(b);
    }

     restar (a,b) {
        return parseInt(a)-parseInt(b);
    }

     multiplicar (a,b) {
        return parseInt(a)*parseInt(b);
    }

     dividir (a,b) {
        return parseInt(a)/parseInt(b);
    }
     potenciar (a,b) {
        return Math.pow(parseInt(a),parseInt(b));
    }
     raizCuadrada (a) {
        return Math.sqrt(parseInt(a));
    }
     raizCubica (a) {
        return Math.cbrt(parseInt(a));
    }
}
/*
const calculadora = new Calculadora();
alert("Que operacion quires realizar?");
let operacion = prompt("Suma (1), Resta (2), Multiplicacion (3), Division (4),Potencia (5), Raiz cuadrada (6), Raiz cubica (7)");

if(operacion == 1){
    let num1 = prompt("(+) Ingrese el primer numero");
    let num2 = prompt("(+)Ingrese el segundo numero");
    let resultado=calculadora.sumar(num1,num2);
    alert(`El resultado es ${resultado}`);
}else if(operacion == 2){
    let num1 = prompt("(-) Ingrese el primer numero");
    let num2 = prompt("(-) Ingrese el segundo numero");
    let resultado=calculadora.restar(num1,num2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 3){
    let num1 = prompt("(*) Ingrese el primer numero");
    let num2 = prompt("(*) Ingrese el segundo numero");
    let resultado=calculadora.multiplicar(num1,num2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 4){
    let num1 = prompt("(/) Ingrese el primer numero");
    let num2 = prompt("(/) Ingrese el segundo numero");
    let resultado=calculadora.dividir(num1,num2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 5){
    let num1 = prompt("(^) Ingrese el primer numero");
    let num2 = prompt("(^) Ingrese el segundo numero (Exponente)");
    let resultado=calculadora.potenciar(num1,num2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 6){
    let num1 = prompt("(√) Ingrese el primer numero");
    let resultado=calculadora.raizCuadrada(num1);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 7){
    let num1 = prompt("(∛) Ingrese el primer numero");
    let resultado=calculadora.raizCubica(num1);
    alert(`El resultado es ${resultado}`);
}
else{
    alert("No selecciono una operacion valida");
}
*/







//B -
// funcion que al pasar como parametro de entrada la materia  nos devuelva el profesor que la imparte y el numero de  alumnos 
// funcion que nos indique en cuantas clases esta Cofla nombre de esas clases y sus profesores

const obtenerInformacion = (materia) => {
    materias = {
        fisica:["Ramirez","Pedro", "Juan","Carlos", "Raquel","Cofla"],
        programacion:["Perez","Maria", "Juan","Carlos", "Ramon"],
        matematicas:["Ibanez","Pedro", "Ana","Carlos", "Ramon"],
        quimica:["Santamaria","Ignacio", "Juan","Carlos", "Ramon","Cofla"]
    }

    if (materias[materia] != undefined){
        return [materias[materia],materia,materias,];
    }else{
        return materias;
    }
        
    }

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        let numeroAlumnos = informacion[0];
        numeroAlumnos.shift();
        document.write(`El profesor de <b>${informacion[1]} </b> es: <b style="color: red">${profesor}</b> y los alumnos son: <b style="color: blue">${numeroAlumnos}</b><br>`);
    }
}

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();
    let clasesPresentes =[];
    let cantidadTotal = 0;
    for(info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+info);
        }
    }
    return `El alumno <b style="color: blue">${alumno}</b> esta en <b style="color: red">${cantidadTotal}</b> clases
    Esta cursando las clases: <b style="color: green">${clasesPresentes}</b>
    <br>`;
}


/*
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("matematicas");
mostrarInformacion("quimica");

document.write(cantidadDeClases("Cofla"));
document.write(cantidadDeClases("Juan"));
*/




//C -
//Crear funcion para preguntar a Cofla en que materia se quiere inscribir
// si hay 20 suscripciones nesgar la suscripcion
// si hay menos de 20 suscripciones se puede inscribir



materiasSus = {
    fisica:["Ramirez","Pedro", "Juan","Carlos", "Raquel","Cofla"],
    programacion:["Perez","Maria", "Juan","Carlos", "Ramon"],
    matematicas:["Ibanez","Pedro", "Ana","Carlos", "Ramon"],
    quimica:["Santamaria","Ignacio", "Juan","Carlos", "Ramon","Cofla"]
}

const inscribir = (alumno, materia) => {
    personas = materiasSus[materia];
    if (personas.length >= 21){
        document.write(`Lo siento <b>${alumno}</b> no se puede inscribir a <b>${materia}</b> las clases ya estan llenas<br>`);
    }else{
        personas.push(alumno);
        if (materia == "fisica") {
            materiasSus = {
                fisica:personas,
                programacion:materiasSus['programacion'],
                matematicas:materiasSus['matematicas'],
                quimica:materiasSus['quimica']
            }
        }
        else if (materia == "programacion") {
            materiasSus = {
                fisica:materiasSus['fisica'],
                programacion:personas,
                matematicas:materiasSus['matematicas'],
                quimica:materiasSus['quimica']
            }
        }
        else if (materia == "matematicas") {
            materiasSus = {
                fisica:materiasSus['fisica'],
                programacion:materiasSus['programacion'],
                matematicas:personas,
                quimica:materiasSus['quimica']
            }
        }
        else if (materia == "quimica") {
            materiasSus = {
                fisica:materiasSus['fisica'],
                programacion:materiasSus['programacion'],
                matematicas:materiasSus['matematicas'],
                quimica:personas
            }
        }
        document.write(`<b>${alumno}</b> se ha inscrito a <b>${materia}</b> <br>`);
    }
}

document.write(materiasSus['programacion']+"<br>");

inscribir("Cofla","programacion");
inscribir("Juan","programacion");
inscribir("Pedro","programacion");
inscribir("Ana","programacion");
inscribir("Carlos","programacion");
inscribir("Raquel","programacion");
inscribir("Eduardos","programacion");
inscribir("Sara","programacion");
inscribir("Laura","programacion");
inscribir("Andrea","programacion");
inscribir("Oscar","programacion");
inscribir("Alejos","programacion");
inscribir("Carla","programacion");
inscribir("Yanire","programacion");
inscribir("Sancho","programacion");
inscribir("Raul","programacion");
inscribir("Carolina","programacion");
inscribir("Isa","programacion");
inscribir("Andres","programacion");


document.write("<br>"+materiasSus['programacion']);
//document.write("<br>"+materiasSus['programacion'].length);