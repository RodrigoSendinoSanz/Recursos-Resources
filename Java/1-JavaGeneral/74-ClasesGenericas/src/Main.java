

public class Main {

	public static void main(String[] args) {
		/*
		 * Las clases genericas = permite que los tipos (classes e interfaces) sean parámetros al definir:
		               clases, interfaces y métodos
		               un beneficio es eliminar la necesidad de crear múltiples versiones
		               de métodos o clases para varios tipos de datos.
		               Usar 1 versión para todos los tipos de datos de referencia
		 * 
		 * */
		
		Integer[] intArray = {1,2,3,4,5};
		Double[] doubleArray = {2.3,4.5,6.7,8.2};
		Character[] charArray = {'H','O','L','A'};
		String[] stringArray = {"Hola","Mundo","Adios"};
		/*
		displayArray(intArray);
		displayArray(doubleArray);
		displayArray(charArray);
		displayArray(stringArray);
		*/
		System.out.println(getFirst(intArray));
		System.out.println(getFirst(doubleArray));
		System.out.println(getFirst(charArray));
		System.out.println(getFirst(stringArray));
	}
	
	public static <T> void displayArray(T[] array) {
		for (T x: array) {
			System.out.print(x+" ");
		}
		System.out.println();
	}
	
	public static <T>  T getFirst(T[] array) {
		return array[0];
		
	}
	
	/*
	public static void displayArray(Integer[] array) {
		for (Integer x: array) {
			System.out.print(x+" ");
		}
		System.out.println();
	}
	public static void displayArray(Double[] array) {
		for (Double x: array) {
			System.out.print(x+" ");
		}
		System.out.println();
	}
	public static void displayArray(Character[] array) {
		for (Character x: array) {
			System.out.print(x+" ");
		}
		System.out.println();
	}
	public static void displayArray(String[] array) {
		for (String x: array) {
			System.out.print(x+" ");
		}
		System.out.println();
	}
	 */
	
	
	
	
	
	
	
	
	
	
	/*
	 * Ejemplo:
	 * 
	 * 	public static void main(String[] args) {
	 * 	Jugador jugador = new Jugador();
		Enemigo enemigo = new Enemigo();
		Objeto objeto = new Objeto();
		Arbol arbol = new Arbol();
		
		dibuja(jugador);
		dibuja(enemigo);
		dibuja(objeto);
		dibuja(arbol);

		}
		public static <T> void dibuja(T x) {
			x.dibuja();
		}
	 * 
	 * */
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
