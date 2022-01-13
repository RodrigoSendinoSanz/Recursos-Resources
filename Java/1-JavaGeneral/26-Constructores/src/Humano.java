
public class Humano {
	String nombre;
	int edad;
	double peso;
	
	
	Humano(String nombre,int edad,double peso){
		
		this.nombre=nombre;
		this.edad=edad;
		this.peso=peso;
		
	}
	
	void comer() {
		System.out.println(this.nombre+" esta comiendo");
	}
	
	void beber() {
		System.out.println(this.nombre+" esta bebiendo");
	}
}
