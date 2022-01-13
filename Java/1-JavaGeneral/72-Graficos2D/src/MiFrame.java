

import javax.swing.JFrame;


 


public class MiFrame extends JFrame{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	


	MiPanel panel;
	

	MiFrame(){

		panel = new MiPanel();
		
		
		
		this.setTitle("2D Graficos");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		this.add(panel);
		this.pack();
		this.setLocationRelativeTo(null);
		this.setVisible(true);
	}


	


}








