"use strict";

// Crear base de datos
const IDBRequest = indexedDB.open("rodrigobase",1);

console.log(IDBRequest);

/*
IDBRequest.addEventListener("upgradeneeded",()=>{
    console.log("Base de datos creada correctamente");
});
*/

// Alamacen de datos

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement: true,

    });
});


IDBRequest.addEventListener("success",()=>{
    leerObjetos();
    console.log("Todo correcto");
});

IDBRequest.addEventListener("error",()=>{
    console.log("Ocurrio un error al abrir la base de datos");
});

document.getElementById("add").addEventListener("click",()=>{
    let nombre = document.getElementById('nombre').value;
    if(nombre.length > 0){
        if (document.querySelector(".posible") != undefined) {
            if (confirm('Hay elementos sin guardar: ¿Quieres continuar?')) {
                addObjeto({nombre});//{nombre:nombre}
                leerObjetos();
            }
        }else{
            addObjeto({nombre});//{nombre:nombre}
            leerObjetos();
        }
    }
});



//Conseguir datos
const getIDBData = (mode,msg) =>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres",mode);//readonly readwrite
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", ()=>{
        console.log(msg);
    })
    return objectStore;
}


// Crear
const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite","Objeto creado correctamente");

    IDBData.add(objeto);

}
// Leer
const leerObjetos = () => {
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment(".nombres");
    document.querySelector('.nombres').innerHTML = "";
    cursor.addEventListener("success", ()=>{
        if (cursor.result) {
            let elemento = nombresHTML(cursor.result.key,cursor.result.value);
            fragment.appendChild(elemento)
            //console.log(cursor.result.value);
            cursor.result.continue();
        } else {
            document.querySelector(".nombres").appendChild(fragment);
           // console.log("Todos los datos han sido leidos");
        }

    } 
    )
}
//Modificar
const modificarObjeto = (key,objeto) => {
    const IDBData = getIDBData("readwrite","Objeto modificado correctamente");

    IDBData.put(objeto, key);
}
//Eliminar
const eliminarObjeto = (key) => {
    const IDBData = getIDBData("readwrite","Objeto eliminado correctamente");

    IDBData.delete(key);
}


const nombresHTML = (id,name) => {
    const contanier = document.createElement("div");
    const h2 = document.createElement("h2");
    const options = document.createElement("div");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    contanier.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    contanier.appendChild(h2);
    contanier.appendChild(options);

    h2.addEventListener("keyup",() =>{
        saveButton.classList.replace("imposible","posible")
    });

    saveButton.addEventListener("click", () =>{
        if (saveButton.className == 'posible') {
            modificarObjeto(id, {nombre: h2.textContent});
            saveButton.classList.replace("posible","imposible")
        }
    });

    deleteButton.addEventListener("click", () =>{
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(contanier);
    });

    return contanier;
}