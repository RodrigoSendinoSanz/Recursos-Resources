package objetos;

public class TestPedido {

	public static void main(String[] args) {
		Cliente cli1;
		cli1 = new Cliente("1111B","Industrias Paco", 233, 445000);
		Pedido ped1= new Pedido (1,"tornillos",12,cli1);
		
		System.out.println("num pedido "+ ped1.getNumeroPedido());
		// acceder al cif del cliente mediante pedido
		System.out.println("cif "+ ped1.getCliente().getCif());
	}

}
