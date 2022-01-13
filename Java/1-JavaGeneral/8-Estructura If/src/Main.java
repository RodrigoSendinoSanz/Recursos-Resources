
public class Main {

	public static void main(String[] args) {
		// estructura if = evalua si un bloque de codigo es verdadero
		
		int edad = 75;//si es 12 NO ejecutaria la estructura if (si no hubiese un else)
		//Ojo! cuando detecta que una cocndicion se cumple se parara
		
		if(edad==75){
			System.out.println("Ok Boomer!");
		}
		else if (edad>=18) {
			System.out.println("Eres un adulto");
		}
		else if(edad>=13) {
			System.out.println("Eres un adolescente");
		}
		else{
			System.out.println("No eres un adulto");
		}

	}

}
