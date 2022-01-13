
public class Persona {

	String nombre;
	int edad;
	Persona(String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	public String toString() {
		return this.nombre+" " + this.edad + " ";
	}
}
