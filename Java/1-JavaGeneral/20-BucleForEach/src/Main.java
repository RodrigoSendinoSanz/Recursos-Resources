import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		// for-each itera los elementos de un array o una collecion
				// menos pasos mas facil de leer y menos flexible
		
		//String[] animals = {"Gato","Cocodrilo","Rata","Loro"};
		ArrayList<String> animals = new ArrayList<String>();
		
		animals.add("Gato");
		animals.add("Cocodrilo");
		animals.add("Rata");
		animals.add("Loro");
		
				// por cada animal ...
		for (String i : animals) {
			System.out.println(i);
			
		}

	}

}
