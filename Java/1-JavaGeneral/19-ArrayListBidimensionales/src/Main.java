import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		// ArrayList Bidimensional = es una lista array de otras listas
		//													puede cambiar el tamaño dse estos durante la ejecucion

		
		ArrayList<ArrayList<String>> listaGeneral = new ArrayList();
		

		ArrayList<String> listaComida = new ArrayList<>();
		
		listaComida.add("tomates");
		listaComida.add("pasta");
		listaComida.add("leche");

		System.out.println(listaComida);
		
		ArrayList<String> listaProductos = new ArrayList<>();
		
		listaProductos.add("legia");
		listaProductos.add("agodon");
		listaProductos.add("escoba");
		
		System.out.println(listaProductos);
		
		ArrayList<String> listaBebidas = new ArrayList<>();
		
		listaBebidas.add("cerveza");
		listaBebidas.add("cocacola");
		
		System.out.println(listaBebidas);

		
		listaGeneral.add(listaComida);
		listaGeneral.add(listaProductos);
		listaGeneral.add(listaBebidas);
		
		System.out.println(listaGeneral);
		
		System.out.println(listaGeneral.get(0).get(1));//aceder a pasta
		System.out.println(listaGeneral.get(2).get(1));//aceder a cocacola
		
		
	}

}
