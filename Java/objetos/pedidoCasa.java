package objetos;

public class pedidoCasa extends Pedido {
	private int numeroHabitaciones, metrosCuadrados;
	//como extiende de pedido primero hay que generar un pedido con todos sus atributos
	public pedidoCasa(int numeroPedido, String descPedido, double importe, Cliente cliente, int numeroHabitaciones,
			int metrosCuadrados) {
		//super llama ala constructor de pedido pasandole nuestras variables
		super(numeroPedido, descPedido, importe, cliente);
		this.numeroHabitaciones = numeroHabitaciones;
		this.metrosCuadrados = metrosCuadrados;
	}
	public int getNumeroHabitaciones() {
		return numeroHabitaciones;
	}
	public void setNumeroHabitaciones(int numeroHabitaciones) {
		this.numeroHabitaciones = numeroHabitaciones;
	}
	public int getMetrosCuadrados() {
		return metrosCuadrados;
	}
	public void setMetrosCuadrados(int metrosCuadrados) {
		this.metrosCuadrados = metrosCuadrados;
	}
	// polimorfismo
	public void mostrarPedido() {
		System.out.println("Soy un pedido de tipo casa");
	}
	
}
