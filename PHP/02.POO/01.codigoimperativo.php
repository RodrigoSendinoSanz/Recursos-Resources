<?php

    #Codigos imperativo o espaqueti

    $automovil1 = (object)["marca" => "Toyota", "modelo" => "Corolla"];
    
    $automovil2 = (object)["marca" => "Hyundai", "modelo" => "Accent"];

    function mostrar($automovil){

        echo "<p>Infromacion del $automovil->marca,modelo $automovil->modelo</p>";
    }

mostrar($automovil1);
mostrar($automovil2);

?>