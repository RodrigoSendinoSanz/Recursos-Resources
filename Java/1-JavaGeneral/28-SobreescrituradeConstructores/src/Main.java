
public class Main {

	public static void main(String[] args) {
		// Los constructores sobrecargados son constructores con el mismo nombre pero distintos parametros
		
		Pizza pizza = new Pizza("fina","cheedar","tomate","bacon");
		
		Pizza pizza2 = new Pizza("gorda","normal","tomate");
		
		Pizza pizza3 = new Pizza("normal","vegana");
		
		System.out.println("Aqui esta su pedido: ");
		System.out.println(pizza.masa);
		System.out.println(pizza.queso);
		System.out.println(pizza.salsa);
		System.out.println(pizza.topping);
		System.out.println("///////////////");
		System.out.println(pizza2.masa);
		System.out.println(pizza2.queso);
		System.out.println(pizza2.salsa);
		System.out.println("///////////////");
		System.out.println(pizza3.masa);
		System.out.println(pizza3.queso);


	}

}
