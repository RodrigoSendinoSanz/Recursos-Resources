/*
Problema A -
- UN SISTEMA QUE ALMACENE TODA LA INFORMACIÓN DE LAS MATERIAS
  Y LAS MUESTRE DE FORMA ORDENADA

*/
const materiasHTML = document.querySelector('.materias');

const materias =[
    {
        nombre: 'Fisica',
        nota: 7
    },
    {
        nombre: 'Matematicas',
        nota: 8
    },
    {
        nombre: 'Programacion',
        nota: 9
    },
    {
        nombre: 'Ingles',
        nota: 6
    },
    {
        nombre: 'Logica',
        nota: 5
    }
];



const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if(materia == undefined) reject('No existe la materia');
        else setTimeout(() =>{resolve(materia)},Math.random() * 400);
    })
}

/*
obtenerMateria(1).then(res => console.log(res));
obtenerMateria(2).then(res => console.log(res));
obtenerMateria(3).then(res => console.log(res));
obtenerMateria(4).then(res => console.log(res));
*/



const devolverMaterias = async () => {
    let materia = [];
    for(let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);
        let newHTMLCode =`<div class="materia">
                            <div class="nombre">${materia[i].nombre}</div>
                            <div class="nota">${materia[i].nota}</div>
                          </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();



