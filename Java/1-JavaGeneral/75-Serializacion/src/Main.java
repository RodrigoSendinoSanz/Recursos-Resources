import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException {
		/*
		 Serializaci?n El proceso de convertir un objeto en un flujo de bytes.
	            Persiste (guarda el estado) el objeto despu?s de que el programa sale
	            Este flujo de bytes se puede guardar como un archivo o enviar a trav?s de una red
	            Se puede enviar a una m?quina diferente
	            El flujo de bytes se puede guardar como un archivo (.ser) que es independiente de la plataforma
	            (Piense en esto como si estuviera guardando un archivo con la informaci?n del objeto) 
            
            
            
		Deserializaci?n = El proceso inverso de convertir un flujo de bytes en un objeto.
				(Piense en esto como si estuviera cargando un archivo guardado)
				
				
				
		Pasos para serializar
				1. Su clase de objeto debe implementar una interfaz serializable
				2. agregue import java.io.Serializable;
				3. FileOutputStream fileOut = new FileOutputStream (ruta del archivo);
				4. ObjectOutputStream out = new ObjectOutputStream(fileOut);
				5. out.writeObject(nombreObjeto)
				6. out.close(); fileOut.close();
		 */
		
		Usuario usuario = new Usuario();
		//Si quuieres cambiar los valores has de ejecutar el proyecto para que se carge en el deserializador
		usuario.nombre ="Rodrigo";
		usuario.contra ="12345";
		
		FileOutputStream fileOut = new FileOutputStream("InfoUsuario.ser");
		
		ObjectOutputStream out = new ObjectOutputStream(fileOut);
		
		out.writeObject(usuario);
		
		 out.close();
		 fileOut.close();
		 
		 System.out.println("Informacion del objeto guardada");
		 
		 long serialVesionUID = ObjectStreamClass.lookup(usuario.getClass()).getSerialVersionUID();
		 
		 System.out.println(serialVesionUID);
	}

}
