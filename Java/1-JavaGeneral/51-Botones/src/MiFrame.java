import java.awt.*;


import java.awt.event.*;
import javax.swing.*;

public class MiFrame extends JFrame implements ActionListener{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	JButton button;
	JLabel label;
	
	MiFrame(){
		
		ImageIcon icono = new ImageIcon("icono.png");
		ImageIcon icono2 = new ImageIcon("icono2.png");
		
		label = new JLabel();
		label.setIcon(icono2);
		label.setBounds(200, 100, 400, 400);
		label.setVisible(false);
		
		button = new JButton();
		button.setBounds(100, 100, 250, 100);
		button.addActionListener(this);
		button.setText("I'm a button!");
		
		button.setFocusable(false);
		button.setIcon(icono);
		button.setHorizontalTextPosition(JButton.CENTER);
		button.setVerticalTextPosition(JButton.BOTTOM);
		button.setFont(new Font("Comic Sans",Font.BOLD,25));
		button.setIconTextGap(-2);
		button.setForeground(Color.black);
		button.setBackground(Color.lightGray);
		button.setBorder(BorderFactory.createEtchedBorder());
		
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLayout(null);
		this.setSize(500,500);
		this.setVisible(true);
		this.add(button);
		this.add(label);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource()==button) {
			System.out.println("Hi");
			button.setEnabled(false);//Boton de un solo uso si se coloca esta sentencia
			label.setVisible(true);
		}	
	}
}