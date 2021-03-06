import java.awt.Graphics;
import java.awt.Point;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionAdapter;

import javax.swing.ImageIcon;
import javax.swing.JPanel;

public class DragPanel extends JPanel{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	ImageIcon sonrisa = new ImageIcon("smile.png");
	final int WIDTH = sonrisa.getIconWidth();
	final int HEIGHT = sonrisa.getIconHeight();
	Point esquinaImagen;
	Point prePt;
	
	DragPanel(){
		esquinaImagen = new Point(0,0);
		ClickListener clickListener = new ClickListener();
		DragListener dragListener = new DragListener();
		
		this.addMouseListener(clickListener);
		this.addMouseMotionListener(dragListener);
	}
	
	public void paintComponent(Graphics g) {
		super.paintComponent(g);
		sonrisa.paintIcon(this, g, (int) esquinaImagen.getX(), (int) esquinaImagen.getY());
	}
	
	private class ClickListener extends MouseAdapter{
		public void mousePressed(MouseEvent e) {
			prePt =e.getPoint();
		}
	}
	
	private class DragListener extends MouseMotionAdapter{
		public void mouseDragged(MouseEvent e) {
			Point ptActual = e.getPoint();
			esquinaImagen.translate(
					(int) (ptActual.getX() - prePt.getX())
					,
					(int) (ptActual.getY() - prePt.getY())
					);
			prePt = ptActual;
			repaint();
		}
	}

}
