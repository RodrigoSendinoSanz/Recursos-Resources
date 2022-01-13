import java.awt.FlowLayout;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import java.io.File;

import javax.swing.JButton;
import javax.swing.JFileChooser;

//import javax.swing.ImageIcon;

import javax.swing.JFrame;



public class MiFrame extends JFrame implements ActionListener{


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	JButton boton;

	
	MiFrame(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setLayout(new FlowLayout());
		
		boton = new JButton("Selecionar archivo");
		boton.addActionListener(this);
		
		
		this.add(boton);
		this.pack();
		this.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource()==boton) {
			JFileChooser filechooser = new JFileChooser();
			
			filechooser.setCurrentDirectory(new File("."));// empieza en la carpeta del proyecto (tambien se puede poner una ruta)
			
			//System.out.println(filechooser.showOpenDialog(null));//seleciona el archivo a abrir// 0 archivo selecionado //1 cancelado o cerrado
			//int respuesta = filechooser.showOpenDialog(null);
			int respuesta = filechooser.showSaveDialog(null);//Seleciona un archivo a guardar
			
			if (respuesta == JFileChooser.APPROVE_OPTION) {
				File file = new File(filechooser.getSelectedFile().getAbsolutePath());
				System.out.println(file);
			}
		}

	}

}
