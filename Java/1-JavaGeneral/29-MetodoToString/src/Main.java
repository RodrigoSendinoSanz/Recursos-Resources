
public class Main {

	public static void main(String[] args) {
		// toString = es un metodo especial que retorna los atributos de un objeto

		Coche coche = new Coche();
		
		System.out.println(coche);//Nos da la direcion de memeoria(si no esta sobrestrito el toString)
		
		System.out.println(coche.toString());
	}
	

}
