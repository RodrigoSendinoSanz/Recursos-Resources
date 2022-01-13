import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		/*
		 * Pasos para deserializar
				1. Declara tu objeto (no lo instancias)
				2. Su clase debe implementar una interfaz serializable
				3. agregue import java.io.Serializable;
				4. FileInputStream fileIn = new FileInputStream(ruta del archivo);
				5. ObjectInputStream in = new ObjectInputStream(fileIn);
				6. nombreObjeto = (Clase) in.readObject();
				7. in.close();fileIn.close();
				                
		 * 
		 * */

		Usuario usuario = null;
		FileInputStream fileIn = new FileInputStream("C:\\Users\\Win10\\Desktop\\Java Practicas\\75-Serializacion\\InfoUsuario.ser");
		
		ObjectInputStream in = new ObjectInputStream(fileIn);
		
		usuario = (Usuario) in.readObject();
		
		 in.close();
		 
		 fileIn.close();
		 
		 System.out.println(usuario.nombre);
		 System.out.println(usuario.contra);
		 usuario.saludar();
		 
		 long serialVesionUID = ObjectStreamClass.lookup(usuario.getClass()).getSerialVersionUID();//Si cambias algo de usuario cambiaria la version
		 
		 System.out.println(serialVesionUID);
	}

}
