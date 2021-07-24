<?php

class Connection {
    static public function conectar(){
        /* nombreservidor;nombre de la base de datos,usuario,contraseña */
        $link = new PDO("mysql:host=localhost;dbname=php","root","");

        $link->exec("set names utf8");

        return $link;
    }
}
?>