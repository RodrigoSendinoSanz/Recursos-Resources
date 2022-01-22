/*
PROBLEMA A

-INTERFAZ PARA INTRODUCIR NOTA
-VALIDAR QUE NO HAYA ERRORES
-PROMEDIAR NOTAS CON TRABAJOS
-SI EL PROMEDIO ES MAYORA 7/10:APROBAR
*/

const enviarBoton = document.getElementById('enviar-nota');


enviarBoton.addEventListener('click', () => {
    let resultado;
    let mensaje;
    try {
       prevRes = parseInt(document.getElementById('nota-alumno').value);
       if(isNaN(prevRes)) {
           throw "Error: No es un numero";
       }
      resultado=varificarAprobado(8,5,prevRes);
      mensaje=definirMensaje(resultado[1]);
    }catch(e){
       resultado = "Error";
       mensaje = "Ha ocurrido un error"
    }
    abrirModal(resultado[0],mensaje);
});

const abrirModal = (resultado,mensaje) => {
    document.querySelector(".resultado").innerHTML = resultado;
    document.querySelector(".mensaje").innerHTML = "Resultado de la prueba : "+mensaje;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "modalIn 5s backwards";
};

const definirMensaje = (pr) => {
    let resultado
    switch(pr) {
        case 1: resultado = "Poco interes";
            break;
        case 2: resultado = "Falta de conocimento";
            break;
        case 3: resultado = "Neceista mejorar";
            break;
        case 4: resultado = "Suspendido";
            break;
        case 5: resultado = "Aprobado";
            break;
        case 6: resultado = "Bien";
            break;
        case 7: resultado = "Notable Bajo";
            break;
        case 8: resultado = "Notable Alto";
            break;
        case 9: resultado = "Sobresaliente";
            break;
        case 10: resultado = "Matricula de Honor";
            break;
        default: resultado = null;
    } 
    return resultado;

};

const varificarAprobado = (nota1,nota2,pr) => {
    promedio = (nota1+nota2+pr)/3;
    console.log("Promedio "+promedio);
    if(promedio>=7) {
        return ["<span class='green'>APROBADO</span>",Math.round(promedio)];
    } else {
        return ["<span class='red'>SUSPENDIDO</span>",Math.round(promedio)];
    }
}

