import java.awt.FlowLayout;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;

import javax.swing.JFrame;
import javax.swing.JRadioButton;

public class MiFrame extends JFrame implements ActionListener{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	JRadioButton pizzaboton;
	JRadioButton burgerboton;
	JRadioButton perritoboton;
	ImageIcon pizza;
	ImageIcon burger;
	ImageIcon perrito;
	
	ImageIcon pizzasel;
	ImageIcon burgersel;
	ImageIcon perritosel;
	
	MiFrame(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLayout(new FlowLayout());
		
		pizza = new ImageIcon("pizza.png");
		burger = new ImageIcon("burger.png");
		perrito = new ImageIcon("hotdog.png");
		
		pizzasel = new ImageIcon("pizzasel.png");
		burgersel = new ImageIcon("burgesel.png");
		perritosel = new ImageIcon("hotdogsel.png");

		pizzaboton = new JRadioButton("pizza");
		burgerboton = new JRadioButton("burger");
		perritoboton = new JRadioButton("perrito");
		pizzaboton.setFocusable(false);
		burgerboton.setFocusable(false);
		perritoboton.setFocusable(false);
		
		ButtonGroup grupo = new ButtonGroup();
		grupo.add(burgerboton);
		grupo.add(perritoboton);
		grupo.add(pizzaboton);
		
		pizzaboton.addActionListener(this);
		perritoboton.addActionListener(this);
		burgerboton.addActionListener(this);
		
		pizzaboton.setIcon(pizza);
		perritoboton.setIcon(perrito);
		burgerboton.setIcon(burger);
	
		pizzaboton.setSelectedIcon(pizzasel);
		perritoboton.setSelectedIcon(perritosel);
		burgerboton.setSelectedIcon(burgersel);

		
		this.add(pizzaboton);
		this.add(burgerboton);
		this.add(perritoboton);
		this.pack();
		this.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource()==pizzaboton) {
			System.out.println("Has pedido pizza!");
		}
		else if (e.getSource()==perritoboton) {
			System.out.println("Has pedido perrito!");
		}
		else if (e.getSource()==burgerboton) {
			System.out.println("Has pedido burger!");
		}
		
	}

}
