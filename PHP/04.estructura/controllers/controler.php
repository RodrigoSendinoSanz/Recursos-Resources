<?php

    class MvcController{

        #Bloque de llamada al la platilla
        #----------------------------------------------------------------
        public function pagina(){
            include "views/template.php";
        }

        
        #Interacion del usuario
        #----------------------------------------------------------------
        public function enlacesPaginasController(){

            if(isset($_GET["action"])){

                $enlaces = $_GET["action"];

            }else {

                $enlaces = "index";
            }

            $respuesta = Paginas::enlacesPaginasModel($enlaces);

            include $respuesta;
        }
    }
    
?>