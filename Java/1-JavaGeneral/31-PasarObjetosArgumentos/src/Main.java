
public class Main {

	public static void main(String[] args) {
		// Pasa otros objetos como argumentos
		
		Garaje garaje = new Garaje();
		
		Coche coche = new Coche("Audi");

		Coche coche1 = new Coche("BMW");
		
		garaje.aparcar(coche);
		garaje.aparcar(coche1);
	}

}
