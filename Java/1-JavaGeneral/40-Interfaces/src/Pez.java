
public class Pez implements Presa, Depredador{

	@Override
	public void caza() {
		System.out.println("El pez esta cazando");
		
	}

	@Override
	public void huir() {
		System.out.println("El pez huye");
		
	}

}
