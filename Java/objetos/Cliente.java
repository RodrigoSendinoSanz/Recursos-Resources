package objetos;

public class Cliente implements modificarDescripciones{
	private String cif, razonSocial;
	private int cantidadEmpleados;
	private double facturacionAnual;
	
	// constructor: boton derecho - source - generate constructor using fields
	public Cliente(String cif, String razonSocial, int cantidadEmpleados, double facturacionAnual) {
		super();
		this.cif = cif;
		this.razonSocial = razonSocial;
		this.cantidadEmpleados = cantidadEmpleados;
		this.facturacionAnual = facturacionAnual;
	}
	// constructor vacio : boton derecho - source - generate constructor using fields deselecionar
	public Cliente() {
		super();
	}
	// Generar getters and setters: boton derecho - source - generate getters and setters(esto se utiliza para manejar los datos)
	public String getCif() {
		return cif;
	}
	public void setCif(String cif) {
		this.cif = cif;
	}
	public String getRazonSocial() {
		return razonSocial;
	}
	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}
	public int getCantidadEmpleados() {
		return cantidadEmpleados;
	}
	public void setCantidadEmpleados(int cantidadEmpleados) {
		this.cantidadEmpleados = cantidadEmpleados;
	}
	public double getFacturacionAnual() {
		return facturacionAnual;
	}
	public void setFacturacionAnual(double facturacionAnual) {
		this.facturacionAnual = facturacionAnual;
	}
	
	public double ratioFacturacion() {
		return facturacionAnual/ cantidadEmpleados;
	}
	@Override
	public void modificarDesc(String cadena) {
		this.razonSocial=cadena;
		
	}

}
