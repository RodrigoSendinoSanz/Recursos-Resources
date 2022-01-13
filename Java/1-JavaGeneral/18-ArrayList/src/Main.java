import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		// ArrayList = es un array que puede variar su tamaño
		//													los elementos pueden ser añadidos despues de la  fase de compilacion
		//                                                  guarda la referencia de los tipos de datos
		
				// si necesitas trabajar con int tienes que poner <Integer> etc
		ArrayList<String> food = new ArrayList<>();

		food.add("Banana");
		food.add("Lentejas");
		food.add("Chocolate");
		
		food.set(0, "Sushi");//rescribe la informacion
		food.remove(2);//quita un dato del array
		//food.clear();//vacia el array
		
							//no se una el .lenght
		for (int i = 0; i < food.size(); i++) {
			System.out.println(food.get(i));
		}
		
	}

}
