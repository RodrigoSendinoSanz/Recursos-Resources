
public class Main {

	public static void main(String[] args) {
		// clases envolventes = proporcionan una forma de usar datos primitivos como datos de referencia
		// y por lo tanto tienen metodos utilies, se pueden utilizas colleciones (ArrayList)
		
		//primitivo    envoltura
		//boolean       Boolean
		//char         Character
		//int           Integer
		//double        Double
		
		
		//autoboxing conversion automatica del compilador de java entre un dato primitivo y su clase envolvente
		//unboxing conversion contraria de una clase envolvente a un dato primitivo
		
		Boolean a = true;
		Character b ='@';
		Integer c = 123;
		Double d = 3.14;
		String e = "Rodrigo";
		
		
		//a.
		  //a = true
		if (b =='@') {
			System.out.println("Es verdad");
		}
		
		

	}

}
