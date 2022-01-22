/*
 Desventajas de trabajar de manera obsoleta
-¿cuando algo se vuelve obsoleto?
           - "Deprecated"
           - Inútil
           - No recomendado
           - Con Bugs o Fallos
           - Está por ser reemplazado
           - Hay mejores formas de hacerlo

- los efectos negativos (aplicado a netodos, clases y propiedades)
            - Uso excesivo de recursos
            - Código con Bugs o Fallos
            - Código innecesarianente largo
            - SEO

- ¿como verificar si está obsoleto?
          - 1 de cada 3 WEBS utiliza librerías de javascript obsoletas
          - verificar si tienen o usan funciones, metodos, objetos o metodologías obsoletas
          - verificar en los sitios basados en estandares oficiales
 */


/*
//En Web oficial: https://www.w3schools.com/JSREF/jsref_anchor.asp  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charAt#
    - Pulgar hacia abajo : Obsoleto o no se deberia usar (Quiza no funcione)
    - Cubo de basura: No esta en uso, no funciona
    - Señal de exclamación: No es standar
    - Probeta: Experimental, se implementara en el futuro

*/

/*


Pagina recomendada:

  https://caniuse.com/ 
  
*/ 


/*Metodos Obsoletos no recomendados */

let vari = "Hola";

let resultado = vari.big();
document.write(resultado);
let resultado2 = vari.blink();
document.write(resultado2);
let resultado3 = vari.bold();
document.write(resultado3);
let resultado4 = vari.fixed();
document.write(resultado4);
let resultado5 = vari.fontcolor("#48e");
document.write(resultado5);
let resultado6 = vari.fontsize(21);
document.write(resultado6);
let resultado7 = vari.italics();
document.write(resultado7);
let resultado8 = vari.anchor("atributo");
document.write(resultado8);
let resultado9 = vari.link("www.google.com");
document.write(resultado9);
let resultado10 = vari.small();
document.write(resultado10);
let resultado11 = vari.strike();
document.write(resultado11);
let resultado12 = vari.sub();
document.write(resultado12);
let resultado13 = vari.sup();
document.write(resultado13);


/*Metodos especificos obsoletos*/
/*

    observe()
    unobserve()
    getNotifier()
    watch()
    unwatch()
    toSource()
    escape() (funcion)
    unescape() (funcion)
    uneval //como método
    eval //como método

*/

/*Detectar navegadores obsoletos*/