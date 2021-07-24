<?php

    class EnlacesPaginas{

        public static function enlacesPaginasModel($enlacesModel){

            if($enlacesModel == "nosotros"||
              $enlacesModel == "servicios"||
              $enlacesModel == "contacto" ){

                $module = "views/modules/".$enlacesModel.".php";

            }else if($enlacesModel == "index"){

                $module = "views/modules/inicio.php";

            }else{

                $module = "views/modules/inicio.php";
            }
                
            return $module;

        }
    }
 ?>