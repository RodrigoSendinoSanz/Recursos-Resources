import java.io.File;
import java.io.IOException;
import java.util.Scanner;

import javax.sound.sampled.*;
public class Main {

	public static void main(String[] args) throws UnsupportedAudioFileException, IOException, LineUnavailableException {
		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		
		File archivo = new File("cancion.wav");
		AudioInputStream audio =AudioSystem.getAudioInputStream(archivo);
		Clip clip = AudioSystem.getClip();
		
		clip.open(audio);


		String respuesta ="";

		while (!respuesta.equals("Q")) {
			System.out.println("P = Play // S = Parar // R = Volver a empezar // Q = Finalizar");
			System.out.println("Introduce tu opcion: ");
			respuesta =scanner.next();
			respuesta = respuesta.toUpperCase();
			switch (respuesta) {
				case "P": clip.start();
				break;
				case "S": clip.stop();
				break;
				case "R": clip.setMicrosecondPosition(0);
				break;
				case "Q": clip.close();
				break;
			default:
				throw new IllegalArgumentException("Unexpected value: " + respuesta);
			}
		}
		System.out.println("Adios");
		
	}

}
