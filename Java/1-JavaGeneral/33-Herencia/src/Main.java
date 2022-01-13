
public class Main {
	public static void main(String[] args) {
		//Herencia = es el procesopor el cual una clase adquiere atributos o metodos de otra
		
		Coche coche = new Coche();
		
		//coche.ir();//ir es un metodo heredado de vehiculo
		
		Bici bici = new Bici();
		
		//bici.parar();
		
		
		/*System.out.println(coche.velocidad);
		
		System.out.println(bici.velocidad);*/
		
		System.out.println(coche.puertas);
		System.out.println(bici.pedales);
		
		System.out.println(coche.ruedas);
		System.out.println(bici.ruedas);
		
	}
}
