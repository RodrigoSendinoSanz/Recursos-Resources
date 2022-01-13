
public class Coche {
	private String nombre;
	private int fecha;
	private String modelo;
	
	public Coche(String nombre, int fecha, String modelo) {
		this.setNombre(nombre);
		this.setModelo(modelo);
		this.setFecha(fecha);
	}
	public Coche(Coche copia){
		this.copiar(copia);
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getFecha() {
		return fecha;
	}

	public void setFecha(int fecha) {
		this.fecha = fecha;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	public void copiar(Coche coche) {
		this.setNombre(coche.getNombre());
		this.setFecha(coche.getFecha());
		this.setModelo(coche.getModelo());
	}
	
}