package NoRepetidos;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws Exception {
	    int i=0,cantidad=10,rango=12;
	    int []array = new int[cantidad];
	    boolean cambios =false;


	    array[i] =(int)(Math.random()*rango);
		for(i=1;i<cantidad;i++){
		    array[i] =(int)(Math.random()*rango);
		    for(int j=0;j<i;j++){
			//Comparacion recorre el array y comprueba que no hay valores repetidos, y si los hay
			if(array[i]== array[j]){
			    System.out.println("No se puede incorporar Valor primer for: "+array[i]+" y valor del segundo for: "+array[j]);//Los valores que se muestras seran siempre iguales
			    i--;
			}else{
			    System.out.println("Se incorporo Valor primer for: "+array[i]+" y valor del segundo for: "+array[j]);
			}
		    }
		    System.out.println("\n"
				+ "Ver array "+Arrays.toString(array));
		}

		    System.out.println("\n"
				+ "Array metodo toString: "+Arrays.toString(array));

		for(int x=0; x < array.length ;x++){

		    System.out.print(" "+array[x]+" // ");
		}

		//Ordenamos el array usanndo BubbleSort
		while(true){
		    cambios=false;
			 for (int e = 0; e < array.length - 1; e++){
			    for (int j = 0; j < array.length - e - 1; j++){
				// Orden ascencente. Para descendente en esta línea cambiar ">" a "<"
				if (array[j] > array[j + 1]) {

				  // intercambiar posiciones
				  int aux = array[j];
				  array[j] = array[j + 1];
				  array[j + 1] = aux;
				  cambios =true;
				}
			    }
			 }
			 if(cambios==false){
			      System.out.println("Ordenacion Finalizada");
			  break;
			 }
		}

		//Recorro el array ordenado 
		for(int u=0; u < array.length ;u++){

		    System.out.print(array[u]+" // ");
		}
		//Lo volvemos a imprimir con el metodo toString
		System.out.println("\n"
				+ "ArrayOrdenado metodo toString: "+Arrays.toString(array));
	}
}
