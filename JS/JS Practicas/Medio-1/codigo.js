let youtubeURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';


let ventana = window.open(youtubeURL);

//ventana.close();// cierra la ventana

console.log(ventana.closed);// comprueba si la ventana esta cerrada o no true / false

//window.stop();// detiene la ejecucion del codigo

window.alert('hola');// muestra una ventana de alerta

print();// imprimela pagina


prompt("Dame un dato");// muestra una ventana de dialogo


console.log(confirm("Desea continuar?"));// muestra una ventana de dialogo con un boton de aceptar y cancelar


const screen = window.screen;

console.log(screen);

console.log(screen.availHeight);
console.log(screen.availWidth);


const screenLeft = window.screenLeft;// obtiene la posicion de la ventana en la pantalla segun la izquierda
const screenTop = window.screenTop;// obtiene la posicion de la ventana en la pantalla segun la el borde superior



console.log(screenLeft);
console.log(screenTop);

const scrollX = window.scrollX;// el desplazamiento hacia el lateral en pixeles
const scrollY = window.scrollY;// el desplazamiento hacia abajo en pixeles

console.log(scrollX);
console.log(scrollY);

window.scroll(0,100);// desplaza la ventana a la posicion 0,100 ultimo valor es el eje vertical

window.scrollTo(0,100);// desplaza la ventana a la posicion 0,100 ultimo valor es el eje vertical

window.resizeBy(100,200);// cambia el tamaño de la ventana
window.resizeTo(500,500);// cambia el tamaño de la ventana

window.moveBy(100,200);// mueve la ventana a la posicion 100,200
window.moveTo(500,500);// mueve la ventana a la posicion 500,500


const href = window.location.href;// obtiene la url de la ventana

console.log(href);

console.log(window.location.hostname);// obtiene el nombre del host

console.log(window.location.pathname);// obtiene el path de la ventana

console.log(window.location.port);// obtiene el puerto de la ventana

console.log(window.location.protocol);// obtiene el protocolo de la ventana

//console.log(window.location.assign('https://www.google.com'));// cambia la url de la ventana

//console.log(window.location.reload());// recarga la ventana

//console.log(window.location.replace('https://www.google.com'));// cambia la url de la ventana

console.log(window.location.toString());// muestra la url de la ventana


