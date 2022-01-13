import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// Los operadores logicos sirven para contectar 2 o mas expresiones
		/*
		 * && AND si las 2 condiciones son correctas es true
		 * || OR  una de las 2 condiciones debe ser verdadera para que sea verdadero
		 * !  NOT cambia se falso a verdadero y de verdadero a falso
		 * */
		
		int temp=25;
		if(temp>30) {
			System.out.println("hace calor");
		}
		else if(temp>=20 && temp<=30) {
			System.out.println("Hace un poco calor");
		}else {
			System.out.println("Hace frio fuera");
		}
		System.out.println("===========================");
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Estas jugando a un juego presiona q o Q para quitar el juego");
		String response = scanner.next();
		
		if(response.equals("q")||response.equals("Q"))
			System.out.println("Has quitado el juego");
		else
			System.out.println("Sigues jugando");

		System.out.println("===========================");
		System.out.println("Estas jugando a un juego presiona q o Q para quitar el juego");
		String response2 = scanner.next();
		
		
		if(!response2.equals("q")||!response2.equals("Q"))
			System.out.println("Has quitado el juego");
		else
			System.out.println("Sigues jugando");
		
		
	}

}
