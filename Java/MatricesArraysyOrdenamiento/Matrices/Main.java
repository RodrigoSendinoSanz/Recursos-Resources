package Matrices;


public class Main {
    public static void main(String[] args) throws Exception {

        System.out.println("Matriz letras");

        final int FILAS = 4;
        final int COLUMNAS = 7;
        char[][] letras = new char[FILAS][COLUMNAS];
        char letraQueToca = 'A';
 
        //Carga las letras en la matriz
        for(int f=0; f<FILAS; f++) {
            for(int c=0; c<COLUMNAS; c++) {
                letras[f][c] = letraQueToca;
                letraQueToca++;
            }
        }
 
        //Mostrar en pantalla la matriz
        for(int f=0; f<FILAS; f++) {
            for(int c=0; c<COLUMNAS; c++) {
                System.out.print(letras[f][c]+" ");
            }
            System.out.println();
        }

        System.out.println("Matriz numeros");
        
        final int FILAS2 = 5;
        final int COLUMNAS2 = 5;
        int[][] numeros = new int[FILAS2][COLUMNAS2];
 
        //Carga las numeros en la matriz
        for(int y=0; y<FILAS2; y++) {
            for(int x=0; x<COLUMNAS2; x++) {
                numeros[y][x] =(int) (Math.random()*9)+1;
               // letraQueToca++;
            }
        }
 
        //Mostrar en pantalla la matriz
        for(int y=0; y<FILAS2; y++) {
            for(int x=0; x<COLUMNAS2; x++) {
                System.out.print(numeros[y][x]+" ");
            }
            System.out.println();
        }
    }
}