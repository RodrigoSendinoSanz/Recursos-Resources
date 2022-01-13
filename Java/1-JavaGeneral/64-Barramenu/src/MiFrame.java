import java.awt.FlowLayout;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;

//import javax.swing.ImageIcon;

import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;


public class MiFrame extends JFrame implements ActionListener{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	JMenuBar menu;
	
	JMenu fileMenu;
	JMenu editMenu;
	JMenu helpMenu;
	
	JMenuItem loadItem;
	JMenuItem saveItem;
	JMenuItem exitItem;
	

	//ImageIcon saveIcon;

	
	MiFrame(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(500,500);
		this.setLayout(new FlowLayout());
		

		//saveIcon = new ImageIcon("save.png");

		
		menu = new JMenuBar();
		
		fileMenu = new JMenu("Archivo");
		editMenu = new JMenu("Editar");
		helpMenu = new JMenu("Ayuda");
		
		loadItem = new JMenuItem("Cargar");
		saveItem = new JMenuItem("Guardar");
		exitItem = new JMenuItem("Salir");
		
		fileMenu.add(loadItem);
		fileMenu.add(saveItem);
		fileMenu.add(exitItem);
	
		loadItem.addActionListener(this);
		saveItem.addActionListener(this);
		exitItem.addActionListener(this);
		

		//saveItem.setIcon(saveIcon);

		
		//estos funcionan utilizando el alt + la letra
		fileMenu.setMnemonic(KeyEvent.VK_F);
		editMenu.setMnemonic(KeyEvent.VK_S);
		helpMenu.setMnemonic(KeyEvent.VK_H);
		
		//Con funcionan haciendo click en archivo
		loadItem.setMnemonic(KeyEvent.VK_L);
		saveItem.setMnemonic(KeyEvent.VK_S);
		exitItem.setMnemonic(KeyEvent.VK_E);


		
		menu.add(fileMenu);
		menu.add(editMenu);
		menu.add(helpMenu);
		
		this.setJMenuBar(menu);
		this.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource()==loadItem) {
			System.out.println("Cargando archivo");
		}else if (e.getSource()==saveItem) {
			System.out.println("Guardando el archivo");
		}else if(e.getSource()==exitItem){
			System.exit(0);
		}

	}

}
