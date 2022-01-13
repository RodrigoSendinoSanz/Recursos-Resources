import java.io.Serializable;

public class Usuario implements Serializable{

		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		String nombre;
		String contra;
		
		public void saludar() {
			System.out.println("Hola "+nombre);
		}
}
