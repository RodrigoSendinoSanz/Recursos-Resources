<?php

    #En el index mostraremos la salida y enviaremos las vistas al controlador
    #el require es obligatorio para que se pueda cargar la vista con once solo lo rquiere una vez
    require_once 'controllers/controler.php';
    require_once 'models/model.php';

    $mvc = new MvcController();
    $mvc->plantilla();
?>