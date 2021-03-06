import java.util.Calendar;
import java.util.Timer;
import java.util.TimerTask;

public class Main {

	public static void main(String[] args) {
		/*
		Timer =
		Una instalaci?n para hilos para programar tareas.
		para ejecuci?n futura en un subproceso en segundo plano

		
		TimerTask =
		Una tarea que se puede programar para una sola vez
		o ejecuci?n repetida por un temporizador
		 */
		
		Timer contador = new Timer();
		
		TimerTask tarea = new TimerTask() {
			
			int cont=12;
			@Override
			public void run() {
				//System.out.println("Tarea completada "+cont);
				if (cont>0) {
					System.out.println(cont+" Segundos");
					cont--;
				}else{
					System.out.println("Feliz a?o nuevoo!!");
					contador.cancel();
				}
			}
		};
		
		Calendar fecha = Calendar.getInstance();
		fecha.set(Calendar.YEAR, 2022);
		fecha.set(Calendar.MONTH, Calendar.JANUARY);
		fecha.set(Calendar.DAY_OF_MONTH, 13);
		fecha.set(Calendar.HOUR_OF_DAY, 19);
		fecha.set(Calendar.MINUTE, 14);
		fecha.set(Calendar.SECOND, 0);
		fecha.set(Calendar.MILLISECOND, 0);
		
		//contador.schedule(tarea, fecha.getTime());//Fecha selecionada en Calendar
		
		//contador.schedule(tarea, 3000); 3 segundos
		
		//contador.scheduleAtFixedRate(tarea, 0, 1000);//ejecuta esto cada segundo
		
		Calendar newYear = Calendar.getInstance();
		newYear.set(Calendar.YEAR, 2022);
		newYear.set(Calendar.MONTH, Calendar.DECEMBER);
		newYear.set(Calendar.DAY_OF_MONTH, 31);
		newYear.set(Calendar.HOUR_OF_DAY, 23);
		newYear.set(Calendar.MINUTE, 59);
		newYear.set(Calendar.SECOND, 48);
		newYear.set(Calendar.MILLISECOND, 0);
		
		
		
		contador.schedule(tarea, fecha.getTime());//a?o nuevo
	}

}
