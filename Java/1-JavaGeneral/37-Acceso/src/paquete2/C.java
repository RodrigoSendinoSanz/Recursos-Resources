package paquete2;
import paquete1.*;

public class C {
	
	public String publicMensaje ="Mensaje publico";// este mensaje se mostrara en cualquier paquete del proyecyo A
	protected String protectedMensaje = "Mensaje protegido";// este mensaje se mostrará en diferentes clases y diferentes paquetes 
															//siempre que la clase  donde se llama sea una subclase  de la clase que contenga la variable protegida 
		   String defaultMensaje = "Esto es por default";// no se podra ver ya que solo se ve si comparten el mismo paquete (Asub Si  / A No) 
	private String privateMensaje = "Mensaje privado";// solo es visible para la clase que la contiene

}
