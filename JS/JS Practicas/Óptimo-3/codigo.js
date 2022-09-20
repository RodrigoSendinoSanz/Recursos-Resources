"use strict";

/*
Historial
 - back () (vuele atras)
 - forward() (va hacia adelante)
 - tamaño del historial
 - go() (va al sitio indicado con un numero relativo)
 - pushstate() (modifica la URL y conserva la info)
 - propiedad state y evento popstate
 - replaceState (modifica la URL y no la conserva)

*/



console.log("============= History ==============");
console.log(history);
//console.log(history.back());devuelve a la pagina anterior
//console.log(history.forward());//devuelve a la pagina siguiente
console.log(history.length);//devuelve el tamaño del historial
//console.log(history.go());//recarga la pagina si pones history.go(1) va a la proxima pagina del historial y si pones (-1) va a la anterior

console.log(location.href);//devuelve la URL

history.pushState({nombre:"rodrigo"},"titulo","?urlPrueba");//data, titulo, ?url

console.log(location.href);//devuelve la URL

console.log(history.state);//devuelve el estado de la pagina

addEventListener("popstate",(e)=>{
    console.log(e.state);
});

//console.log(history.replaceState({nombre:"pagina 0"},"titulo","?url"));//data, titulo, ?url



console.log("============= FileReader ==============");
/*
FileReader
  - ReadAs Text ()
  - ReadAsDataURL()
  - Ejemplo de uso 1 (Cargar galería dinámicamente)
  - Ejemplo de uso 2 (Combinar con Drag & Drop)
  - Ejemplo de uso 3 (Barra de progreso con progress y loadend)
*/

const archivo = document.getElementById("archivo");
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files[0])
});

const leerArchivo = (archivo)=>{
    const lector = new FileReader();
    lector.readAsText(archivo);
    lector.addEventListener("load",(e)=>{
        console.log(e);
        console.log(e.target.result);
        console.log(JSON.parse(e.currentTarget.result));
    });
    lector.addEventListener("error",(e)=>{
        console.log(e.target.error);
    }
    );
    lector.addEventListener("progress",(e)=>{
        console.log(`${e.loaded} / ${e.total}`);
    });
    lector.addEventListener("loadend",(e)=>{
        console.log("Finalizado");
    }
    );
}


const reader = new FileReader();

console.log(reader);

const archivoMul = document.getElementById("archivoMul");
archivoMul.addEventListener("change",(e)=>{
    leerArchivoMul(archivoMul.files)
});

const leerArchivoMul = ar =>{
    for (let i = 0; i < ar.length; i++) {
      //console.log(ar[i]);
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load",(e)=>{
            console.log(e);
            console.log(e.target.result);
            console.log(JSON.parse(e.currentTarget.result));
        });
    }
}


const archivoURL = document.getElementById("archivoURL");
archivoURL.addEventListener("change",(e)=>{
    leerArchivoUrl(archivoURL.files)
});

const leerArchivoUrl = ar =>{
    for (let i = 0; i < ar.length; i++) {
      //console.log(ar[i]);
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load",(e)=>{
          let newImg =`<img src="${e.currentTarget.result}" alt="">`;
            document.getElementById("resultado").innerHTML += newImg;
        });
    }
}

const archivoURL2 = document.getElementById("archivoURL2");
archivoURL2.addEventListener("change",(e)=>{
    leerArchivoUrl2(archivoURL2.files)
});

const leerArchivoUrl2 = ar =>{
    for (let i = 0; i < ar.length; i++) {
      //console.log(ar[i]);
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load",(e)=>{
          let newImg =`<img src="${e.currentTarget.result}" alt="">`;
            document.getElementById("resultado2").innerHTML += newImg;
        });
    }
}

//No funciona bien
const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",(e)=>{
    changeStyle(e.target,"#444");
});

zona.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    changeStyle(e.target,"#888");
});

zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
    changeStyle(e.target,"#888");
    console.log(e.dataTransfer.files);
    cargarArchivo(e.dataTransfer.files[0]);
});



const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
} 

/*const cargarArchivo = ar =>{
    const reader2 = new FileReader();

    reader2.readAsText(ar);
    reader2.addEventListener("load",(e)=>{
        document.getElementById("resultado3").textContent = e.currentTarget.result;
    });
}*/

const cargarArchivo = imgar =>{
    const reader2 = new FileReader();
    console.log(typeof imgar);
    reader2.readAsDataURL(imgar);
    reader2.addEventListener("load",(e)=>{
        let url = URL.createObjectURL(imgar);
        let img = document.createElement("img");
        img.style.width = "100px";
        img.style.height = "100px";
        img.setAttribute("src",url);
        document.getElementById("resultado3").appendChild(img);
    });
}