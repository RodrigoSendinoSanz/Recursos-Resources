import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// Polimofrismo dinamico, tiene muchas formas ,dinamico despues de la compliacion(durante el tiempo de ejecucion)
				//Un Audi es un coche, un vehiculo y un objeto
		/*Sistema de elecion de personajes, Skyrim, Pokemon, Warcraft*/
		/*Animal animal = new Perro();
		Animal animal = new Gato();
		*/

		Scanner scanner = new Scanner(System.in);
		Animal animal;
		
		System.out.println("Que animal quieres?");
		System.out.print("Perro = 1 // Gato = 2   ");
		int elecion = scanner.nextInt();
		
		if (elecion==1) {
			animal = new Perro();
			animal.habla();
		}else if(elecion==2) {
			animal = new Gato();
			animal.habla();
		}else {
			animal= new Animal();
			System.out.println("Opcion no especificada");
			animal.habla();
		}
		
		
	}

}
