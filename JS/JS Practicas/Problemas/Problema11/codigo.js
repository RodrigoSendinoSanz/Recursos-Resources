/*
PROBLEMA A (Xampp - Servidor necesario, meter los datos en el htdocs)

    - UN SISTEMA QUE LE PERMITA OBTENER ESA INFORMACIÓN
    - MOSTRARLA ORDENADAMENTE EN UN SITIO WEB
*/

const getInfo = async () => {
    let aprobados = document.querySelector(".num-aprobados");
    let suspensos =document.querySelector(".num-suspensos");


        try {
            let resultado = await axios("informacion.txt");
            //resultado = resultado.data;
            //console.log(resultado);
            aprobados.innerHTML = resultado.data.aprobados;
            suspensos.innerHTML = resultado.data.suspensos;

        }catch (e) {
            console.log(e);
            aprobados.innerHTML = "La API falló";
            suspensos.innerHTML = "La API falló";
        }
}

document.getElementById("getInfo").addEventListener("click", getInfo);