/*
Fetch y Axios con Await y Async
       Implementacion
       Importancia el Try Catch
*/
    
/*
const getName = () => {

    fetch("informacion.txt")
        .then(res => {
            if(res.ok) Promise.resolve(res.text())
            else Promise.reject(res);
        })
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);//devuelve undefined
        })

}
*/
const getName = async () => {
       //peticion        //fetch
    let resultado = await axios("informacion.txt");
    //let resultado = await peticion.json();
    let div = document.createElement("div");
    div.classList.add("nombre");
    div.innerHTML = `Nombre: ${resultado.data.nombre}`;//resultado.nombre
    document.body.appendChild(div);


}
const getAge = async () => {
       //peticion        //fetch
    let resultado = await axios("informacion.txt");
    //let resultado = await peticion.json();
    let div = document.createElement("div");
    div.classList.add("edad");
    div.innerHTML = `Edad: ${resultado.data.edad}`;//resultado.edad
    document.body.appendChild(div);


}

document.getElementById("getName").addEventListener("click", getName);
document.getElementById("getAge").addEventListener("click", getAge);