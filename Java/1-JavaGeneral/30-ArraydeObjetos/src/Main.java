
public class Main {

	public static void main(String[] args) {
		//Comida[] frigorifico  = new Comida[3];
		
		Comida comida1 = new Comida("pizza");
		Comida comida2 = new Comida("helado");
		Comida comida3 = new Comida("ensalada");
		
		Comida[] frigorifico = {comida1,comida2,comida3};
		
		//frigorifico[0] = comida1;
		//frigorifico[1] = comida2;
		//frigorifico[2] = comida3;

		System.out.println(frigorifico[0].nombre);
		System.out.println(frigorifico[1].nombre);
		System.out.println(frigorifico[2].nombre);
	}

}
