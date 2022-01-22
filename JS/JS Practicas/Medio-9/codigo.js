/*
Librería Axios
      - Introducción, e instalación https://github.com/axios/axios
      - Basado en promesas
      - Objeto axios
      - metodo get() y post()
      - formas de enviar los datos
      - Ventajas


      Si hay muchas peticiones usar axios, si no usar fetch
*/


     //axios.get//axios.post
axios("informacion.txt")
        .then(res =>console.log(res))//res.data

axios.post("https://reqres.in/api/users",{
    nombre: "Juan",
    apellido: "Perez"
})
        .then(res =>console.log(res))
 


axios("https://reqres.in/api/users",{
    method: "POST",
    data: {
        nombre: "Juan 2",
        apellido: "Perez 2"
    }
})
        .then(res =>console.log(res))