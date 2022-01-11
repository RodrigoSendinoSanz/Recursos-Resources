/*
A-

- Indicar las 20 llaves posibles con sus 4 imagenes posibles y el debe selecionar cual usar
- Una vez selecionada enviarlo al servidor 

*/ 

const contenedor = document.querySelector(".flex-container");
let contador = 0;

function crearLlave(nombre,modelo,precio){
    contador++;
    img ="<img class='llaveimg' src='https://upload.wikimedia.org/wikipedia/commons/c/c6/Llave_bronce.jpg' >";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}€</b></p>`;

    return [img,nombre,modelo,precio];
}




let fragmento = document.createDocumentFragment();

for (let index = 1; index <= 20; index++) {

    let modelorandom = (Math.random()*1000).toFixed(0);
    let preciorandom = (Math.random()*10+30).toFixed(2);
    const llave = crearLlave(`Llave ${index}`,`Modelo ${modelorandom}`,`${preciorandom}`);
   
    let div = document.createElement("DIV");
    div.addEventListener("click", () =>{
        document.querySelector(".key-data").value = modelorandom;
    })
    div.tabIndex = index;//hace el elemento focusable
    div.classList.add(`item-${index}`,`flex-item`);
    div.innerHTML = llave.join(" ");
    fragmento.appendChild(div);
   
}
contenedor.appendChild(fragmento);

