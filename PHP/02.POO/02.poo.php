<?php

    #Codigos oop  
    #enpaquetados en clases para hacer grupos de objetos que comparten un mismo comportamiento, estado o identidad

class Automovil{/* Encapsulamiento */
    #Propiedades de la clase
    # Son las caracteristicas que pueden tener un objeto pueden ser: public private protected abstract
    /* private solo se puede ejecutar dentro de la clase y no puede ser llamada desde otras clases */
    
    public $marca;
    public $modelo;

    #Metodo
    #Algoritmo asociado a un objeto que define lo que puede hacer

    public function mostar(){

        echo "<p>Marca: $this->marca,Modelo: $this->modelo </p><br>";

    }
}

#Objeto
#Instanciamos un objeto
$auto = new Automovil();/* Encapsulamiento */

$auto->marca = "Fiat";
$auto->modelo = "Uno";

$auto->mostar();
/* Abstracion
    -Posibilidad de reutilizar codigo
    -Para que un objeto sea reutilizable se debe dejar de depender de la clase y se debe dejar de depender de sus atributos
    -Para que un objeto sea abstracable se debe dejar de depender de la clase y se debe dejar de depender de sus metodos
*/
$auto1 = new Automovil();/* Encapsulamiento */

$auto1->marca = "Nissan";
$auto1->modelo = "Qashqai";

$auto1->mostar()

?>