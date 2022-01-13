import java.io.File;

public class Main {

	public static void main(String[] args) {
		// file = es una representacion abstracta de rutas a directorios o archivos
		
		
							//crear unarchivo llamado ArchivoFile.txt
		File file = new File("ArchivoFile.txt");//C:/Users/Win10/Desktop/Java Practicas/44-Clase File/ArchivoFile.txt
		
		if(file.exists()) {
			System.out.println("El archivo existe");
			System.out.println(file.getPath());
			System.out.println(file.getAbsolutePath());
			System.out.println(file.isFile());
			file.delete();
		}
		else {
			System.out.println("El archivo no existe");
		}
	}

}
