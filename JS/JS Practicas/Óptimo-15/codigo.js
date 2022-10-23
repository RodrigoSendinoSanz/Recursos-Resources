"use strict";

/* 
  Service Workers

  Intermediario entre navegador y servidor.( Solo se instal una vez)

   Interfaz serviceworker

   serviceWorker llifeCycle:https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
   
   Registrar un service worker con el método

   enviar mensajes con el método postMessage()
   
   evento Fetch
   
   Registrar Caché y mostrar sitio web offline

   Chat Realtime

 
*/



console.log(navigator.serviceWorker);

if(navigator.serviceWorker){
   navigator.serviceWorker.register("sw.js");

}else{
   console.log("Tu navegador no soporta service workers")
}

navigator.serviceWorker.ready.then(res => res.active.postMessage("Hola que tal?"));



navigator.serviceWorker.addEventListener('message',e =>{
   console.log("Hemos recibido un mensaje del service Worker: "+e.data);

})