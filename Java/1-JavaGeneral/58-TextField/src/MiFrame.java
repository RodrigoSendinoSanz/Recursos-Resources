import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class MiFrame extends JFrame implements ActionListener{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	JButton boton ;
	JTextField campoTexto;
	
	MiFrame(){
		
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLayout(new FlowLayout());
		
		boton = new JButton("Enviar");
		boton.addActionListener(this);
		
		campoTexto = new JTextField();
		campoTexto.setPreferredSize(new Dimension(250,40));
		campoTexto.setFont(new Font("Consolas",Font.PLAIN,35));
		campoTexto.setForeground(Color.white);
		campoTexto.setBackground(Color.DARK_GRAY);
		campoTexto.setText("username");
		
		this.add(boton);
		this.add(campoTexto);
		this.pack();
		this.setVisible(true);
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource()==boton) {
			System.out.println("Bienvenido "+campoTexto.getText());
			boton.setEnabled(false);
			campoTexto.setEditable(false);//Lo hace NO editable
		}
		
	}

}
