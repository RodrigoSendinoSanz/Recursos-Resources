package objetos;

public class testcliente {

	public static void main(String[] args) {
		//Instanciar objeto
		Cliente cli1,cli2;
		cli1 = new Cliente("1111B","Industrias Paco", 233, 445000);
		System.out.println("Cif :"+cli1.getCif());
		cli1.setCantidadEmpleados(12000);
		System.out.println("Empelados :"+cli1.getCantidadEmpleados());
		System.out.println("Ratio :"+cli1.ratioFacturacion());
		
		System.out.println("\n");
		
		cli2 = new Cliente("348264T","Viajes Nav", 240, 134500);
		System.out.println("Cif :"+cli2.getCif());
		System.out.println("Empelados :"+cli2.getCantidadEmpleados());
		System.out.println("Ratio :"+cli2.ratioFacturacion());
	}

}
