package objetos;

public class TestHernciaPedido {
	public static void main(String[] args) {
		Cliente cli1;
		cli1 = new Cliente("1111B","Industrias Paco", 233, 445000);
		Pedido ped1= new Pedido (1,"tornillos",12,cli1);
		pedidoCasa pcasa1 = new pedidoCasa(3, "Alquileer vivienda", 230, cli1, 3, 120);
		// referencia a pedido (la super clase) que instancia un objeto de tipo subclase (pedidoCasa)
		Pedido pcasa2 = new pedidoCasa(4, "Alquileer vivienda2", 340, cli1, 6, 344);
		// Si se instancia un pedidocasa desde pedido la referencia es a pedido po lo tanto tendra los metodos de pedido
		//pcasa1.(Los metodos de pedido y de pedidoCasa)
		//pcasa2.(Los metodos de son los de pedido)
		
		System.out.println(ped1.getImporte());
		System.out.println(pcasa1.getMetrosCuadrados());
		System.out.println(pcasa2.getImporte());
		
		System.out.println("\n");
		
		ped1.mostrarPedido();
		pcasa1.mostrarPedido();
		//en pcasa2 ejecuta el metodo ejecuta el metodo de pedido casa pese a que este instanciado en pedido
		pcasa2.mostrarPedido();
		
		System.out.println("\n");
		
		CestaPedidos cesta = new CestaPedidos(4);
		cesta.addPedido(ped1);
		cesta.addPedido(pcasa1);
		cesta.addPedido(pcasa2);
		cesta.mostrarCesta();
		
		
	}
}
