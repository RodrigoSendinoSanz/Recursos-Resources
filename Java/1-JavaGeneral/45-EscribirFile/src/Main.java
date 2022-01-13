import java.io.FileWriter;
import java.io.IOException;

public class Main {

	public static void main(String[] args) {
		// escribir archivos
		try {
			FileWriter escribir = new FileWriter("saludo.txt");//puendes poner la extension que quieras Y LO CREA
			escribir.write("Hola \n Mundo");//sobrescribe el archivo
			escribir.append("\n (Rodrigo Sendino Sanz)");// añade lo que quieras al final
			escribir.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
