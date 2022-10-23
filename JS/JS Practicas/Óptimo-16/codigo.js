"use strict";

/* 
  Cookies
 
   clave = valor;atr;atr;art;

*/

//let cookies = document.cookie;

// document.cookie = "user=rodrigo;exp"

// console.log(cookies);

// const crearCookies = (name,dias,path,age) => {
//    document.cookie = `${name};expires=${dias};path=${path};max-age=${age}`;
// }


// const newfechaUTC = dias => {
//    let fecha = new Date();
//    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
//    return fecha.toUTCString();
// }


// const crearCookies = (name,dias) => {
//    dias = newfechaUTC(dias);
//    document.cookie = `${name};expires=${dias}`;
// }
   

// crearCookies('usuario=rodrigo','4');


// const obtenerCookie = cookieName => {
//    let cookies = document.cookie;
//    cookies = cookies.split(';');
//    for (let i = 0;cookies.length > i; i++) {
//       let cookie = cookies[i].trim();
//       if(cookie.startsWith(cookieName)){
//          return cookie.split("=")[1];
//       }
      
//    }
//    return 'No hay cookies con este nombre';
// }

//Borrar cookie document.cookie = 'username=0;max-age=0;'