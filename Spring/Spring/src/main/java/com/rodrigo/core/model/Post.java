package com.rodrigo.core.model;

import java.util.Date;

public class Post {
	private int id;
	private String descrpicion;
	private String urlImg = "http://localhost/img/post.jpg";
	private Date fecha= new Date();
	private String titulo;
	
	public Post(int id, String descrpicion, String urlImg, Date fecha, String titulo) {

		this.id = id;
		this.descrpicion = descrpicion;
		this.urlImg = urlImg;
		this.fecha = fecha;
		this.titulo = titulo;
	}
	
	
	
	public Post() {

	}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescrpicion() {
		return descrpicion;
	}
	public void setDescrpicion(String descrpicion) {
		this.descrpicion = descrpicion;
	}
	public String getUrlImg() {
		return urlImg;
	}
	public void setUrlImg(String urlImg) {
		this.urlImg = urlImg;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	

}
