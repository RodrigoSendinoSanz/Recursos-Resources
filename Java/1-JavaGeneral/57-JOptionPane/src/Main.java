import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class Main {

	public static void main(String[] args) {
		// JOptionPane - un pop up con una caja de dialogo en la cual el usuario eligira un valor o informara de algo
										//Mensaje, titulo y tipo
		/*
		JOptionPane.showMessageDialog(null, "Texto de informacion", "Titulo", JOptionPane.PLAIN_MESSAGE);
		
		JOptionPane.showMessageDialog(null, "Texto de informacion", "Titulo", JOptionPane.INFORMATION_MESSAGE);
		
		JOptionPane.showMessageDialog(null, "Texto de informacion", "Titulo", JOptionPane.QUESTION_MESSAGE);
		
		JOptionPane.showMessageDialog(null, "Texto de informacion", "Titulo", JOptionPane.WARNING_MESSAGE);

		JOptionPane.showMessageDialog(null, "Texto de informacion", "Titulo", JOptionPane.ERROR_MESSAGE);
		*/
		
		
		/*
		//Troll
		while (true) {
			JOptionPane.showMessageDialog(null, "Atencion tu ordenador ha sido infectado con el virus Tuca", "TUCA", JOptionPane.WARNING_MESSAGE);
		}
		*/
		
		//JOptionPane.showConfirmDialog(null, "Texto de informacion", "Titulo", JOptionPane.YES_NO_CANCEL_OPTION);//Tiene 3 botones si no y cancelar
		
		//System.out.println(JOptionPane.showConfirmDialog(null, "Texto de informacion", "Titulo", JOptionPane.YES_NO_CANCEL_OPTION));//yes=0,no=1,cancel=3,botonx = -1
		/*
		int respuesta  =JOptionPane.showConfirmDialog(null, "Texto de informacion", "Titulo", JOptionPane.YES_NO_CANCEL_OPTION);
		
		switch (respuesta) {
		case 0: {
			System.out.println("Ha dado en Yes");
			break;
		}
		case 1: {
			System.out.println("Ha dado en No");
			break;
		}
		case 3: {
			System.out.println("Ha dado en Cancelar");
			break;
		}
		case -1: {
			System.out.println("Ha cerrado la ventana");
			break;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + respuesta);
		}
		*/
		
		//JOptionPane.showInputDialog("Hola buenas");
		/*
		String nombre= JOptionPane.showInputDialog("Hola Cual es tu nombre?");
		
		JOptionPane.showMessageDialog(null, "Hola "+nombre, "Saludo "+nombre, JOptionPane.WARNING_MESSAGE);
		*/
		
		//JOptionPane.showOptionDialog(null, "Eres increible!", "Mensaje secreto", JOptionPane.YES_NO_CANCEL_OPTION, JOptionPane.INFORMATION_MESSAGE, null, null, 0);
	
		//JOptionPane.showOptionDialog(null, "Eres increible!", "Mensaje secreto", JOptionPane.YES_NO_OPTION, JOptionPane.INFORMATION_MESSAGE, null, null, 0);
	
		String[] respuestas = {"Si, quiero realizar la operacion","No quiero realizar la operacion","Cancelar operacion"};
	
		ImageIcon icono =new ImageIcon("logo.png");
		Image image = icono.getImage(); // transformamos la imagen
		Image newimg = image.getScaledInstance(50, 50,  java.awt.Image.SCALE_SMOOTH); //escala la imagen  
		icono = new ImageIcon(newimg);  // lo devolvemos al icono
		
		int result = JOptionPane.showOptionDialog(null, ""
				+ "Quiere incorporar el usuario a la BBDD?", 
				"Incorporar Usuario",
				JOptionPane.YES_NO_CANCEL_OPTION,
				JOptionPane.INFORMATION_MESSAGE,
				icono,
				respuestas,
				0);
	
		System.out.println(result);
	
	
	
	
	}

}
