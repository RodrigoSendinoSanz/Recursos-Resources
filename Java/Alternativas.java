
public class Alternativas {

	public static void main(String[] args) {

		//Inicializo la variable mes con un int asignadole el valor 5
		int mes = 5;
		//Para saber si es par o no calculamos el modulo de 2 si es 0 es par y si no es impar usando una estructura if else
		// * si el if o el else solo tiene una declaracion no necesita {}
		 if (mes%2 == 0)
		        System.out.println("El mes:" + mes + " es par");
		 else
		        System.out.println("El mes:" + mes + " es impar");
		 // Linea en blanco
	     System.out.println("\n");
	     // El opeando de una estructura switch debe ser numero entero o o una expresion que devuelva un entero un byte o un short
	     // Case evlaua cada uno de los valores de la variable
	     switch (mes) {
	     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
		        System.out.println("El mes:" + mes + " tiene 31 dias");
		        break;// si se quita el break la primera condicion que se ejecuta las sentencias que haya dentro todas las que haya en cualquier declaracion
		        	  // en ese momento que no tenga la sentencia break;(No es necesaria se hay un caso unico para cada opcion)
	     case 4: case 6: case 9: case 11:
		        System.out.println("El mes:" + mes + " tiene 30 dias");
		        break;	    	 
	     case 2: 
		        System.out.println("El mes:" + mes +  "tiene 28 o 29 dias");
		        break;
		 default :
		        System.out.println("El mes:" + mes + " no es valido");
	    	 
	     }
		 
	}

}

/* Codigo creado por:
8 888888888o.      ,o888888o.     8 888888888o.      8 888888888o.    8 8888     ,o888888o.        ,o888888o.     
8 8888    `88.  . 8888     `88.   8 8888    `^888.   8 8888    `88.   8 8888    8888     `88.   . 8888     `88.   
8 8888     `88 ,8 8888       `8b  8 8888        `88. 8 8888     `88   8 8888 ,8 8888       `8. ,8 8888       `8b  
8 8888     ,88 88 8888        `8b 8 8888         `88 8 8888     ,88   8 8888 88 8888           88 8888        `8b 
8 8888.   ,88' 88 8888         88 8 8888          88 8 8888.   ,88'   8 8888 88 8888           88 8888         88 
8 888888888P'  88 8888         88 8 8888          88 8 888888888P'    8 8888 88 8888           88 8888         88 
8 8888`8b      88 8888        ,8P 8 8888         ,88 8 8888`8b        8 8888 88 8888   8888888 88 8888        ,8P 
8 8888 `8b.    `8 8888       ,8P  8 8888        ,88' 8 8888 `8b.      8 8888 `8 8888       .8' `8 8888       ,8P  
8 8888   `8b.   ` 8888     ,88'   8 8888    ,o88P'   8 8888   `8b.    8 8888    8888     ,88'   ` 8888     ,88'   
8 8888     `88.    `8888888P'     8 888888888P'      8 8888     `88.  8 8888     `8888888P'        `8888888P'     
                                                                                                                  
   d888888o.   8 8888888888   b.             8 8 888888888o.       8 8888 b.             8     ,o888888o.         
 .`8888:' `88. 8 8888         888o.          8 8 8888    `^888.    8 8888 888o.          8  . 8888     `88.       
 8.`8888.   Y8 8 8888         Y88888o.       8 8 8888        `88.  8 8888 Y88888o.       8 ,8 8888       `8b      
 `8.`8888.     8 8888         .`Y888888o.    8 8 8888         `88  8 8888 .`Y888888o.    8 88 8888        `8b     
  `8.`8888.    8 888888888888 8o. `Y888888o. 8 8 8888          88  8 8888 8o. `Y888888o. 8 88 8888         88     
   `8.`8888.   8 8888         8`Y8o. `Y88888o8 8 8888          88  8 8888 8`Y8o. `Y88888o8 88 8888         88     
    `8.`8888.  8 8888         8   `Y8o. `Y8888 8 8888         ,88  8 8888 8   `Y8o. `Y8888 88 8888        ,8P     
8b   `8.`8888. 8 8888         8      `Y8o. `Y8 8 8888        ,88'  8 8888 8      `Y8o. `Y8 `8 8888       ,8P      
`8b.  ;8.`8888 8 8888         8         `Y8o.` 8 8888    ,o88P'    8 8888 8         `Y8o.`  ` 8888     ,88'       
 `Y8888P ,88P' 8 888888888888 8            `Yo 8 888888888P'       8 8888 8            `Yo     `8888888P'         
                                                                                                                  
                       d888888o.           .8.          b.             8  8888888888',8888'                       
                     .`8888:' `88.        .888.         888o.          8         ,8',8888'                        
                     8.`8888.   Y8       :88888.        Y88888o.       8        ,8',8888'                         
                     `8.`8888.          . `88888.       .`Y888888o.    8       ,8',8888'                          
                      `8.`8888.        .8. `88888.      8o. `Y888888o. 8      ,8',8888'                           
                       `8.`8888.      .8`8. `88888.     8`Y8o. `Y88888o8     ,8',8888'                            
                        `8.`8888.    .8' `8. `88888.    8   `Y8o. `Y8888    ,8',8888'                             
                    8b   `8.`8888.  .8'   `8. `88888.   8      `Y8o. `Y8   ,8',8888'                              
                    `8b.  ;8.`8888 .888888888. `88888.  8         `Y8o.`  ,8',8888'                               
                     `Y8888P ,88P'.8'       `8. `88888. 8            `Yo ,8',8888888888888        
*/
