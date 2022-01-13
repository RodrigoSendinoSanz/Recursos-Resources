
public class Heroe extends Persona{
	
	String poder;

	Heroe(String nombre,int edad,String poder) {
		super(nombre, edad);
		this.poder =poder;
	}
		
	public String toString() {
		return super.toString() +this.poder;
	}
}
