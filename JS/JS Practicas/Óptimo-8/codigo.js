"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;


const createPublicationCode = (name,content,likes) => {
    const container = document.createElement("div");
    const comentarios = document.createElement("div");
    const megustas = document.createElement("div");
    
    const nombre = document.createElement("h3");
    const contenido = document.createElement("p");
    const liketexto = document.createElement("p");

    const btnComentario = document.createElement("input");
    const btnEnviar = document.createElement("input");
    const btnLike = document.createElement("input");

    const nummegusta = document.createElement("span");


    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    megustas.classList.add("megustas");
    

    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");
    btnLike.classList.add("darlike");

    btnEnviar.type = "submit";
    btnLike.type = "submit";    

   btnComentario.setAttribute("placeholder","Introduce un comentario");
   btnEnviar.setAttribute("value","Enviar");
   btnLike.setAttribute("value","Dar tu like");


   nombre.textContent = name;
   contenido.textContent = content;
   nummegusta.textContent = likes;

   liketexto.classList.add("txtmegusta");

   liketexto.innerHTML = "Likes: "

   
   megustas.appendChild(btnLike);
   liketexto.appendChild(nummegusta);
   megustas.appendChild(liketexto);


   comentarios.appendChild(btnComentario);
   comentarios.appendChild(btnEnviar);

   container.appendChild(nombre);
   container.appendChild(megustas);
   container.appendChild(contenido);
   container.appendChild(comentarios);

   return container;
}

const cargarMasPublis = entry => {
    if(entry[0].isIntersecting) cargarPublicaciones(2);
}

const observer = new IntersectionObserver(cargarMasPublis);

const cargarPublicaciones = async num => {
    const request = await fetch("informacion.json");
    const arr = await request.json();
    let content = arr.content;
    
    const documentFragment = document.createDocumentFragment();

    for (let index = 0; index < num; index++) {
        if (content[contador] != undefined) {
            const newPublicacion = createPublicationCode(content[contador].nombre,content[contador].contenido,content[contador].likes);
            documentFragment.appendChild(newPublicacion);
            contador++;
            if (index == num-1) observer.observe(newPublicacion);
        }else{
            if(publicaciones.lastElementChild.id !== "nomore"){
                let noMore = document.createElement("h3");
                noMore.textContent ="No hay mas publicaciones";
                noMore.id = "nomore"
                documentFragment.appendChild(noMore);
                publicaciones.appendChild(documentFragment);
                break;
            }
        }

    }
    publicaciones.appendChild(documentFragment);
    
}

cargarPublicaciones(5);