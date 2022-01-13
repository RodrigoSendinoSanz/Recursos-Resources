
public class Main {

	public static void main(String[] args) {
		// printf() es un metodo opcional para controlar y formatear el texto de la consola de comandos
		//													2 argumentos = formato de String y objeto/valor/variable
											 //donde se coloque el %es donde aparecera el dato
		
		//System.out.printf("Esto es una cadena %d",123);
		
		boolean miBooleano = true;
		char miChar = '@';
		String miString ="Rodrigo";
		int miInt = 50;
		double miDouble = 1000;
		
		//Conversion-Caracter
		//System.out.printf("%b",miBooleano);
		//System.out.printf("%c",miChar);
		//System.out.printf("%s",miString);
		//System.out.printf("%d",miInt);
		//System.out.printf("%f",miDouble);
		
		//Tamaño
		//espacios hasta el dato insertado
		/*System.out.printf("Hello %10s",miString);
		System.out.println();
		System.out.printf("Hello %-10s",miString);//Pone los espacio detras de la String
		*/
		
		//Precison
								//limita los digitos que retorna un valor float o double
		//System.out.printf("Hello %.2f",miDouble);
		
		
		//Banderas
		// - : justificar a la izquierda
		// + : + o - como valor numerico
		//0 : valores numericos con 0s
		//, : separador de grupos
		
		System.out.printf("Hello %,f",miDouble);
	}

}
