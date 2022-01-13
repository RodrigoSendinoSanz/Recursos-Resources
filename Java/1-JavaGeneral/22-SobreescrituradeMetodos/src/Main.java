
public class Main {

	public static void main(String[] args) {
		// Los metodos sobrescritos son metodos que tienen el mismo nombre pero diferentes parametros
		
		int x =suma(1,2,4,5);
		
		System.out.println(x);
		
		
		
		double y =suma(1.7,2.0);
		
		System.out.println(y);
	}
	
	static int suma(int a, int b) {
		System.out.println("Metodo sobrescrito 1");
		return a+b;
	}
	static int suma(int a, int b,int c) {
		System.out.println("Metodo sobrescrito 2");
		return a+b+c;
	}
	
	static int suma(int a, int b,int c,int d) {
		System.out.println("Metodo sobrescrito 3");
		return a+b+c+d;
	}
	
	static double suma(double a, double b) {
		System.out.println("Metodo sobrescrito 4");
		return a+b;
	}
	static double suma(double a, double b,double c) {
		System.out.println("Metodo sobrescrito 5");
		return a+b+c;
	}
	
	static double suma(double a, double b,double c,double d) {
		System.out.println("Metodo sobrescrito 6");
		return a+b+c+d;
	}

}
