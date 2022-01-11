/*
A Venta de moviles
- Mostrar 3 particularidades de los 3 telefonos
- Cada uno debe tener un color, peso, resolucion de pantalla, camara y memoria RAM
- Deben poder encender, reiniciar,apagar, hacer fotos y grabar

B Implementar nuevas funciones
- Grabar en camara super lenta
- Tienen reconocimiento facial
- y una camara extra

C Aplicaciones
- Crear un  sistema para decir que app descargar
- Debe contener la cantidad de descargas puntuacion y peso
- Debe poder ser instalada, abrir, cerrar y desinstalar
*/

class Moviles{
    constructor(color,peso,resolucion,camara,memoria){
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.memoria = memoria;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Movil encendido");
            this.encendido = true;
    
        }else{
            alert("Movil ya esta apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Movil reiniciando");
        }else{
            alert("Movil no esta encendido");
        }

    }

    sacarFoto(){
        alert(`Tomando foto con una resolucion de ${this.resolucion}`);
    }
    grabarVideo(){
        alert(`Grabando movil con una resolucion de ${this.resolucion}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion: <b>${this.resolucion}</b><br>
        Camara: <b>${this.camara}</b><br>
        Memoria: <b>${this.memoria}</b><br>
        `;
    }
}

class MovilAltaGama extends Moviles{
    constructor(color,peso,resolucion,camara,memoria,camaraExtra){
        super(color,peso,resolucion,camara,memoria);
        this.camaraExtra = camaraExtra;
    }

    reconociomientoFacial(){
        alert(`Realizando reconocimiento facial`);
    }
    grabarCamaraSuperLenta(){
        alert(`Grabando movil con camara super lenta `);
    }

    infoAltaGama(){
        return this.mostrarInfo() + `
        Camara extra: <b>${this.camaraExtra}</b><br>
        `;
    }
}


movil = new Moviles("rojo", "150g", "5'", "FullHD720", "4gb");
movil1 = new Moviles("azul", "100g", "7'", "480", "6gb");
movil2 = new Moviles("verde", "200g", "8'", "FullHD720", "7gb");


/* movil.presionarBotonEncendido();
movil.sacarFoto();
movil.grabarVideo();
movil.reiniciar();
movil.presionarBotonEncendido(); */

document.write(`
                ${movil.mostrarInfo()} <br>
                ${movil1.mostrarInfo()} <br>
                ${movil2.mostrarInfo()} <br>
                `);


document.write(`<hr>`);

movilAlta3 = new MovilAltaGama("dorado", "300g", "8'", "4k", "8gb", "FullHD720");
movilAlta4 = new MovilAltaGama("plateado", "400g", "10'", "4k", "10gb", "FullHD1080");

document.write(`
                ${movilAlta3.infoAltaGama()} <br>
                ${movilAlta4.infoAltaGama()} <br>
                `);

document.write(`<hr>`);

class App{
    constructor(nombre,descargas,puntuacion,peso){
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert(`Aplicacion ${this.nombre} abriendo`);
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert(`Aplicacion ${this.nombre} cerrando`);
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert(`Aplicacion ${this.nombre} instalando`);
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert(`Aplicacion ${this.nombre} desinstalando`);
        }
    }

    infoApp(){
        return `
        Nombre: <b>${this.nombre}</b><br>
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }

}

let app = new App("Facebook", "100000000", "4.2", "100mb");
let app1 = new App("Whatsapp", "100000000", "5", "200mb");
let app2 = new App("Instagram", "10000000", "4", "800mb");
let app3 = new App("Twitter", "100000000", "5", "100mb");
let app4 = new App("Spotify", "1000000", "4", "400mb");
let app5 = new App("Netflix", "10000000", "1", "100mb");
let app6 = new App("Youtube", "100000000", "3", "500mb");
let app7 = new App("Google", "100000000", "2", "600mb");

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();

app1.instalar();
app1.desinstalar();
app1.abrir();
app1.cerrar();

document.write(`
                ${app.infoApp()} <br>
                ${app1.infoApp()} <br>
                ${app2.infoApp()} <br>
                ${app3.infoApp()} <br>
                ${app4.infoApp()} <br>
                ${app5.infoApp()} <br>
                ${app6.infoApp()} <br>
                ${app7.infoApp()} <br>
                `);
