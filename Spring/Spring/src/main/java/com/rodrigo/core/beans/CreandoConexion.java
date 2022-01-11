package com.rodrigo.core.beans;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Component;

import com.rodrigo.core.model.Conexion;
import com.rodrigo.core.model.Usuario;


@Component
public class CreandoConexion {
	
	@Bean(name ="beanUsuario")
	public Usuario getusuario() {
		return new Usuario();
	}
	
	
	@Bean(name ="beanConexion")
	public Conexion getConexion() {
		Conexion conexion = new Conexion();
		conexion.setDb("mysql");
		conexion.setUrl("localhost");
		return conexion;
	}
	
	@Bean
	public DataSource getDataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/blog?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false");
		dataSource.setUsername("rodrigo");
		dataSource.setPassword("root1234");
		
		return dataSource;
	}
	
}
