import java.util.Scanner;


public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Cual es tu nombre?");
		String nombre= scanner.nextLine();//Entrada String
		
		System.out.println("Cuantos años tienes?");
		int age= scanner.nextInt();//Entrada numerica
		scanner.nextLine();//Resetea por el cambio de int a String de nuevo
		
		System.out.println("Cual es tu comida preferida?");
		String comida =scanner.nextLine();
		
		
		System.out.println("Hola "+nombre);
		System.out.println("Tienes "+age+" años");
		System.out.println("Tu comida favorita es "+comida);
	}

}
