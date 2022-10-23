"use strict";
/*

Web Workers

-- Tipos de Web Worker (Dedicated Worker, Service Worker y Abstract Worker)
-- Dediated Worker: Worker() (Constructor)
-- Parametro Options (type, credentials y name)
-- Método postMessage0 (Enviar mensajes entre el web worker y el script principal)
-- Evento onmessage (Recibir mensajes entre el web worker y el script principal)
-- Método terminate() (Finaliza la ejecución del web worker)
-- Política de origen cruzado (Same-Origin)   El worker tiene que estar en el mismo protocolo,host y puerto mismo origen                                                            I

*/

const worker = new Worker("worker.js");
document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());

worker.addEventListener("message",e =>{
    console.log(e.data);
    worker.terminate();
})


const ejecutarBucle = () => {
    worker.postMessage("que tal? todo bien?");
    // setTimeout(() => {
    //     worker.terminate();
    // },2000)
}

console.log(worker);