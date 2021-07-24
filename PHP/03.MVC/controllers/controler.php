<?php

    class MvcController{

        #Bloque de llamada al la platilla
        #----------------------------------------------------------------
        public function plantilla(){
            include "views/template.php";
        }

        
        #Interacion del usuario
        #----------------------------------------------------------------
        public function enlacesPaginasController(){

            if(isset($_GET["action"])){

                $enlacesController = $_GET["action"];

            }else {

                $enlacesController = "index";
            }

            $respuesta = EnlacesPaginas::enlacesPaginasModel($enlacesController);

            include $respuesta;
        }
    }
    
?>