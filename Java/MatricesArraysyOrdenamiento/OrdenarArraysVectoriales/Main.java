package OrdenarArraysVectoriales;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        // Your code here!
         //int[] intArray = new int[]{ 4,3,2,8,7,6,1,5,9,10 }; 
         int[] intArray = new int[10];
            int con1=0;
            int con2=0;
        boolean cambios =false;
        
        
        //Rellena el String con numeros random
            //int aleatorio = (int) (Math.random()*20)+1; numeros[x] = (int) (Math.random()*20)+1;
        for (int x=0;x<intArray.length;x++)
         intArray[x] = (int) (Math.random()*10)+1;
        
        
        
        System.out.println("ArraySinOrdenar");
        //Recorro el array sin ordenar    
        for(int i=0; i < intArray.length ;i++){
            con1++;
            System.out.print("Posicion: "+con1+" Valor:"+intArray[i]+" // ");
            
        }
      //Lo volvemos a imprimir con el metodo toString
        System.out.println("\n"
        		+ "Array metodo toString: "+Arrays.toString(intArray));

        System.out.println("\n");
        
        System.out.println("ArrayOrdenado");
        
        //Ordenamos el array usanndo BubbleSort
        while(true){
            cambios=false;
	         for (int i = 0; i < intArray.length - 1; i++){
	            for (int j = 0; j < intArray.length - i - 1; j++){
	                // Orden ascencente. Para descendente en esta línea cambiar ">" a "<"
	                if (intArray[j] > intArray[j + 1]) {
	        
	                  // intercambiar posiciones
	                  int aux = intArray[j];
	                  intArray[j] = intArray[j + 1];
	                  intArray[j + 1] = aux;
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
        for(int i=0; i < intArray.length ;i++){
            con2++;
            System.out.print("Posicion: "+con2+" Valor:"+intArray[i]+" // ");
        }
        //Lo volvemos a imprimir con el metodo toString
        System.out.println("\n"
        		+ "ArrayOrdenado metodo toString: "+Arrays.toString(intArray));


         
    }

}

