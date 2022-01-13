
import java.awt.FlowLayout;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;




public class MiFrame extends JFrame implements MouseListener{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	JLabel label;
	ImageIcon llora;
	ImageIcon feliz;
	ImageIcon beso;
	ImageIcon sonrisa;
	

	MiFrame(){
		
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(500,500);
		this.setLayout(new FlowLayout());
		
		label = new JLabel();
		label.addMouseListener(this);

		llora = new ImageIcon("cry.png");
		feliz = new ImageIcon("happy.png");
		beso = new ImageIcon("kiss.png");
		sonrisa = new ImageIcon("smile.png");
		
		label.setIcon(llora);
		
		this.setIconImage(feliz.getImage());
		this.add(label);
		this.pack();
		this.setLocationRelativeTo(null);//centra el componete
		this.setVisible(true);
	}

	@Override
	public void mouseClicked(MouseEvent e) {
		// Se invoca cuando se ha hecho clic en el botón del mouse (presionado y soltado) en un componente
		label.setIcon(sonrisa);
		
	}

	@Override
	public void mousePressed(MouseEvent e) {
		// Se invoca cuando se presiona un botón del mouse sobre un componente
		label.setIcon(beso);
	}

	@Override
	public void mouseReleased(MouseEvent e) {
		// Se invoca cuando se suelta un botón del mouse en un componente
		label.setIcon(sonrisa);
	}

	@Override
	public void mouseEntered(MouseEvent e) {
		// Se invoca cuando entra en un componente
		label.setIcon(sonrisa);
	}

	@Override
	public void mouseExited(MouseEvent e) {
		// Se invoca cuando sale de un componente
		label.setIcon(llora);
	}

	


}








