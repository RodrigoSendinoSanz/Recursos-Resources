
public class Main {

	public static void main(String[] args) {
		// interface = es una plantilla que se puede aplicar a una clase similar a la herencia pero esta espacifica lo que una clase debe/tener hacer
		//             las clases pueden tener MAS de una interface y la herencia esta limitada a 1 super

		
		Conejo conejo = new Conejo();
		
		conejo.huir();
		
		Halcon halcon = new Halcon();
		
		halcon.caza();
		
		
		Pez pez = new Pez();
		
		pez.caza();
		pez.huir();
	}

}
