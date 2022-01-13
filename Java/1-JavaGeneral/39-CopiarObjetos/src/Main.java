
public class Main {

	public static void main(String[] args) {
		// Copiar objetos (solo los valores)

			
			Coche coche = new Coche("Mercedes", 2002, "Berlina");
			//Coche coche2 = new Coche("Audi", 1994, "Turismo");
			
			//coche2 = coche; no es una solucion por que se conviernten en el mismo objeto
			//coche2.copiar(coche);
			Coche coche2 = new Coche(coche);
			
			
			System.out.println(coche);
			System.out.println(coche2);
			System.out.println();
			System.out.println(coche.getNombre());
			System.out.println(coche.getFecha());
			System.out.println(coche.getModelo());
			System.out.println();
			System.out.println(coche2.getNombre());
			System.out.println(coche2.getFecha());
			System.out.println(coche2.getModelo());

	}

}
