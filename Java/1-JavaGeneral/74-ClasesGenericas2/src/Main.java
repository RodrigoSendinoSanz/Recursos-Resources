//import java.util.ArrayList;
//import java.util.HashMap;

public class Main {

	public static void main(String[] args) {
		
		
		MiClaseGenerica<Integer,Integer> miInt = new MiClaseGenerica <> (1,2);
		MiClaseGenerica<Double,Double>  miDouble = new MiClaseGenerica <> (3.14,32.3);
		MiClaseGenerica<Character,Character>  miChar = new MiClaseGenerica <> ('$','e');
		MiClaseGenerica<String,String>  miString = new MiClaseGenerica <> ("Hola","Adios");
		
		//ArrayList<String> misAmigos = new ArrayList<>();
		
		//HashMap<Integer,String> users = new HashMap<>();
		
		/*
		MiIntegerClass miInt = new MiIntegerClass(1);
		MiDoubleClass miDouble = new MiDoubleClass(3.14);
		MiCharacterClass miChar = new MiCharacterClass('$');
		MiStringClass miString = new MiStringClass("Hola");
		*/
		System.out.println(miInt.getValor());
		System.out.println(miDouble.getValor());
		System.out.println(miChar.getValor());
		System.out.println(miString.getValor());
		
		System.out.println();
		
		System.out.println(miInt.getValor2());
		System.out.println(miDouble.getValor2());
		System.out.println(miChar.getValor2());
		System.out.println(miString.getValor2());
	}
}
