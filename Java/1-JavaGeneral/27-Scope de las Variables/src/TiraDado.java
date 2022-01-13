import java.util.Random;

public class TiraDado {
	//global
	Random random;
	int numero;

	
	TiraDado(){//local
		Random random = new Random();
		int numero = 0;
		tirar(random,numero);	
	}
	
	void tirar(Random random,int numero) {
		numero = random.nextInt(6)+1;
		System.out.println(numero);
	}
}
