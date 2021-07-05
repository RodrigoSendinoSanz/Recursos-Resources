package arrays;

public class unidimensional {

	public static void main(String[] args) {
		//Un array es un tipo de dato o referencia a un objeto de una clase que se repite en memoria un numero determinado de veces
		//Como se define: tipo de dato +[] +nombre
		int [] arra1,arra2= {2,4,6,8};// inicializandolo con los corechetes seria valido
		// para darle dimension utilizamos el new + tipo de dato [cantidad] 0 a n-1
		arra1 = new int[4];
//		 no es valido por qu no esta inicializado arra2 = {2,4,6,8};
		
		arra1[0]=1;
		arra1[1]=3;
		arra1[2]=5;
		arra1[3]=7;
		
		System.out.println("ARRAY 1 ");
		//para recorrer el array utilizamos el .length usando un for
		for (int i = 0;i<arra1.length;i++)
			System.out.println("En la posicion " + i + " hay un:"+ arra1[i]);
											// i da el indice y [i] valor de la posicion de memoria correspondiente
		System.out.println("ARRAY 1*3 ");
		for (int i = 0;i<arra1.length;i++)
			arra1[i] = i*3;//acada posicion de memoria se el asinga el mismo numero multiplicado por 3		
		for (int i = 0;i<arra1.length;i++)
			System.out.println("En la posicion " + i + " hay un:"+ arra1[i]);
		
		System.out.println("ARRAY 2 ");
		
		for (int i = 0;i<arra2.length;i++)
			System.out.println("En la posicion " + i + " hay un:"+ arra2[i]);
	}

}
