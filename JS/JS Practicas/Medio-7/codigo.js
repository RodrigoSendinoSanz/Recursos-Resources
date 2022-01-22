/*Peticiones http*/

//Es una peticion que enviamos nosotros a un servidor que nos devuelve un dato respuesta 



//JSON
/*
Datos Estructurados (JSON)
       - Definición, Usos y Sintaxis
       - Serialización y Deserialización
       - Método parse() - Convierte un string con estructura JSON a Formato JSON (deserializar)
       - Método stringify() - Convierte un dato de Javascript en una cadena de texto JSON (serializar)
       - JSON PolyFill https://developer.mozilla.org/en-US/docs/web/Javascript/Reference/Global_objects/JSON/parse
*/

const objeto = {
    Var1 : "Juan",
    Var2 : "Pepe"
};

//Formato JSON
/*
objetojson = {
    "Var1": "Juan",
    "Var2"  : "Pepe"
};
*/

// Desserializado : 
const objetojson = {"Var1": "Juan","Var2"  : "Pepe"};
//Serializado :const objetojson = '{"Var1": "Juan","Var2"  : "Pepe"}';// Cuando este se envia se envia asi
const serializado = JSON.stringify(objetojson);// lo hace serializado y lo convierte a String
//serializado = '{"Var1": "Juan","Var2"  : "Pepe"}';
const deserializar = JSON.parse(serializado);// lo hace deserializado y lo convierte a objeto
//deserializar = {Var1: "Juan",Var2: "Pepe"};
console.log(objeto);
console.log(objetojson);
console.log(serializado);
console.log(typeof serializado);
console.log(deserializar);
console.log(typeof deserializar);

//JSON PolyFill funcion que se utiliza en navegadores antiguos
 
console.log("============ AJAX ================");

/*

AJAX

       - Introducción e instalación del servidor
       - Objeto XMLHttpRequest
       - Enviar peticiones GET
       - Trabajar el resultado de las peticiones
       - Objeto Activexobject (Messirve)
       - Nueva forma de trabajar el resultado
       - Enviar peticiones POST
       - Objeto FormData

*/


/* AJAX*/

/* https://www.apachefriends.org/es/download.html
Poner esta carpeta en la carpeta hdocs de Xampp

*/
let peticion;

if (window.XMLHttpRequest) {
    // code for modern browsers
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}


peticion.addEventListener('readystatechange', () => {
    // 1 Soliciotud creada correctamente 
    // 2 Se envio correctamente
    // 3 Se esta precesando la peticion
    // 4 Se recibio la respuesta
    console.log(peticion.readyState); 
    //console.log(peticion.response);// en el 3 y 4 ya devuelve la informacion
    
    console.log(peticion.status);

    if(peticion.readyState === 4 && peticion.status === 200){
        console.log(peticion.responseText);
    }




    
});

//Forma actualizada
peticion.addEventListener('load', () => {
    let respuesta;
    if (peticion.status === 200) respuesta = peticion.responseText;
    else respuesta = 'Error: ' + peticion.status;
    console.log(typeof respuesta);//Esta serializado, tenemos que deserializarlo
    console.log(respuesta);
    console.log(JSON.parse(respuesta).nombre);//deserializar
    //Si quisieramos enviar informacion tendriamos que Serializarlo : JSON.stringify(objeto)

});



                //https://reqres.in/api/users?page=2
peticion.open('GET', 'informacion.txt', true);

peticion.send();// si no se usa el send() no carga la informacion





console.log(peticion);




let peticion2;

if (window.XMLHttpRequest) {
    // code for modern browsers
    peticion2 = new XMLHttpRequest();
} else {
    peticion2 = new ActiveXObject("Microsoft.XMLHTTP");
}

;

//Forma actualizada
peticion2.addEventListener('load', () => {
    let respuesta;
    if (peticion2.status === 200|| peticion2.status === 201) respuesta = peticion2.response;
    else respuesta = 'Error: ' + peticion2.status;
    console.log(respuesta);
    console.log(JSON.parse(respuesta));//deserializar
});



                
peticion2.open('POST', 'https://reqres.in/api/users', true);

peticion2.setRequestHeader('Content-type','application/json;charset=UTF8');

peticion2.send(JSON.stringify({
    "nombre": "Rodrigo",
    "trabajo"  : "Desarrollador"
}));// si no se usa el send() no carga la informacion


console.log(peticion2);