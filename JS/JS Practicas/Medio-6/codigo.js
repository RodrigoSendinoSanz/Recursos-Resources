/*CALLBACKS*/

//Es una funcion que pasamos como parametro a otra funcion

function prueba(callback) {
    callback("pedro");
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);

prueba(function decirNombre(nombre){
    console.log(nombre);
})

prueba((nombre)=>{
    console.log(nombre);
})

prueba(nombre=>{
    console.log(nombre);
})

prueba(nombre=>console.log(nombre))


class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

//console.log(new Persona("Pedro", "pedro_perez"));

const data =[
    ["Pedro", "pedro_perez"],
    ["Juan", "juan_perez"],
    ["Ana", "ana_perez"],
    ["Maria", ],
    ["Luis", "luis_perez"],
    ["Jorge", "jorge_perez"],
];

const personas = [];

for(let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0], data[i][1]);
}

console.log(personas);


const obtenerPersona =(id,cb) =>{
    if (personas[id]=== undefined) {
        cb("No existe la persona");
    }else{
        cb(null,personas[id],id);
    }
}

const obtenerInstagram = (id,cb) =>{
    if (personas[id].instagram == undefined) {
        cb("No se ha encontrado el instagram");
    }else{
        cb(null,personas[id].instagram);
    }
}

obtenerPersona(3,(err,persona,id)=>{
    if(err) console.log(err);
    
    else{
        console.log(persona.nombre);
        obtenerInstagram(id,(err,instagram)=>{
            if(err) console.log(err);
            else console.log(instagram);
        });
    }
})


console.log("----------------------------Promesas---------------------------");


//Las promesas son objetos tienen 2 callbacks
//resolve y reject
//resolve es cuando la promesa se cumple (operacion asincrona)
//reject es cuando la promesa falla (operacion asincrona)

let nombre = "Pedro";

const promesa = new Promise((resolve,reject)=>{
    if(nombre !== "Pedro"){
        reject("El nombre no es Pedro");
    }else{
        resolve(nombre);
    }
});

console.log(promesa);//los datos estan encapsulados
console.log(promesa.nombre);//undefined

//accedemos al then si tenemos el resolve
promesa.then((resultado)=>{//then es una funcion que se ejecuta cuando la promesa se cumple
    console.log(resultado);
}).catch((error)=>{
    console.log(error);
});









class PersonaProm{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}



const dataProm =[
    ["Pedro", "pedro_perez"],
    ["Juan", "juan_perez"],
    ["Ana", "ana_perez"],
    ["Maria", ],
    ["Luis", "luis_perez"],
    ["Jorge", "jorge_perez"],
];

const personasProm = [];

for(let i = 0; i < data.length; i++){
    personasProm[i] = new PersonaProm(dataProm[i][0], dataProm[i][1]);
}

console.log(personas);


const obtenerPersonaProm = (id) =>{
    return new Promise((resolve,reject)=>{
        if (personasProm[id] == undefined) reject("No existe la persona");
        else resolve(personasProm[id]);
    });
}

const obtenerInstagramProm = (id) =>{
    return new Promise((resolve,reject)=>{
        if (personasProm[id].instagram == undefined) reject("No se ha encontrado el instagram");
        else resolve(personasProm[id].instagram);
    })
}

let id = 4;
obtenerPersonaProm(id).then((persona) =>{
    console.log(persona.nombre);
    return obtenerInstagramProm(id);
}).then((instagram) =>{
        console.log(instagram);
    }).catch((error) =>{
        console.log(error);
    });



