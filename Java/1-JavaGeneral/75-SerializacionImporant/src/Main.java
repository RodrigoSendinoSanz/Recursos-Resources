import java.io.FileInputStream;

import java.io.IOException;
import java.io.ObjectInputStream;

public class Main {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		/*Importante
		1. Las clases secundarias de una clase principal que implementa Serializable también lo harán.
		2. Los campos estáticos no se serializan (pertenecen a la clase, no a un objeto individual)
		3. la definición de la clase ("archivo de clase") en sí misma no se registra, cámbiela como el tipo de objeto
		4. Los campos declarados como "transitorios" no se serializan, se ignoran
		5. serialVersionUID es una ID de versión única
		
		
		serialVersionUID es una identificación única que funciona como una versión #
						verifica que el remitente y el receptor de un objeto serializado,
						han cargado clases para ese objeto que coinciden
						Asegura que el objeto será compatible entre máquinas
						El número debe coincidir. de lo contrario, esto causará una InvalidclassException
						Se calculará un SerialVersionUID en función de las propiedades de la clase, los miembros, etc.
						Una clase serializable puede declarar su propio serialVersionUID explícitamente (recomendado)
		
		
		 */
		
		Usuario usuario = null;
		FileInputStream fileIn = new FileInputStream("C:\\Users\\Win10\\Desktop\\Java Practicas\\75-Serializacion\\InfoUsuario.ser");
		
		ObjectInputStream in = new ObjectInputStream(fileIn);
		
		usuario = (Usuario) in.readObject();
		
		 in.close();
		 
		 fileIn.close();
		 
		 System.out.println(usuario.nombre);
		 System.out.println(usuario.contra);
		 usuario.saludar();
	}

}
