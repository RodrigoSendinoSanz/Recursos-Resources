
public class Main {

	public static void main(String[] args) {
		// static = modificador, una copia de una variable o metodo es creada y compartida
		// la clase pertecece al miembro estatico
		
		Amigo amigo = new Amigo("Pepe");
		Amigo amigo1 = new Amigo("Juan");
		Amigo amigo2 = new Amigo("Paula");
		Amigo amigo3 = new Amigo("Laura");
		
		System.out.println(Amigo.numerodeamigos);//Puede ejecutarse sin instanciar
		System.out.println(amigo1.numerodeamigos);

		Amigo.verAmigos();
		
		//Math.round(a);
	}

}
