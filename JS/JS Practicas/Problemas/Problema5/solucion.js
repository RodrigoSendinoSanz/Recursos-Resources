
/*A -
-Necesita al menos el 90% de asistencias
-El promedio por materia tiene que ser 7 de 10
-y tiene que tener como minimo el 75% de los trabajos practicos entregados del

- Solicitar lo datos y decir si aprueba o suspende
- Mostar los datos con colores en una consola
*/



const materias = {
    matematicas: [90,6,4,"matematicas"],
    ingles: [95,6,4,"ingles"],
    programacion: [82,7,3,"programacion"],
    logica: [95,8,2,"logica"],
    bbdd: [98,6,3, "bbdd"],
    redes: [84,6,4, "redes"],
    algebra: [94,6,4, "algebra"]
}

const aprobo = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
            console.log(materias[materia][3]);
        if (asistencias >= 90) {
            console.log(`%c  Asistencia Aprobada`, 'color: green');
        }else{
            console.log(`%c  Asistencia Suspendida`, 'color: red');
        }
        if (promedio >= 7) {
            console.log(`%c  Promedio Aprobada`, 'color: green');
        }else{
            console.log(`%c  Promedio Suspendida`, 'color: red');
        }
        if (trabajos >= 3) {
            console.log(`%c  Trabajos Aprobados`, 'color: green');
        }else{
            console.log(`%c  Trabajos Suspendidos`, 'color: red');
        }
    }
}

//aprobo();

/*
B-
Organizar en 2 semanas
- 24 horas para esudiar
- 24 para hacer trabajos practicos
- 56 horas para trabajar
- 8 horas para hacer cosas de la casa

-Organizar diariamente las tareas
-Utilizar la consola para ornanizarlo
-Cada tarea no puede superar las 4 horas


Minutos
30 las cosas de la cosas
100 trabajos practico
10 descanso
100 estudiar
240 trabajo 

*/
let trabaPractico = "100 minutos de trabajo practico";
let estudiar = "100 minutos de estudiar";
let trabajo = "240 minutos de trabajo";
let descanso = "10 minutos de descanso";
let casa = "30 minutos de cosas de casa";



console.log("TAREAS");

for (let index = 0; index < 14; index++) {
    if(index==0){
        console.group("Semana 1");
    }
    if(index==7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
        console.groupCollapsed("Dia "+(index+1));
            console.log(trabajo);
            console.log(descanso);
            console.log(estudiar);
            console.log(trabaPractico);
            console.log(casa);
        console.groupEnd();

}
console.groupEnd();
console.groupEnd();
