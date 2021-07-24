<?php

#Condiciones
$a = 20;
$b = 10;

if ($a > $b) {
    echo "a es mayor que b";
} elseif ($a == $b) {
    echo "a es igual que b";
}else{
    echo "a es menor que b";
}

echo "<br>";

#Switch
$dia = "sabado";

switch ($dia) {
    case "lunes": 
        echo "Esudiar JS";
        break;
    case "martes": 
        echo "Estudiar SQL";
        break;
    case "miercoles": 
        echo "Salir";
        break;
    case "jueves": 
        echo "Ver documental";
        break;
    case "viernes": 
        echo "Ver pelicula";
        break;
    case "sabado": 
        echo "Ir al cine";
        break;
    default: 
        echo "Día incorrecto";
}

echo "<br>";

#Ciclo while
$n = 1;

while ($n <= 5) {
    echo $n." ";
    $n++;

}

echo "<br>";

#Ciclo do while

$p = 1;

do{
    echo $p." ";
    $p++;
}while($p <= 5);

echo "<br>";

#Ciclo for
for ($i = 0; $i <= 5; $i++) {
    echo $i." ";
}

?>