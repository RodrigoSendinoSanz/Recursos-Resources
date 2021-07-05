package objetos;

public class CestaPedidos {
	Pedido [] arraPedido;
	int pedidosIncluidos;
	int maximoPermitido;
	//Constructores
	public CestaPedidos( int maximoPermitido) {
		arraPedido = new Pedido[maximoPermitido];
		this.maximoPermitido = maximoPermitido;
		pedidosIncluidos = 0;
	}
	public boolean addPedido(Pedido pedido) {
		arraPedido[pedidosIncluidos] = pedido;
		pedidosIncluidos++;
		return true;
	}
	public Pedido consultarPedido(int indice) {
		return arraPedido[indice];
	}

	public void listarCesta() {
		for(int i=0; i<pedidosIncluidos;i++) {
			System.out.println("Numero de pedido: "+ arraPedido[i].getNumeroPedido());
			System.out.println("Descripcion de pedido: "+ arraPedido[i].getDescPedido());
			System.out.println("Cif cliente: "+ arraPedido[i].getCliente().getCif());
		}
	}
	
	public void mostrarCesta() {
		for(int i=0; i<pedidosIncluidos;i++) {
			arraPedido[i].mostrarPedido();
		}
	}
	
}
