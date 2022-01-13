

import java.awt.Color;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.JFrame;
import javax.swing.JLabel;




public class MiFrame extends JFrame implements MouseListener{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	JLabel label;
	

	MiFrame(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(500,500);
		this.setLayout(null);
		
		label = new JLabel();
		label.setBounds(0, 0, 100, 100);
		label.setBackground(Color.RED);
		label.setOpaque(true);
		label.addMouseListener(this);
		//this.addMouseListener(this);
		
		this.add(label);
		this.setVisible(true);
	}

	@Override
	public void mouseClicked(MouseEvent e) {
		// Se invoca cuando se ha hecho clic en el bot�n del mouse (presionado y soltado) en un componente
		System.out.println("Has hecho click en el cuadrado");
		
	}

	@Override
	public void mousePressed(MouseEvent e) {
		// Se invoca cuando se presiona un bot�n del mouse sobre un componente
		System.out.println("Has presionado en el cuadrado");
		label.setBackground(Color.yellow);
	}

	@Override
	public void mouseReleased(MouseEvent e) {
		// Se invoca cuando se suelta un bot�n del mouse en un componente
		System.out.println("Has soltado el click en el cuadrado");
		label.setBackground(Color.green);
	}

	@Override
	public void mouseEntered(MouseEvent e) {
		// Se invoca cuando entra en un componente
		System.out.println("Has entrado en el cuadrado");
		label.setBackground(Color.blue);
	}

	@Override
	public void mouseExited(MouseEvent e) {
		// Se invoca cuando sale de un componente
		System.out.println("Has salido en el cuadrado");
		label.setBackground(Color.red);
	}

	


}

