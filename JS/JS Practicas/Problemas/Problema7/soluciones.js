/*

Problema - A

Pantalla:

        - Al menos full HD
        - Preguntar si esta seguro de comprar la pantalla 
*/

let alto = window.screen.height;//el availHeight es el alto disponible de la pantalla en el buscador incuyendo la barra del navegador
let ancho = window.screen.width;


comprar = confirm(`Alto: ${alto} - Ancho: ${ancho}`);

if (comprar) {
    alert("Compra realizada");
} else{
    alert("Compra cancelada");
}



/*
Problema - B

        - Crear un sistema para conocer el sitio web
*/


let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let port = window.location.port;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b> <br>
            Hostname: <b>${hostname}</b> <br>
            Pathname: <b>${pathname}</b> <br>
            Ruta: <b>${href}</b> <br>
            Puerto: <b>${port}</b> <br>`;


document.write(html);
