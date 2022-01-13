import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// el bloque While ejecuta un bloque de codigo mientras este sea True
		
		Scanner scanner = new Scanner(System.in);
		String name ="";
		/*while(name.isBlank()) {
			System.out.println("Introduce tu nombre:");
			name = scanner.nextLine();
		}
		System.out.println("Bienvenido "+name);*/

		// do/while, se ejecuta al menos una vez
		
		 do{
				System.out.println("Introduce tu nombre:");
				name = scanner.nextLine();
		}while(name.isBlank());
		 
		 System.out.println("Bienvenido "+name);
	}

}
