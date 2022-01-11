let parrafo = document.getElementById("parrafo");// getElementById() obtiene el primer elemento por su id
console.log(parrafo);//Nos muestra que es un objeto [object HTMLParagraphElement]

let parrafos = document.getElementsByTagName("p");// getElementByTagName() obtiene todos los elementos por su etiqueta
console.log(parrafos);//nos muestra un objeto de tipo collection
console.log(parrafos[0]);//no es un array, es una lista de elementos

let parrafoQuery = document.querySelector(".parrafoquery");//querySelector() obtiene el primer elemento por su id # o clase .
console.log(parrafoQuery);//nos muestra un objeto de tipo element

let parrafosQuery = document.querySelectorAll("#parrafo");//querySelectorAll() obtiene todos los elementos por su selector
console.log(parrafosQuery);//nos muestra un objeto de tipo nodelist
console.log(parrafosQuery[0]);//nos muestra un objeto de tipo element


const rango = document.querySelector(".rangoInput");
console.log(rango);

rango.setAttribute("type", "text");//tambien los crea si no los tiene y los modifica
rango.setAttribute("type", "color");// si no existe tambien agrega el atrubito tambien

let valordelatributo= rango.getAttribute("type");//getAttribute() obtiene el valor de un atributo

console.log(`<br>${valordelatributo}<br>`);//nos muestra el tipo de atributo

rango.removeAttribute("type");//remueve el atributo


const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true");//permite editar el contenido

titulo.setAttribute("dir", "lrt");//orentacion del texto

//titulo.setAttribute("hidden", "true");//esconde el elemento

titulo.setAttribute("tabindex","0");//selecciona el elemento haces focus puedes poner 
                                    //varios tabindex asinandolos con numneros y visualizandolo con la tecla tab

titulo.setAttribute("title","nuevotitulo");//titulo del elemento

const input = document.querySelector(".input-normal");

document.write(input.className);
document.write(input.value);
document.write(input.type="file");
input.accept = "image/*";//tipo de archivo que acepta

const input2 = document.querySelector(".input-normal2");

input2.setAttribute("minlength","12")//minimo de caracteres

input2.setAttribute("placeholder","Escribir mas de 12");//nuevo placeholder

input2.setAttribute("required","true");//campo obligatorio


const titulostyle = document.querySelector(".titulomod");

titulostyle.style.color = "red";//cambia el color del texto

titulostyle.setAttribute("style","color:white;");//estilo del elemento
titulostyle.style.backgroundColor = "blue";//cambia el color del fondo
titulostyle.style.fontSize = "60px";//cambia el tamaño del texto
titulostyle.style.fontFamily = "Arial";//cambia la fuente del texto
titulostyle.style.textAlign = "center";//cambia la alineacion del texto
titulostyle.style.textTransform = "uppercase";//cambia el texto a mayusculas
titulostyle.style.textDecoration = "underline";//cambia el texto a subrayado
titulostyle.style.fontStyle = "italic";//cambia el texto a italic
titulostyle.style.fontWeight = "bold";//cambia el texto a negrita
titulostyle.style.letterSpacing = "2px";//espacio entre letras
titulostyle.style.padding = "20px";//espacio entre el texto y el elemento


const titulo3 = document.querySelector(".titulo3");

titulo3.classList.add("nuevacls");//agrega una clase
titulo3.classList.remove("quitar");//remueve una clase
console.log(titulo3.classList.item(1));
console.log(titulo3.classList.contains("nuevacls"));//verifica si tiene la clase

let nombre = "quitar32"
let valor =titulo3.classList.contains(nombre);

/*if(valor){
    console.log(`tiene la clase ${nombre}`);
    titulo3.classList.remove(nombre);
    
}else{
    console.log(`no tiene la clase ${nombre}`);
    titulo3.classList.add(nombre);
}*/
titulo3.classList.toggle("active");// si pones (true) si tiene la clase la deja igual
titulo3.classList.toggle("quitar2");//cambia el estado de la clase

titulo3.classList.replace("remplaza","remplazado");//remplaza una clase por otra


const modificacion = document.querySelector(".modificacion");

let result = modificacion.textContent;// cosa que innertext no puede hacer
console.log(result);
document.write('<br>'+result);
//innerHTML muestra todo el contendo html
let result2 = modificacion.innerHTML;
console.log(result2);

const contenedor = document.querySelector(".contenedor");

//const item = document.createElement("LI");//crea un elemento
const textoItem= document.createTextNode("nuevo item");//crea un nodo de texto
const fragmento = document.createDocumentFragment();//crea un fragmento

//item.appendChild(textoItem);//agrega un nodo de texto al elemento

//console.log(item);

//contenedor.appendChild(item);//agrega un elemento al contenedor

/* console.log(textoItem);
console.log(item); */

for (let index = 0; index < 20; index++) {
    const item = document.createElement("LI");//crea un elemento
    item.innerHTML = `item ${index}`;//crea un nodo de texto
    fragmento.appendChild(item);//agrega un elemento al fragmento
    
}

console.log(fragmento);

contenedor.appendChild(fragmento);//agrega un elemento al contenedor


const primerhijo = contenedor.firstChild;//obtiene el primer hijo nodo texto cuenta espacios las etiquetas tienen que estar juntas coje comentarios
console.log(primerhijo);
const ultimohijo = contenedor.lastChild;//obtiene el ultimo hijo
console.log(ultimohijo);

const firstChild = contenedor.firstElementChild;//obtiene el primer elemento hijo
console.log(firstChild);
const lastChild = contenedor.lastElementChild;//obtiene el ultimo elemento hijo
console.log(lastChild);


const hijos = contenedor.childNodes;//obtiene todos los hijos
console.log(hijos);// el nodeList no es un array peros e puede recorrer con un forEach

const hijos2 = contenedor.children;//obtiene todos los hijos
console.log(hijos2);//no se puede recorrer  con forEach por que es una collecion pero con un for hijo of hijos SI

const parrafoChild = document.createElement("P").innerHTML = "parrafoinner";
const h2Child = document.createElement("H2");
h2Child.innerHTML = "h2inner";
let h2antiguo = document.querySelector(".h2");
                     //   nuevo/antiguo
contenedor.replaceChild(h2Child,h2antiguo);//remplaza un elemento por otro

const h4child = document.querySelector(".h4");
contenedor.removeChild(h4child);//remueve un elemento

let hijostiene =contenedor.hasChildNodes();//verifica si tiene hijos

if (hijostiene) {
    console.log(`tiene hijos`);
} else {
    console.log(`no tiene hijos`);
}

let respuestaparent = h2Child.parentElement;//obtiene el padre siempre busca etiquetas HTML 
console.log(respuestaparent);
let respuestaparent2 = h2Child.parentNode;//obtiene el padre
console.log(respuestaparent);



let respuestahermanos = h2Child.nextSibling;//obtiene el hermano siguiente
console.log(respuestahermanos);
let respuestahermanos2 = h2Child.previousSibling;//obtiene el hermano anterior
console.log(respuestahermanos2);

let respuestahermanos3 = h2Child.nextElementSibling;//obtiene el hermano siguiente
console.log(respuestahermanos3);
let respuestahermanos4 = document.querySelector(".p").previousElementSibling;//obtiene el hermano anterior
console.log(respuestahermanos4);


let div3 = document.querySelector(".div-3");

console.log(div3.closest(".div"));//busca el elemento ascentente mas cercano

















