import java.io.Serializable;

public class Usuario implements Serializable{

		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		String nombre;
		transient String contra;//transient hace que no se serialize se ignora
		
		public void saludar() {
			System.out.println("Hola "+nombre);
		}
}
