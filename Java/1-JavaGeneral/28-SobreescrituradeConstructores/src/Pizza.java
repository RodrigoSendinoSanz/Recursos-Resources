
public class Pizza {
	String masa;
	String queso;
	String salsa;
	String topping;
	
	Pizza(String masa, String queso, String salsa, String topping) {

		this.masa = masa;
		this.queso = queso;
		this.salsa = salsa;
		this.topping = topping;
	}
	
	Pizza(String masa, String queso, String salsa) {
		this.masa = masa;
		this.queso = queso;
		this.salsa = salsa;
	}
	
	Pizza(String masa, String queso) {
		this.masa = masa;
		this.queso = queso;
	}
	
}
