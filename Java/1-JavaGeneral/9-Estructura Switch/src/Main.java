
public class Main {

	public static void main(String[] args) {
		// switch = es una estructura que testea el valor de una variable con una lista de valores
		// byte ,short,int , String,Character,Byte,Short,Integer
		
		String dia ="Pizza";
		
		switch (dia) {
		case "Lunes": System.out.println("Hoy es Lunes");
		break;
		case "Martes": System.out.println("Hoy es Martes");
		break;
		case "Miercoles": System.out.println("Hoy es Miercoles");
		break;		
		case "Jueves": System.out.println("Hoy es Jueves");
		break;		
		case "Viernes": System.out.println("Hoy es Viernes");
		break;		
		case "Sabado": System.out.println("Hoy es Sabado");
		break;		
		case "Domingo": System.out.println("Hoy es Domingo");
		break;		
	
		default:
			System.out.println("El valor: " + dia+" no es valido");
		}

	}

}
