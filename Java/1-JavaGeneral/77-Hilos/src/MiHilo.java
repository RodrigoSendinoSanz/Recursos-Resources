
public class MiHilo extends Thread {

	@Override
	public void run() {
		
		if(this.isDaemon()) {
		System.out.println("Este es un subproceso daemon que se est� ejecutando");
		}
		else {
			System.out.println("Este es un hilo de usuario que se est� ejecutando");
		}
	}
}