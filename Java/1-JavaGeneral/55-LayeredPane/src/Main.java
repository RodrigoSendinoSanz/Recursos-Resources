import java.awt.Color;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JLayeredPane;

public class Main {

	public static void main(String[] args) {
		//JLayered = es un contenedor que prove de 3 dimensiones para posicionar los componentes

		JLabel label1 = new JLabel();
		label1.setOpaque(true);
		label1.setBackground(Color.red);
		label1.setBounds(50,50,200,200);
		
		JLabel label2 = new JLabel();
		label2.setOpaque(true);
		label2.setBackground(Color.green);
		label2.setBounds(100,100,200,200);
		
		JLabel label3 = new JLabel();
		label3.setOpaque(true);
		label3.setBackground(Color.blue);
		label3.setBounds(150,150,200,200);
		
		
		JLayeredPane layeredPanel = new JLayeredPane();
		layeredPanel.setBounds(0,0,500,500);
		
		layeredPanel.add(label1, Integer.valueOf(1));//JLayeredPane.DEFAULT_LAYER
		layeredPanel.add(label2, Integer.valueOf(2));
		layeredPanel.add(label3, Integer.valueOf(3));
		
		JFrame frame = new JFrame();
		frame.add(layeredPanel);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(500, 500);    
		frame.setLayout(null);
		frame.setVisible(true);
		
		
		
		
	}

}
