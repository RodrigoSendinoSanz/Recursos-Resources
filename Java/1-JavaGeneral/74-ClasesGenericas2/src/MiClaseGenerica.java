	//tipos acotados
		// puedes crear los objetos de una clase gen�rica para tener datos
		//   de tipos derivados espec�ficos ex.N�mero	


							//T extends Number solo aceptaria numeros en el primer parametro
public class MiClaseGenerica <T ,T2>{

	T x;
	T2 y;
	
	MiClaseGenerica(T x,T2 y){
		this.x=x;
		this.y=y;
	}
	
	public T getValor() {
		return x;
	}
	public T2 getValor2() {
		return y;
	}
}
