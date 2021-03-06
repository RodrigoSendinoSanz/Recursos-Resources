
public class Main {

	public static void main(String[] args) throws InterruptedException {
		/*
		 * multihilo: Proceso de ejecutar varios subprocesos simult?neamente
                     Ayuda a la m?xima utilizaci?n de la CPU
                     Los hilos son independientes, no afectan la ejecuci?n de otros hilos
                     Una excepci?n en un hilo no interrumpir? otros hilos
                     ?til para atender m?ltiples clientes, juegos multijugador o otros mutamente independientes
		 * 
		 * 
		 * */
		
		//2 formas de crear hilos
		
		MiHilo hilo1 = new MiHilo();
		
		MiRunnable run1 = new MiRunnable();//con esta forma puedes extender otras clases
		Thread hilo2 = new Thread(run1);
		
		
		
		/*Si son deaemons y se produce un fallo se paran los hilos
		hilo1.setDaemon(true);
		hilo2.setDaemon(true);
		*/
		
		hilo1.start();
		//hilo1.join(3000);//espera a que el hilo muera para iniciarse o espera el tiempo que se inidique
		hilo2.start();
		
		//System.out.println(1/0);
	}

}
