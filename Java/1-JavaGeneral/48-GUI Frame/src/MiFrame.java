import java.awt.Color;

import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class MiFrame extends JFrame{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	MiFrame(){
		this.setTitle("El titulo va aqui");//Pone un titulo a la ventana
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//cierra la aplicacion
		this.setResizable(false);//asi no se puede cambair sus medidas
		this.setSize(420,420);//define el alto y el ancho de la ventana
		this.setVisible(true);//hace visible a la ventana
			
		ImageIcon logo = new ImageIcon("logo.png");//crea una imagen para el logo	
		
		this.setIconImage(logo.getImage());//cambia el icono de la ventana
		
		
		this.getContentPane().setBackground(new Color(255,40,100));
	}
}
