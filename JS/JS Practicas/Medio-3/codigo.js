//EVENTOS

const button = document.querySelector('.button');


/* Desfasado
button.onclick = function() {
    alert('Hola');
}
*/
/*
button.addEventListener('click', function() {
    alert('Hola');
});
*/

/*
function saludar(){
    alert('Hola');
    button.removeEventListener('click', saludar);//Elimina el evento y solo se pulsaria una vez
}


button.addEventListener('click', saludar);
*/
/*
button.addEventListener('click', ()=>{
    alert('Pedro');
});
*/

/*
button.addEventListener('click',(e)=>{
    console.log(e.target);// e sola muestra todo el evento, e.target muestra lo que desencadeno el evento
});
*/


//Flujo de eventos 

const azul = document.querySelector(".container-2");
const rojo = document.querySelector(".container-1");

//Los eventos se pueden ejecutar de los mas especificos los (hijos) a los mas genericos (contenedores)

button.addEventListener('click',(e)=>{
    alert('Di en el boton');
    e.stopPropagation();//Detiene el evento en el contenedor //Capturing
});



/* contenedor.addEventListener('click',(e)=>{
    alert('Di en el contenedor');
}); */


//El flujo de eventos por defencto es = Bubblining
//si queremos cambiar el flujo de evnetos a el ultimo parametro le ponemos true
azul.addEventListener('click',(e)=>{
    alert('Di en el contenedor azul');
});//se le da el true a el contenedor que esta mas arriba
//,true
rojo.addEventListener('click',(e)=>{
    alert('Di en el contenedor rojo');
   
});//se le da el true a el contenedor que esta mas arriba
//,true





//Mouse Events


const button2 = document.querySelector('.buttonMouse');

//Doble click 
button2.addEventListener('dblclick',(e)=>{
    alert('Di Dobleclick');
});

const azul2 = document.querySelector(".container-2Mouse");
//MouseOver pasar el raton por encima
azul2.addEventListener('mouseover',(e)=>{
    alert('Pase por el segundo contenedor azul');// se ejecuta cuando se sale
});

 
azul2.addEventListener('mouseout',(e)=>{
    alert('Saliendo del segundo contenedor azul');// se ejecuta cuando se sale
});

const rojo2 = document.querySelector(".container-1Mouse");

rojo2.addEventListener('contextmenu',(e)=>{
    alert('Se ha abierto el menu');
});

//mouseenter cuando se mueve sopobre un elementointernet explorer 
//mousemove ocurre cuandise mueve mientras esta sobre el elemento
//mouseleave cuando se sale del elemento
//mousedown cuando se presiona el boton del raton sobre el elemento
//mouseup cuando se suelta el boton del raton sobre el elemnto


rojo2.addEventListener('mousedown',(e)=>{
    alert('Se ha presionado el rojo2');
});
rojo2.addEventListener('mousedown',(e)=>{
    alert('Se ha soltado el rojo2');
});

//Eventos de teclado

const input = document.querySelector('.inputprueba');


input.addEventListener('keydown',(e)=>{// cuando e deja de presionar
    console.log("Una tecla fue presionada "+e.key);//e.key
});

input.addEventListener('keypress',(e)=>{//cuando una tecla se presiona
    console.log("Una tecla fue presiono una tecla");//e.key
});

input.addEventListener('keyup',(e)=>{// cuando los eventos anteriores hayan concluido
    console.log("Una tecla fue soltada");//e.key
});

//Eventos de interfaz
/*
*error - ocurre cuando sucede un error durante la carga de un archivo multimedia.
*load - ocurre cuando un objeto se ha cargado
*beforeunload - ocurre antes de que el documento esté a punto de descargarse
*unload - ocurre una vez que se ha descargado una página
*resize - ocurre cuando se cambia el tamaño de la vista del documento
*scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento
*select - ocurre después de que el usuario selecciona algún texto de <input> o <textarea>
*/

const img =document.querySelector('.imgprueba');

img.addEventListener('error',(e)=>{// saca el error si lo se realiza correctamente la carga de la imagen (Multi media)
    console.log('Ha sucedido un error');
});

//se omite el window.
addEventListener('load',(e)=>{// cuando se carga el documento
    console.log('Se ha cargado el body');
});

//se omite el window.
onload = function(){
    console.log('Se ha cargado el body');
};

addEventListener('beforeunload',(e)=>{// cuando se carga el documento
    console.log('te vas a ir del sitio');
});

addEventListener('unload',(e)=>{// cuando se carga el documento
    console.log('te vas a ir del sitio');
});


addEventListener('resize',(e)=>{// cuando se cambia el tamaño de la ventana
    console.log('El tamaño de la ventana ha cambiado');
});

addEventListener('scroll',(e)=>{// cuando se desplaza la barra de desplazamiento de un elemento
    console.log('Se ha desplazado la barra de desplazamiento');
});

input.addEventListener('select',(e)=>{// cuando se selecciona algún texto de <input> o <textarea>
    console.log('Se ha seleccionado algun texto');
    let start = e.target.selectionStart;//desde donde comenzo a seleccionar
    let end = e.target.selectionEnd;//donde acabo la selecion
    let textoCompleto = input.value;//texto completo
    let textoSeleccionado = textoCompleto.substring(start,end);//texto seleccionado
    console.log(textoSeleccionado);
});


//Temporizadores
//Primer parametro funcion, segundo parametro tiempo en milisegundos
const temporizador = setTimeout(()=>{
    console.log('Hola mundo');
},3000);

clearTimeout(temporizador);

const saludar = ()=>{
    console.log('Hola mundo2');
};

setTimeout(saludar,4000);


const intervalo = setInterval(()=>{
    console.log('Hola mundo3');
},1000);

setTimeout(()=>{
    clearInterval(intervalo);
},5000);


