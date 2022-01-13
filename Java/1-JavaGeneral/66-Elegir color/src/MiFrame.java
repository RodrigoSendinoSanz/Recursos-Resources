import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


import javax.swing.JButton;
import javax.swing.JColorChooser;



import javax.swing.JFrame;
import javax.swing.JLabel;



public class MiFrame extends JFrame implements ActionListener{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	JButton boton;
	JLabel label;
	
	MiFrame(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLayout(new FlowLayout());
		
		boton = new JButton("Selecionar un color");
		boton.addActionListener(this);
		
		label = new JLabel();
		label.setBackground(Color.white);
		label.setText("Texto de ejemplo");
		label.setFont(new Font("MV Boli",Font.PLAIN,100));
		label.setOpaque(true);
		
		
		this.add(boton);
		this.add(label);
		this.pack();
		this.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource()==boton) {
			@SuppressWarnings("unused")
			JColorChooser colorchooser = new JColorChooser();
			
			Color color = JColorChooser.showDialog(null, "Escoje un color", Color.black);
			
			//label.setForeground(color);//cambia el color de la fuente
			label.setBackground(color);//cambia el color del fondo
		}

	}

}
