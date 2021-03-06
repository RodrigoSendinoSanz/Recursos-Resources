import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JPanel;

public class MiPanel extends JPanel{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Image imagen;
	
	MiPanel(){
		imagen = new ImageIcon("download.png").getImage();
		this.setPreferredSize(new Dimension(500,500));
	}
	
	public void paint(Graphics g) {
		
		Graphics2D g2d =(Graphics2D) g;
		
		g2d.setPaint(Color.blue);
		g2d.setStroke(new BasicStroke(5));
		
		g2d.drawImage(imagen, 0, 0, null);
		
		
		//g2d.drawLine(0, 0, 500, 500);linea//lo ultimo que se crea es lo que aparece por encima
		
		//g2d.setPaint(Color.pink);
		//g2d.drawRect(0, 0, 100, 200);
		//g2d.fillRect(0, 0, 100, 200);
		
		//g2d.setPaint(Color.orange);
		//g2d.drawOval(0, 0, 100, 100);
		//g2d.fillOval(0, 0, 100, 100);
		
		
		g2d.setPaint(Color.red);
		g2d.drawArc(0, 0, 100, 100, 0, 180);
		g2d.fillArc(0, 0, 100, 100, 0, 180);
		g2d.setPaint(Color.white);
		g2d.fillArc(0, 0, 100, 100, 180, 180);
		
		
		int[] xPoint = {150,250,350};
		int[] yPoint = {300,150,300};
		g2d.setPaint(Color.yellow);
		g2d.drawPolygon(xPoint, yPoint, 3);
		g2d.setPaint(Color.orange);
		g2d.fillPolygon(xPoint, yPoint, 3);
		
		
		g2d.setPaint(Color.magenta);
		g2d.setFont(new Font("Ink Free",Font.BOLD,50));
		g2d.drawString("Frase ejemplo", 50, 50);
		
	}
}
