/*
Control de Flujo y Manejo de Errores

      *Sentencias de bloque.
      *Sentencias de control de flujo.
      *Sentencias de manejo de excepciones.

Excepciones y Tipos de Excepciones

      *Excepciones ECMAScript
      *DOMEXC eption y DOMError

Sentencia Switch
      *sintaxis y clausula case
      *break
      *default



*/ 

let nombre = "Juan";

{
    let nombre = "Pedro";
    alert(nombre);
    {
        let nombre = "Ana";
        alert(nombre);
    }
}

alert(nombre);

if(3>2){//sentencia de control de flujo
    alert("3 es mayor que 2");
}

try{ 
    sdfasdf
} catch(error){//Incondicional
    //console.log(typeof error);
    //console.error(error);
    console.log("Ocurrio un error de referencia");
}


try{ 
    sdfasdf
} catch(error){//Condicional
    if(3>5)
    console.log("Ocurrio un error ");
    else
        console.log("Bien");
}


try{ 
    sdfasdf
} catch(error){
    console.log("Ocurrio un error de referencia");
}finally{
    console.log("Muestra siempre");
}

const pruebaTry =() =>{
    try{ 
        return 1;
    } catch(error){
        return 2;
    }finally{
        return 3;
    }
}

console.log(pruebaTry());


try{
    alert("Hola");
    throw "Error";
} catch(e){
    console.error(e);
}

try{
    throw {// throw ["Valor","Tipo"]
        error: "Error1",
        info: "Informacion del error 1"
    }
} catch(e){
    console.log(e);//e[0],e[1]
    console.log(e.error);
    console.log(e.info);
}

try {
    FunctionnoExintente();
} catch (error) {
    console.error(error);
}



//dfsdfgfd RefernceError
//if{} SyntaxError

/*
switch(expr){
    case valor1:
        sentencia1;
        break;
    case valor2:
        sentencia2;
        break;
    default:
        sentencia3;
}
*/

let fruta = "manzana";
switch(fruta){
    case "manzana":
        alert("Es una manzana");
        break;
    case "pera":
        alert("Es una pera");
        break;
    case "platano":
        alert("Es un platano");
        break;
    default:
        alert("No es una fruta");
}


//Rinde mejor If
if(fruta == "manzana") alert("Es una manzana");
else if(fruta == "pera") alert("Es una pera");
else if(fruta == "platano") alert("Es un platano");
else alert("No es una fruta");


