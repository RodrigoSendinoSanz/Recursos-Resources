<?php 
#Variable numerica
$numero = 5;
echo "Esto es una varable numero: $numero<br>";
var_dump($numero);
echo "<br><br>";

#Variable texto
$palabra = "palabra";
echo "Esto es una varable texto: $palabra<br>"; 
var_dump($palabra);
echo "<br><br>";

#Variable Boleana
$booleano = true;/* Cuando es verdadera imprime el valor 1 si no 0 */
echo "Esto es una varable booleana: $booleano";
echo "<br><br>";

#Variable Array
$colores = array("rojo","azul","verde","amarillo");
echo "Esto es una varable array: $colores[0]<br>";
var_dump($colores);
echo "<br><br>";

#Variable Array con propiedades
$verduras = array("verdura1"=>"tomate","verdura2"=>"pepino","verdura3"=>"cebolla");
echo "Esto es una varable array con propiedades: $verduras[verdura1]<br>";
var_dump($verduras);
echo "<br><br>";

#Varaible objeto
$frutas = (object) ["fruta1"=>"manzana","fruta2"=>"piña"];
echo "Esto es una varable objeto: $frutas->fruta1<br>";
var_dump($frutas);
echo "<br><br>";
?>
