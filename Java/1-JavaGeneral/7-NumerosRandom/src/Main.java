import java.util.Random;
public class Main {

	public static void main(String[] args) {
		
		Random random = new Random();
		
		//int x= random.nextInt();
		
		int x= random.nextInt(6)+1;//Numero random del 1 al 6
		double y=random.nextDouble();//Numero entre el 0 y el 1
		boolean z=random.nextBoolean();
		
		System.out.println(x);
		System.out.println(y);
		System.out.println(z);

	}

}
