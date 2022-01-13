
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// Los bucles anidados son solo bucles dentro de otros bucles

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		int filas;
		int columnas;
		String simbolo ="";
		
		
		System.out.println("Introduce el numero de filas:");
		filas = scanner.nextInt();
		System.out.println("Introduce el numero de columnas:");
		columnas = scanner.nextInt();
		System.out.println("Introduce el simbolo:");
		simbolo = scanner.next();
		
		
		
		for(int i=1;i<=filas;i++) {
			System.out.println();
			for(int j =1;j<=columnas;j++) {
				System.out.print(simbolo);
			}
		}
		
	}

}
