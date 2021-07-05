package objetos;

public class PedidoCoche extends Pedido {
	private String marca,modelo;

	public PedidoCoche(int numeroPedido, String descPedido, double importe, Cliente cliente, String marca,
			String modelo) {
		super(numeroPedido, descPedido, importe, cliente);
		this.marca = marca;
		this.modelo = modelo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	//polimorfimo
	public void mostrarPedido() {
		System.out.println("Soy un pedido de tipo coche");
	}
}
