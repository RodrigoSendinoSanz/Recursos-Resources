package cadenas2;

public class TestEnvolventes {


	@SuppressWarnings("deprecation")
	public static void main(String[] args) {
		Integer numero;
		numero= Integer.valueOf(3);
		System.out.println("numero contiene : "+ numero);

		Integer numero2 = null;
	try {
			numero2= Integer.valueOf("a23");
	} catch (Exception e) {
			System.out.println("Este numero tiene formato incorrecto");
	}
		System.out.println("numero2 contiene : "+ numero2);
		
		Integer numero3;
		numero3= Integer.parseInt("1230");
		System.out.println("numero3 contiene : "+ numero3);
		
		int numero4 = 1000;
		Integer numeroDos;
		numeroDos = new Integer ("250");
		numero4 = numeroDos.intValue();		
		System.out.println("numero4 contiene : "+ numero4);
		
		String cadena;
		cadena = Integer.toString(300);
		System.out.println("cadena contiene : "+ cadena);
		
	}

}
