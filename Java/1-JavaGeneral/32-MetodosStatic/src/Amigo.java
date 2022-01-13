
public class Amigo {
	String nombre;

	static int numerodeamigos;
	
	Amigo(String nombre) {
		this.nombre = nombre;
		numerodeamigos++;
	}
	
	
	static void verAmigos(){
		System.out.println("Tienes "+numerodeamigos+" amigos");
	}
}
