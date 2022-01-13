
public class Main {

	public static void main(String[] args) {
		// Una matriz es un array de 2 dimensiones formado por 2 arrays
		String [][] coches= {
				
							{"Camaro","Corvete","Silverado"},
							{"Mustang","Ranger","F-150"},
							{"Ferrari","Lambo","Tesla"}
							
							};
		
		
		
		
		
		 				//new String[3][3]
		/*
		coches[0][0] = "Camaro";
		coches[0][1] = "Corvete";
		coches[0][2] = "Silverado ";
		coches[1][0] = "Mustang";
		coches[1][1] = "Ranger";
		coches[1][2] = "F-150";
		coches[2][0] = "Ferrari";
		coches[2][1] = "Lambo";
		coches[2][2] = "Tesla";
		*/
		
		for(int i =0;i<coches.length;i++) {
			System.out.println();
			for (int j = 0; j < coches[i].length; j++) {
				System.out.print(coches[i][j]+" ");
			}
		}
	}

}
