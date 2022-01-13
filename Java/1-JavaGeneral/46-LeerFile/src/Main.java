import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Main {

	public static void main(String[] args) {
		//Leer Archivos leer el contenido como una secuencia de caracteres uno por uno read(), cuando devuelve-1 no hay mas datos para leer
		
		try {
			FileReader lector = new FileReader("saludo.txt");
			
			int datos = lector.read();
			while (datos != -1) {
				System.out.print((char)datos);
				datos = lector.read();
			}
			lector.close();
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		

	}

}
