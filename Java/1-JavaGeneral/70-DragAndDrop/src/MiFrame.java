


import javax.swing.JFrame;
import javax.swing.JLabel;

 


public class MiFrame extends JFrame{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	JLabel label;


	
	DragPanel dragPanel = new DragPanel();
	

	MiFrame(){
		this.add(dragPanel);
		this.setTitle("Drag and drop");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(600,600);
		this.setVisible(true);
	}


	


}








