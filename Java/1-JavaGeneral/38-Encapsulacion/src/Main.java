
public class Main {

	public static void main(String[] args) {
		// Encapsulacion = los atributos de la clase seran privados o ocultos,
		//     				y solo acesibles a traves de los metodos getters y setters

		
		Coche coche = new Coche("Mercedes", 2002, "Berlina");
		
		System.out.println(coche.getNombre());
		System.out.println(coche.getFecha());
		System.out.println(coche.getModelo());
		
		coche.setNombre("Audi");
		System.out.println();
		
		System.out.println(coche.getNombre());
		System.out.println(coche.getFecha());
		System.out.println(coche.getModelo());
		
		
	}

}
