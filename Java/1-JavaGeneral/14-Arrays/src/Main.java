
public class Main {

	public static void main(String[] args) {
		// Un array es una forma de guardar multiples valores dentro de una variable
		
		String[] coches = {"Camaro","Corvete","Tesla"};// no puedes meter numeros u otros datos
		
		coches[0] ="Mustang";// sobreescribe el Camaro
		
		System.out.println(coches[2]);//Si pones un numero mas alto de indice te genera un error ArrayIndexOutOfBoundsException
		
		String[] coches2 = new String[3];
		
		coches2[0]="Camaro";
		coches2[1]= "Corvete";
		coches2[2]= "Tesla";
		
		System.out.println(coches2[1]);
		
		System.out.println("--------------");
		for(int i = 0; i<coches.length; i++)
			System.out.println(coches[i]);
	}

}
