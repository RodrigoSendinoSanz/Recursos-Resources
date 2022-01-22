/*
A- Formulario

- Contener nombre,mail y materia suspensa
- Validar emails y nombres
- Enviar al servidor de manera clara
*/


const nombre = document.getElementById('nombre');
const email = document.getElementById('mail');
const materia = document.getElementById('materia');
const enviar = document.getElementById('enviar');
const resultado = document.querySelector('.resultado')

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    let error = validar();
    if (error[0]) {// solo si hay error
        resultado.innerHTML = error[1];
        resultado.classList.add('incorrecto');
    } else{
        resultado.classList.add('correcto');
        resultado.classList.remove('incorrecto');
        resultado.innerHTML = 'Datos enviados correctamente';

    }
});

const validar = () => {
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = 'El nombre debe tener entre 5 y 40 caracteres';
        return error;
    } else if (email.value.length < 5 ||
              email.value.length > 40 ||
              email.value.indexOf('@')== -1 ||
              email.value.indexOf('.')== -1) {
        error[0] = true;
        error[1] = 'El email no es valido';
        return error;    
    }
    else if(materia.value.length < 4 ||
            materia.value.length > 40){
        error[0] = true;
        error[1] = 'La materia debe tener entre 5 y 40 caracteres';
        return error;
    }

    error[0] = false;
    return error;
}

