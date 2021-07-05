package objetos;

public class TestCestaPedidos {

	public static void main(String[] args) {

		Cliente cli1;
		cli1 = new Cliente("1111B","Industrias Paco", 233, 445000);
		Cliente cli2;
		cli2 = new Cliente("348264T","Viajes Nav", 240, 134500);
		
		Pedido ped1 = new  Pedido(2, "alicates", 12, cli1);
		Pedido ped2 = new  Pedido(4, "llaves", 14, cli1);
		Pedido ped3 = new  Pedido(5, "cubo pintura", 2, cli2);
		
		// 7 numeros de pedidos maximos
		CestaPedidos cesta = new CestaPedidos(7);
		cesta.addPedido(ped1);
		cesta.addPedido(ped2);
		cesta.addPedido(ped3);
		
		cesta.listarCesta();
		// AL CONSULTAR EL PEDIDO 2 NOS DEVULEVE EL 3 puesto que es un array
		Pedido ped4 = cesta.consultarPedido(2);
		
		System.out.println("Num pedido :"+ ped4.getNumeroPedido());
		System.out.println("Cif cliente :"+ped4.getCliente().getCif());

		//Interface clase especial solo tiene metodos abstractos no tiene datos miembro
		// y si los datos los tiene han de ser estatico y constante
		
		
		
	}

}
