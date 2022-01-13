
public class Main {

	public static void main(String[] args) {
		// Un constructor es un metodo especial que llama a un objeto cuando esta instanciado es decir cuando esta creado
		
		Humano humano  = new Humano("Raul",63,70);
		Humano humano1  = new Humano("Pepe",23,60);
		
		humano.comer();
		humano1.beber();
		
		System.out.println(humano.nombre);
		System.out.println(humano1.nombre);
	}

}
