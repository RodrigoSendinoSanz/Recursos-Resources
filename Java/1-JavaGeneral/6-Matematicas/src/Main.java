import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		double x = 3.14;
		double y =-10;
		
		
		double zmax = Math.max(x, y);//Saca el valor mas alto
		double zmin = Math.max(x, y);//Saca el valor mas bajo
		double zabs = Math.abs(y);//Saca el valor absoluto
		double zsqrt = Math.sqrt(x);//Saca la raiz de un numero
		double zround = Math.round(x);//Redondea el numero 
		double zceli = Math.ceil(x);//Redondea el numero hacia arriba
		double zfloor = Math.floor(x);//Redondea el numero 
		
		System.out.println(zmax);
		System.out.println(zmin);
		System.out.println(zabs);
		System.out.println(zsqrt);
		System.out.println(zround);
		System.out.println(zceli);
		System.out.println(zfloor);

		/*Triangulo*/
		double xtri;
		double ytri;
		double ztri;
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Introduce el lado x :");
		xtri=scanner.nextDouble();
		
		System.out.println("Introduce el lado y :");
		ytri=scanner.nextDouble();
		
		
		ztri=Math.sqrt((xtri*xtri)+(ytri*ytri));
		
		System.out.println("La hipotenusa es: "+ztri);
		
		scanner.close();

	}

}
