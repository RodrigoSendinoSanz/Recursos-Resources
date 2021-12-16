package MatricesDiagonalizable;


public class Main {
    public static void main(String[] args) {
          
    int matriz[][] = {
    {3,0,0,0},
    {0,6,0,0},
    {0,0,8,0},
    {0,0,0,9},
    };
                    
    boolean diagonalizable = true;
                    
    for (int i=0; i<matriz.length; i++){
        for (int j=0; j<matriz[i].length; j++){
             if (i!=j){
              diagonalizable = diagonalizable && matriz[i][j]==0;
            }
       }
     }
                    
    if (diagonalizable == true){
      System.out.println("Es diagonalizable");
     } else {
       System.out.println("No es diagonalizable");
    }
  } 
}

