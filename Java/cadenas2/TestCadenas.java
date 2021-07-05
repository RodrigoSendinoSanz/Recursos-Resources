package cadenas2;

public class TestCadenas {

	public static void main(String[] args) {
		String cadena1, cadena2;
		cadena1 = "PEPE";
		cadena2 = "PEPE";
//		No usar  == usar .equals para evitar que coja la direcion de memoria para comparar 
//		lo que tiene el objeto
		if (cadena1.equals(cadena2)) {
			System.out.println("Ambas cadenas son iguales");
		}else {
			System.out.println("Las cadenas son distintas");
		}
		
		//La direcion de memoria es diferente y por eso no son distintas
		String cadena3, cadena4;
		cadena3 = new String("PEPE");
		cadena4 = new String("PEPE");
		
		if (cadena3.equals(cadena4)) {
			System.out.println("Ambas cadenas son iguales");
		}else {
			System.out.println("Las cadenas son distintas");
		}
		

//		Se puede sobreescribir el metodo equals por que hereda de objetc
		
		String cadena;
		cadena = new String ("AQWDHAKERJSIRJSNFERSJWEIW");
		int dni = 71706550, resto;
		resto= dni%23;
		System.out.print("La letra es:" + cadena.charAt(resto));
		
	}

}
