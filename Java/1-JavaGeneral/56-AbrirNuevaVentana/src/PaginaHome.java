import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class PaginaHome implements ActionListener{
	
	JFrame frame = new JFrame();
	JButton boton = new JButton("Nueva ventana");
	
	
	PaginaHome(){
		
		boton.setBounds(100,160,200,40);
		boton.setFocusable(false);
		boton.addActionListener(this);
		
		frame.add(boton);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(420,420);
		frame.setLayout(null);
		frame.setVisible(true);
		
		
	}


	@Override
	public void actionPerformed(ActionEvent e) {
		
		if (e.getSource()==boton) {
			frame.dispose();//pasa que solo salga una ventana
			@SuppressWarnings("unused")
			NuevaVentana nuevaventana =new NuevaVentana();
		}
		
	}
}
