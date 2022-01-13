
public class Main {

	public static void main(String[] args) {
		// String es un dato referenciado y los tipo de datos referenciados tienen metodos utiles

		String name ="   Rodrigo   ";
		
		boolean result = name.equals("   Rodrigo   ");//Retorna un valor boolenao(es case sensitive)
		
		boolean result2 = name.equalsIgnoreCase("   rodrigo   ");//no es case sensitive
		
		int result3 = name.length();// muestra el tamaño de la cadena
		
		char result4 =name.charAt(0);// muestra el caracter de la posicion elegida
		
		int result5 = name.indexOf("g");// muestra la posicion del caracter en la cadena
		
		boolean result6 = name.isEmpty();//Combrueba si esta vacia la cadena
		
		String result7 = name.toUpperCase();//Pone la cadena en mayusculas
		
		String result8= name.toLowerCase();//Pone la cadena en mayusculas
		
		String result9 =name.trim();//Quita los espacios laterales
		
		String result10 =name.replace("o", "$");//remplaza los caracteres de una String
		
		int result11 =name.compareTo("   Rodrigo   ");//Compara 2 cadenas si son iguales devuelve 0 y si no devuelve 1
		
		System.out.println("equals "+result);
		System.out.println("equalsIgnoreCase "+result2);
		System.out.println("lenght "+result3);
		System.out.println("charAt "+result4);
		System.out.println("indexOf "+result5);
		System.out.println("isEmpty "+result6);
		System.out.println("toUpperCase "+result7);
		System.out.println("toLowerCase "+result8);
		System.out.println("trim "+result9);
		System.out.println("replace "+result10);
		System.out.println("compareTo "+result11);
		
		
	}

}
