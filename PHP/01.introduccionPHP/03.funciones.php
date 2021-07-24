<?php

#Funciones sin parametros
function saludo(){
    echo "Hola mundo";
}


saludo();

echo "</br>";

#Funciones con parametros
function despedida($adios){
    echo $adios."</br>";
}

despedida("Adios mundo");

#Funciones con retorno
function retorno($retorno){
    return $retorno."</br>";
}

echo retorno("Retornado");/* Para usar la funcion con retorno se utliza el echo */


?>