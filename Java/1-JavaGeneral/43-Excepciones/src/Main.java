import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// Execciones = es un evento que ocurre durante la ejecucion de un programa que interrumpe el flujo normal de instrucciones
		
		Scanner scanner = new Scanner(System.in);
		
		try {
			System.out.println("Introduce el numero que quieras dividir");
			int x = scanner.nextInt();
			System.out.println("Introduce el numero por el cual lo quieras dividir");
			int y = scanner.nextInt();
			
			int z =x/y;
			
			System.out.println("Resultado: "+z);
			
		}catch (ArithmeticException e) {
			System.out.println("No se puede dividir por cero");
		}
		catch (InputMismatchException e) {
			System.out.println("Introduce un numero valido");
		}
		catch (Exception e) {
			System.out.println("Paso algo inesperado");
		}
		finally {
			System.out.println("Fin");//Se ejecuta siempre
			scanner.close();
		}

	}

}
