
public class Main {

	public static void main(String[] args) {
		// Llenar la fila superior Matriz de 5*5
		// i flias a, columnas
		/*   i 0  1  2	3  4       i   a    b
		 *  a [1][2][3][4][5]b    [0] [0] [n-1]
		 *    [ ][ ][ ][ ][ ] 					valor[5]
		 *    [ ][ ][ ][ ][ ]
		 *    [ ][ ][ ][ ][ ]
		 *    [ ][ ][ ][ ][ ]
		 * 
		 * for(int i; i<=b;i++){
		 * 	matriz[a][i]="["+ valor++ +"]";
		 * }
		 * 
		 * llenar columna extremo derecho
		 * 
		 *   i 0  1  2	3  4       i   a    b
		 *  a [1][2][3][4][5]b    [0] [0] [n-1]
		 *    [ ][ ][ ][ ][6] 					valor[9]
		 *    [ ][ ][ ][ ][7]
		 *    [ ][ ][ ][ ][8]
		 *    [ ][ ][ ][ ][9]
		 * 
		 * for(int i=a+1, i<=b;i++){
		 * 	matriz[i][b]="["+ valor++ +"]";
		 * }
		 * 
		 * llenar columna de izquierda a derecha
		 * 
		 *   i 0  1  2	3  4               i   a    b
		 *  a [1][2][3][4][5]b            [0] [0] [n-1]
		 *    [ ][ ][ ][ ][6] 					valor[13]
		 *    [ ][ ][ ][ ][7]
		 *    [ ][ ][ ][ ][8]
		 *    [13][12][11][10][9]
		 * 
		 * for(int i=b-1; i>=a;i--){
		 * 	matriz[b][i]="["+ valor++ +"]";
		 * }
		 * 
		 * llenar columna de izquierda a derecha
		 * 
		 *   i 0  1  2	3  4               i   a    b
		 *  a [1][2][3][4][5]b            [0] [0] [n-1]
		 *    [16][ ][ ][ ][6] 					valor[16]
		 *    [15][ ][ ][ ][7]
		 *    [14][ ][ ][ ][8]
		 *    [13][12][11][10][9]
		 * 
		 * for(int i=b-1; i>=a+1;i--){
		 * 	matriz[i][a]="["+ valor++ +"]";
		 * }
		 * 
		 * 
		 * */
		int n=5;
		String [][] matriz= new String [n][n];
		int a = 0;
		int b =n-1;
		int valor =1;
		
		for (int j = 0; j < matriz.length; j++) {
			
			//   → 
			 for(int i=a; i<=b;i++){
			 	matriz[a][i]="["+ valor++ +"]"+" →";
			 }
			 //  →
			 //   ↓
			 for(int i=a+1; i<=b;i++){
				  matriz[i][b]="["+ valor++ +"]"+" ↓";
			 }
			 //  →
			 //   ↓
			 //  ←
			 for(int i=b-1; i>=a;i--){
				  matriz[b][i]="["+ valor++ +"]"+ " ←";
			 }
			 //   →
			 // ↑  ↓
			 //  ←
			 for(int i=b-1; i>=a+1;i--){
			    matriz[i][a]="["+ valor++ +"]"+" ↑";
			 }
		 
			 a++;
			 b--;
		}//Fin de ciclo externo
		 
		//mostrar la matriz
		System.out.print(" ");
		for (int f = 0; f < matriz.length; f++) {
			for (int x = 0; x < matriz[f].length; x++) {
				System.out.print(matriz[f][x]+" ");
			}
			System.out.println();
		}

	}

}
