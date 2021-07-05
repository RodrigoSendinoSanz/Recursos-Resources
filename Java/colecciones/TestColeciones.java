package colecciones;

import java.util.ArrayList;

public class TestColeciones {

	public static void main(String[] args) {

		ArrayList <String> arra1 = new ArrayList <String>();

		String cad1 = new String ("Tomas");
		String cad2 = new String ("andres");
		String cad3 = new String ("eva");
		String cad4 = new String ("santiago");
		String cad5 = new String ("rosario");
		
		arra1.add(cad1);
		arra1.add(cad2);
		arra1.add(cad3);
		arra1.add(cad4);
		arra1.add(cad5);
		

		for (int i = 0; i < arra1.size(); i++) {
			System.out.println(arra1.get(i));
		}
		System.out.print("\n");
		arra1.remove(0);
		
		for (int i = 0; i < arra1.size(); i++) {
			System.out.println(arra1.get(i));
		}
		
		System.out.print("\n");
		arra1.remove("eva");
		for (int i = 0; i < arra1.size(); i++) {
			System.out.println(arra1.get(i));
		}
		
	}

}
