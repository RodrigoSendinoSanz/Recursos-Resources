

import java.awt.Color;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;




public class MiFrame extends JFrame implements KeyListener{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	JLabel label;
	ImageIcon icono;

	MiFrame(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(500,500);
		this.setLayout(null);
		this.addKeyListener(this);
		
		icono =new ImageIcon("cohete.png");
		
		
		label = new JLabel();
		label.setBounds(0,0,100,100);
		label.setIcon(icono);
		//label.setBackground(Color.red);
		//label.setOpaque(true);
		this.getContentPane().setBackground(Color.black);
		this.add(label);
		this.setVisible(true);
	}

	@Override
	public void keyTyped(KeyEvent e) {
		//Se invoca cuando se escribe una tecla. Utiliza KeyChar, salida char
		switch (e.getKeyChar()) {
		case 'a': label.setLocation(label.getX()-10, label.getY());
			break;
		case 'w': label.setLocation(label.getX(), label.getY()-10);
			break;
		case 's': label.setLocation(label.getX(), label.getY()+10);
			break;
		case 'd': label.setLocation(label.getX()+10, label.getY());
			break;
		}
		
	}

	@Override
	public void keyPressed(KeyEvent e) {
		// Se invoca cuando se presiona una tecla física. Utiliza KeyCode, salida int
		switch (e.getKeyCode()) {
		case 37 : label.setLocation(label.getX()-10, label.getY());
			break;
		case 38 : label.setLocation(label.getX(), label.getY()-10);
			break;
		case 40 : label.setLocation(label.getX(), label.getY()+10);
			break;
		case 39 : label.setLocation(label.getX()+10, label.getY());
			break;
		}
	}

	@Override
	public void keyReleased(KeyEvent e) {
		// llamado cada vez que se suelta un botón
		System.out.println("Has dejado de pulsar: "+e.getKeyChar());
		System.out.println("Has dejado de codigo: "+e.getKeyCode());
	}


}
