//Funciones Asicronas
const objeto ={
    propiedad1: 'valor1',
    propiedad2: 'valor2',
    propiedad3: 'valor3',
    propiedad4: 'valor4',
};


const obtenerInformacion = () => {   
   setTimeout(() => {return objeto, 1000});
}

console.log(obtenerInformacion());//undefined


const obtenerInformacion2 = () => {  
    return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(objeto)}, 3000);
    }) 
 }
 
console.log(obtenerInformacion2());//promesa


//obtenerInformacion2().then(resultado => console.log(resultado));

const mostrarResultado = async () => {
    resultado = await obtenerInformacion2();
    console.log(resultado);
}

//async function mostrarResultado


mostrarResultado();



const obtenerInformacion3 = (text) => {  
    return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(text)}, Math.random()*2000);
    }) 
 }


 obtenerInformacion3('hola 1').then(resultado => console.log(resultado));

 obtenerInformacion3('hola 2').then(resultado => console.log(resultado));

 obtenerInformacion3('hola 3').then(resultado => console.log(resultado));


const mostarData = async () => {
     data1 = await obtenerInformacion3('hola 1');
     data2 = await obtenerInformacion3('hola 2');
     data3 = await obtenerInformacion3('hola 3');
        console.log(data1);//console.log(data1); sin await devuleve una promsesa
        console.log(data2);
        console.log(data3);
}

mostarData();