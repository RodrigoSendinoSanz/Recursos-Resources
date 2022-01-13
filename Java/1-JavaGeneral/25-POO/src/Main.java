
public class Main {

	public static void main(String[] args) {
		// Un objeto es una instancia de una clase que contiene atributos y metodos
		// ejemplo un coche
		
		
		Coche miCoche = new Coche();
		Coche miCoche2 = new Coche();
		
		System.out.println(miCoche.nombre);
		System.out.println(miCoche.año);
		System.out.println(miCoche.modelo);
		System.out.println(miCoche.color);
		System.out.println(miCoche.precio);
		
		
		miCoche.conducir();
		miCoche.cambiarMarcha();
		System.out.println();
		
		
		System.out.println(miCoche2.nombre);
		System.out.println(miCoche2.año);
		

	}
		//Podrias crear una la clase coche aqui tambien
}
