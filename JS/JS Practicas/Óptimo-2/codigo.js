"use strict";

/* 
objeto Date
  - getDate()
  - getDay()
  - getMonth()
  - getYear()
  - getHours()
  - getMinutes()
  - getSeconds()
  - Ejemplo de uso (Alarma)

*/

const fecha = new Date();//.__proto__



console.log(fecha);
console.log("Dia del mes: "+fecha.getDate());
console.log(fecha.getDay());//Devuele un array

// Domingo -> 0
// Lunes -> 1
// Martes -> 2
// Miercoles -> 3
// Jueves -> 4
// Viernes -> 5
// Sabado -> 6

if(fecha.getDay()==0){
    console.log("Domingo");
}else if(fecha.getDay()==1){
    console.log("Lunes");
}else if(fecha.getDay()==2){
    console.log("Martes");
}else if(fecha.getDay()==3){
    console.log("Miercoles");
}else if(fecha.getDay()==4){
    console.log("Jueves");
}else if(fecha.getDay()==5){
    console.log("Viernes");
}else if(fecha.getDay()==6){
    console.log("Sabado");
}


console.log(fecha.getMonth()+1);//Devuelve un array
console.log(fecha.getYear());//Devuelve el año actual - 1900
console.log(fecha.getYear()+1900);
console.log(fecha.getFullYear());//Devuelve el año actual

//Horas minutos y segundos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

/*
new Date()
new Date(mitisegundos)
new Date(caderaFecha)
new Date(año_rum,mes_num,dia_num
        [hor_num,in_num,seg_num,mils_num])
*/

//Unix time , tiempo en milisegundos desde 1 enero de 1970
const fecha2 = new Date(10000000000000);
console.log(fecha2);
console.log(fecha2.getFullYear());
console.log(fecha2.getMonth());
console.log(fecha2.getDay());

const fecha3 = new Date(2020,0,1);
console.log(fecha3);



//Fecha actual

console.log(Date.now());//Devuelve el tiempo en milisegundos desde 1 enero de 1970

const fecha4 = new Date(Date.now());
console.log(fecha4);


/* Reloj */

console.log("================ Reloj ================")

const addZeros = n => {
    if(n.toString().length <2) return "0".concat(n);
    return n;
}

const actualizarHora = () =>{
    const time = new Date();
    let hora =  addZeros(time.getHours());
    let min =  addZeros(time.getMinutes());
    let seg =  addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora();
setInterval(actualizarHora,1000);
