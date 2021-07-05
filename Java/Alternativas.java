
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
