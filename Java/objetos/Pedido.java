package objetos;

public class Pedido {

	int numeroPedido;
	String descPedido;
	double importe;
	Cliente cliente;
	// PARA CONSTRUIR EL PEDIDO DEBEMOS TENER UNA REFERENCIA A CLIENTE CREADA
	public Pedido(int numeroPedido, String descPedido, double importe, Cliente cliente) {
		super();
		this.numeroPedido = numeroPedido;
		this.descPedido = descPedido;
		this.importe = importe;
		this.cliente = cliente;
	}

	public int getNumeroPedido() {
		return numeroPedido;
	}

	public void setNumeroPedido(int numeroPedido) {
		this.numeroPedido = numeroPedido;
	}

	public String getDescPedido() {
		return descPedido;
	}

	public void setDescPedido(String descPedido) {
		this.descPedido = descPedido;
	}

	public double getImporte() {
		return importe;
	}

	public void setImporte(double importe) {
		this.importe = importe;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public void mostrarPedido() {
		System.out.println("Esto es un pedido");
		
	}
	
	// polimorfismo : debe estar presente tanto en la super clase como en las sub clases
	//	public void mostrarPedido() {
	//		System.out.println("Soy un pedido");
	//	}
		
	// Clases abstractas si un metodo es abstracto la clase pasa a ser abstracta 
	// aquellas clases que heredan de una clase abstracta estan obligados a sobrescribir todos 
	// y cada uno de los metodos abstractos y de una clase abstracta no se pueden instanciar
	// instanciar objetos(No se puede crear una referencia a pedido que cree un objeto de tipo
	// pedido
	
//	public abstract void mostrarPedido();
	// Con una clase abstracta podemos segui utilizando los metodos de la clase pero no podemos
	// instanciar ejemplo aceder a los metodos de pedido atraves de un objeto pedidocasa
}
