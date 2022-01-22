/*
Fetch
       - Introducción
       - Basado en promesas
       - objeto fetch
       - text()
       - json()
       - blob()
       - formData()
       - arrayBuffer()
*/

//metodo get por defecto
//basado en promsesas

/* Remplaza a:
     new XMLHttpRequest();
     peticion.open('GET', 'informacion.txt', true);
*/
//La informacion esta encapsulada

fetch("https://reqres.in/api/unknown/2")
        .then(res =>res.json())//res =>res.text()) res.json()
        .then(res =>console.log(res))//JSON.parse(res)) //console.log(res))

fetch("https://reqres.in/api/users",{
    method: 'POST',
    body: JSON.stringify({
        name: 'Rodrigo',
        job: 'Desarrollador'
    }),
    headers: {  
        'Content-type': 'application/json'
    }
})
        .then(res =>res.json())
        .then(res =>console.log(res))



/*
fetch("https://reqres.in/api/users",{
    method: 'POST',
    body: `{name: 'Rodrigo',job: 'Desarrollador'}`,
    headers: {'Content-type': 'application/json'}
}).then(res =>res.json())
  .then(res =>console.log(res))
*/
/*
const imagen = document.querySelector(".img")
        //direcion de la imagen
fetch("logoRSS.png")
        .then(res =>res.blob())
        .then(img =>imagen.src = URL.createObjectURL(img))//cambia la url por cada peticion
 
*/

        const imagen = document.querySelector(".img")
        console.log(imagen)
                //direcion de la imagen
        fetch("https://dog.ceo/api/breeds/image/random")
                .then(res =>res.json())
                .then(result => {
                    console.log(result);
                    imagen.src = result.message
                })
                .catch(err=>console.log(err+" ERROR"))
