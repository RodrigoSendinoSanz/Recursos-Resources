
public class Main {

	public static void main(String[] args) {
		// El polimorfismo es la habilidad de un objeto para identificarse como mas de un tipo
		
		Coche coche = new Coche();
		Bici bici = new Bici();
		Barco barco = new Barco();
		
		Vehiculo[] corredores = {coche,bici,barco};
		
		for (Vehiculo x : corredores) {
			x.go();
		}
 
	}

}
