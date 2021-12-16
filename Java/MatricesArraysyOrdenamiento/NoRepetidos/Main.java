package NorRepetidos;

public class Main {
    int i=0,cantidad=10,rango=10;
    int array[] = new int[cantidad];
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
        }
        
            System.out.println("\n"
        		+ "Array metodo toString: "+Arrays.toString(array));
        		
        for(int x=0; x < array.length ;x++){

            System.out.print(" "+array[x]+" // ");
            
        }
	}
}
