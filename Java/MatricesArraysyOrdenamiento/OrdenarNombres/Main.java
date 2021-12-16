package OrdenarNombres;
import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) throws Exception {
        String []nombres = new String[10];
        System.out.println("Introduzca diez nombres separados por espacios");
        Scanner scanner_nombres = new Scanner(System.in);
        for (int i = 0; i< nombres.length; i++) {
            nombres[i] = scanner_nombres.next();
        }
        scanner_nombres.close();
        System.out.println("Ordenando nombres");
        ordenar_array(nombres);
    }
    
    private static void ordenar_array(String[] nombres) {
            String aux = "";
            System.out.print("Ordenando nombres: ");
            for (int i = 0; i < nombres.length; i++) {
                System.out.print(nombres[i] + " ");
            }
            System.out.println();
            for (int i = 0; i < nombres.length; i ++) {
                for (int j= i + 1; j< nombres.length; j ++) {
                    System.out.printf("i = %d y j = %d \n", i, j);
                    System.out.println("Comparando " + nombres[i] + " y " + nombres[j]);
                    if (nombres[i].compareTo(nombres[j]) > 0) {
                        aux = nombres[i];
                        nombres[i] = nombres[j];
                        nombres[j] = aux;
                    }
                    System.out.print("Estado de nombres: ");
                    for (int k=0; k< nombres.length; k++) {
                        System.out.print(nombres[k] + " ");
                    }
                }
            }
    }
}
