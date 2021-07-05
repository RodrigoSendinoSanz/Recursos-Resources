
public class Repetitivas {

	public static void main(String[] args) {
		int numero = 40;
		//BUCLE WHILE:
		//Cuantos numeros del 1 al 250 son multiplos de 3 y de 7
		//mientras las 2 condiciones sean verdaderas el bucle se ejecuta (puede tener una condicion) && and SOLO ES TRUE SI AMBOS SON TRUE T + T= T / T+F=F...
		// Bucle de 0 a n primero presgunta si se cumple la condicion y si no se sale del bucle
		
		while(numero >= 1 && numero <= 250) {
			if(numero%3 == 0 && numero%7==0)
				System.out.println("Numero while: "+ numero);
			numero++;//Suma 1 en cada ciclo
		}
	     System.out.println("\n");
	   
	     //BUCLE DO:
	     //La primera vez entra ejecuta y a la salida pregunta si el numero esta comprendido entre la condicion del while
	     //Se ejecuta de 1 a n veces(al menos se ejecuta una vez)
	     
	     numero = 40;
	     do {
	    		if(numero%3 == 0 && numero%7==0)
	    			System.out.println("Numero do: "+ numero);
				numero++;
	     }while(numero >= 1 && numero <= 250);
	     System.out.println("\n");
	     	     
	     //BUCLE FOR:
	     //Ejecuta un bucle un numero de veces empezando por una veriable que es local al for y esta dentro del mismo

	     numero=40;
	     for(int i=numero;i<=250;i++) {
				if(i%3 == 0 && i%7==0)
					System.out.println("Numero for: "+ i);
	     }
	}

}
