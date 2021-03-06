import java.awt.Color;
import java.awt.Font;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.border.Border;

public class Main {

	public static void main(String[] args) {
		// Label es un area de display de la GUI para una string, imagen o ambas
		
		
		ImageIcon imagen = new ImageIcon("download.png");
		Border border = BorderFactory.createLineBorder(Color.MAGENTA,3);
		JLabel lable = new JLabel();// crea un lable
		
		lable.setText("Hola Mundo");// pone un texto a un lable
		lable.setIcon(imagen);
		
		lable.setHorizontalTextPosition(JLabel.CENTER);//pone el texto a la izquierda, centro o derecha
		lable.setVerticalTextPosition(JLabel.TOP);//pone el texto arriba abajo o en medio
		
		lable.setForeground(new Color(200,32,120));//Cambia color del texto
		lable.setFont(new Font("MV Boli",Font.BOLD,30));//tipo de tipografia y tama?o
		
		lable.setIconTextGap(20);//Margen de texto e imagen
		
		lable.setBackground(Color.black);
		lable.setOpaque(true);
		lable.setBorder(border);
		
		lable.setVerticalAlignment(JLabel.CENTER);// eje vertical del texto + la imagen
		lable.setHorizontalAlignment(JLabel.CENTER);// eje horizontal del texto + la imagen
					 //  x/y dimensiones
		//lable.setBounds(0,0,250,250);//posicion y tama?o
		
		
		JFrame frame = new JFrame();
		//frame.setSize(500,500);//define el alto y el ancho de la ventana
		//frame.setLayout(null);
		frame.setVisible(true);//hace visible a la ventana
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//cierra la aplicacion
		
		frame.add(lable);
		
		frame.pack();// se ajusta a el tama?o que haya dentro

	}

}
