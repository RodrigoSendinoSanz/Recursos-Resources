import java.io.FileInputStream;

import java.io.IOException;
import java.io.ObjectInputStream;

public class Main {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		/*Importante
		1. Las clases secundarias de una clase principal que implementa Serializable tambi�n lo har�n.
		2. Los campos est�ticos no se serializan (pertenecen a la clase, no a un objeto individual)
		3. la definici�n de la clase ("archivo de clase") en s� misma no se registra, c�mbiela como el tipo de objeto
		4. Los campos declarados como "transitorios" no se serializan, se ignoran
		5. serialVersionUID es una ID de versi�n �nica
		
		
		serialVersionUID es una identificaci�n �nica que funciona como una versi�n #
						verifica que el remitente y el receptor de un objeto serializado,
						han cargado clases para ese objeto que coinciden
						Asegura que el objeto ser� compatible entre m�quinas
						El n�mero debe coincidir. de lo contrario, esto causar� una InvalidclassException
						Se calcular� un SerialVersionUID en funci�n de las propiedades de la clase, los miembros, etc.
						Una clase serializable puede declarar su propio serialVersionUID expl�citamente (recomendado)
		
		
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
