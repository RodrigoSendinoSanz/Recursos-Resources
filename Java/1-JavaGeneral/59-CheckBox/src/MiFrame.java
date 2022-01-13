import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;

public class MiFrame extends JFrame implements ActionListener{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	JButton boton;
	JCheckBox checkbox;
	ImageIcon x;
	ImageIcon tick;
	
	MiFrame(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLayout(new FlowLayout());
		
		x = new ImageIcon("x.jpg");
		tick = new ImageIcon("tick.jpg");
		
		boton = new JButton();
		
		boton.setText("Enviar");
		boton.addActionListener(this);
		
		
		
		checkbox = new JCheckBox();
		
		checkbox.setText("No soy un robot");
		checkbox.setFocusable(false);
		checkbox.setFont(new Font("Consolas",Font.PLAIN,35));
		checkbox.setIcon(x);
		checkbox.setSelectedIcon(tick);
		
		this.add(boton);
		this.add(checkbox);
		this.pack();
		this.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource()==boton) {
			System.out.println(checkbox.isSelected());
		}
		
	}

}
