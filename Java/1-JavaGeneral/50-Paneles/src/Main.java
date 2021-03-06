
import java.awt.Color;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Main {

	public static void main(String[] args) {
		// JPanel = es un componente de la GUI que contiene a otros componentes
		
		ImageIcon icono =new ImageIcon("logo.png");
		Image image = icono.getImage(); // transformamos la imagen
		Image newimg = image.getScaledInstance(120, 120,  java.awt.Image.SCALE_SMOOTH); //escala la imagen  
		icono = new ImageIcon(newimg);  // lo devolvemos al icono
		
		JLabel label = new JLabel();
		label.setText("Hola");
		label.setIcon(icono);
		label.setVerticalAlignment(JLabel.TOP);
		label.setHorizontalAlignment(JLabel.LEFT);
		label.setBounds(0, 0, 75, 75);
		
		JPanel panelRojo = new JPanel();
		panelRojo.setBackground(Color.red);
		panelRojo.setBounds(0, 0, 250, 250);
		//panelRojo.setLayout(null);
		
		JPanel panelBlue = new JPanel();
		panelBlue.setBackground(Color.blue);
		panelBlue.setBounds(250, 0, 250, 250);
		//panelBlue.setLayout(null);
		
		JPanel panelVerde= new JPanel();
		panelVerde.setBackground(Color.green);
		panelVerde.setBounds(0, 250, 500, 250);
		//panelVerde.setLayout(null);
		
		
		JFrame frame = new JFrame();
		frame.setSize(750,750);
		frame.setLayout(null);
		frame.setVisible(true);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		panelVerde.add(label);
		
		frame.add(panelRojo);
		frame.add(panelBlue);
		frame.add(panelVerde);

		frame.setIconImage(icono.getImage());

	}

}
