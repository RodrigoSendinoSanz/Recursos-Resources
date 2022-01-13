
public class Main {

	public static void main(String[] args) {
		// super = es una palabra reservada que referencia a la superclase (clase padre)  dee un objeto, similar a this
		
		Heroe heroe1 = new Heroe("Ironman", 43, "robot");
		Heroe heroe2 = new Heroe("Thor", 203, "dios");
		
		System.out.println(heroe1.nombre);
		System.out.println(heroe1.edad);
		System.out.println(heroe1.poder);
		
		System.out.println(heroe2.toString());
	}

}
