import java.time.LocalDate;

public class Main {

	public static void main(String[] args) {
		// un metodo es un bloque de codigo que se ejecuta cada vez que es llamado
		
		
		hola();// si llamas a un metodo desde un metodo estatico, el metodo al que llama tiene que ser estatico tambien
		hola();
		hola();
		
		String nombre ="Rodrigo";
		int edad = 25;
		
		holaNombre(nombre);
		
		holaNombreyedad(nombre,edad);
		
		int a=3;
		int b =3;
		
		
		int c =add(a,b);//esta variable no reconoce la otra c por que no esta dentro de este metodo
		System.out.println(c);//Tambien se puede imprimir directamente add(a,b);
	}
	
	static void hola() {//los metodos void no retonan datos
		System.out.println("Hola");
	}
						// para que coja parametros hay que pasarle el tipo de dato que va a recibir
	static void holaNombre(String entrada) {
		System.out.println("Hola " + entrada);
	}
	static void holaNombreyedad(String entrada1,int entrada2) {
		LocalDate fechaactual = LocalDate.now();
		int tiempo= fechaactual.getYear();
		System.out.println("Hola " + entrada1+" tienes "+entrada2+" años naciste en el "+(tiempo-entrada2));
	}
	static int add(int a,int b) {//se pone el int por que se utiliza return (dado que no es una funcion void)
		
		int c =a+b;
		
		return c;//Ojo no mostraria nada por pantalla,
				//tambien podrias poner directamente:
	  //return a+b;
	}
}
