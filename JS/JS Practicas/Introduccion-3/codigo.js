//POO

class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie} de color ${this.color} y tengo ${this.edad} años`;
    }
    verInfo(){
        document.write(this.info+"<br>");
    }
    /*ladrar(){//polimorfismo
        if(this.especie == "perro"){
            document.write("GUAU GUAU <br>");
        }else{
            document.write(`Este animal no puede ladrar por que es un ${this.especie}<br>`);
        }
    }*/

}


// NO SE PUEDE TENER UN OBJETO CON EL MISMO NOMBRE QUE LA CLASE
class Perro extends animal{//herencia
    constructor(especie,edad,color,raza){
        super(especie,edad,color,raza);
        this.raza = raza;
    }
    static ladrar(){//Se ejecuta sin haber instanciado la clase
        document.write("GUAU GUAU <br>");
    }

    //Getters y Setters
    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
}

const perro = new Perro("perro",2,"marron","Labrador");
const gato = new animal("gato",3,"negro");
const pajaro = new animal("pajaro",1,"multicolor");

Perro.ladrar();

/* document.write(perro);
console.log(perro);
document.write("<br>");
document.write(perro.especie);
document.write("<br>");
document.write(perro.info + "<br>");
document.write(gato.info + "<br>");
document.write(pajaro.info + "<br>"); */


//perro puede usar los metodos de animal y de Perro
perro.verInfo();
gato.verInfo();
pajaro.verInfo();

document.write(perro.getRaza);
document.write("<br>");
perro.setRaza = "Pastor Aleman";
document.write(perro.getRaza);
//perro.ladrar();


//gato.ladrar();
//pajaro.ladrar();

//Abstraccion
//Se basa en reducir el codigo y hacerlo mas legible, resumiendo los metodos y variables y simplificandolo

//Modularidad
//Se basa en dividir el codigo en archivos y hacerlos mas legibles y separar el codigo

//Encapsulamiento
//Se basa en ocultar los detalles de una clase para que la informacion no pueda salir de su clase

//Polimorfismo
//Se basa en que una clase puede tener varias formas, es decir, que puede tener varios metodos y variables


//Un metodo estatico es un metodo que no necesita de un objeto para poder ser usado

/*static ladrar(){
    document.write("GUAU GUAU <br>");
}
*/