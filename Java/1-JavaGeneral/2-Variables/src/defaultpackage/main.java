package defaultpackage;

public class main {

	public static void main(String[] args) {
		// 8 datos primitivos
		
		// tipo de dato	  tamaño:          valor :
		//    boolean      1 bit         true o false  *
		//    byte         1 byte        -128 a 127
		//    short		   2 bytes     -32,768 a 32.767
		//    int          4 bytes    -2 millones a 2 millones *
		//    long         8 bytes   -9 quintillones a 9 quintillones
		
		//    float        4 bytes   numero fracionario 6-7 3.141592f
		//    double       8 bytes   numero fracionario de 15 digitos 3.141592653589793 *
		
		//    char         2 bytes     un solo caracter de valor ASCII 'a' *
		//    String       varios      Secuencia de caracteres "Hola mundo" (String no es primitivo es referenciado) *
		
		// Primitivo: 8 tipos,  almacena datos, solo puede contenet un valor, menos memoria, mas rapido
		//Referenciado: ilimitado (definido por el usuario),almacena una dirrecion, puede contener mas de un valor,mas memoria, mas lento
		
		//Declarar variable
			//int x;
		//Asinacion
			//x=123;
		//Inicializacion (Declaracion + Asignacion)
			//int y =12;
		
		
		
		//int x =123;
		
		//long x  = 12343442125334336L ;
		
		//byte x = 100;
		
		//float x =3.14f;
	
		//double x =3.14;
		
		//boolean x = true;
		
		//char x='@';
		
		//String x = "Hola mundo";
		
		//Imprimir variable
			//System.out.println("El valor es "+x);
		
		
		//Intercambiar el valor de variables
		String x ="Agua";
		String y ="Aceite";
		String temp;//Creamos una variable temporal para intercambiar los valores
		
		System.out.println("x: "+x);
		System.out.println("y: "+y);
		System.out.println("\n");

		//y=x;
		//x=y;
		
		temp=x;
		x=y;
		y=temp;
		
		System.out.println("x: "+x);
		System.out.println("y: "+y);
		
		

	}

}
