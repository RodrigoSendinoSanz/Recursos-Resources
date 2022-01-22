/*
B) Los datos de cofia y de otros alumnos fueron recibidos y ya están almacenados,
ahora hay que crear un sistema que muestre esa información y se pueda asignar
cuando rinde.
                                                                                       
           - La interfaz debe ser agradable y atractiva.
            Debe contener todos los datos de manera estructurada.
           - El profesor puede seleccionar en cual de las 2 semanas rinde el usuario.
           - Si el profesor confirma, los datos se deben actualizar y reemplazar el espacio de seleccion de semana por la semana seleccionada.

*/

let alumnos = [{
    nombre: "Juan",
    email: "juandsf@mail.com",
    materia: "Matematicas"
}, {
    nombre: "Pedro",
    email: "pedro@mail.com",
    materia: "Fisica"
}, {
    nombre: "Cofia",
    email: "Cofia@gmail.com",
    materia: "Programacion"
}, {
    nombre: "Pepe",
    email: "pepe@mail.com",
    materia: "Logica"
}, {
    nombre: "Sofia",
    email: "sofia@mail.com",
    materia: "Matematicas"
}];

const boton = document.querySelector(".botonconfirmar");
const contenedor =document.querySelector('.grid-container')

let htmlCode = '';

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos['nombre'];
    let email = datos['email'];
    let materia = datos['materia'];
    htmlCode += `  
                            <div class="grid-item nombre">${nombre}</div>
                            <div class="grid-item email">${email}</div>
                            <div class="grid-item materia">${materia}</div>
                            <div class="grid-item semana">
                                <select class="semana-elegida">
                                    <option value="Semana 1">Semana 1</option>
                                    <option value="Semana 2">Semana 2</option>
                                </select>
                            </div>
                `;
    contenedor.innerHTML = htmlCode;
}


boton.addEventListener('click', () => {
    let confimar = confirm('Realmente desea confirmar?');
    if(confimar){
        //document.body.removeChild(boton);
        boton.disabled = true;
        let elementos = document.querySelectorAll('.semana');
        let semanasElegidas = document.querySelectorAll('.semana-elegida');
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})