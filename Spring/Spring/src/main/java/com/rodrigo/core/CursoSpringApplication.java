package com.rodrigo.core;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import com.rodrigo.core.components.PostComponent;
import com.rodrigo.core.model.Conexion;
import com.rodrigo.core.services.PostService;


@SpringBootApplication
public class CursoSpringApplication implements CommandLineRunner {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Value("${rodrigo.jdbc.import.ruta}")
	private String ruta;
	
	@Value("${rodrigo.jdbc.import}")
	private String importar;
	
	Log log = LogFactory.getLog(getClass());
	
	/*@Autowired
	@Qualifier("beanConexion")
	private Conexion conexion;
	 */
	/*
	@Autowired
	@Qualifier("com.rodrigo.core.components.PostComponent")
	private PostComponent postComponent;
	/*
	@Autowired
	@Qualifier("serviceDos")
	public PostService postService;
		// tambien puede arrencar con PostServiceImpl/PostService
	 */
	/*@Autowired
	@Qualifier("serviceDecorado")//serviceDecorado inyectaria los otros 2 mas validaciones
	*/
	//public PostService postService;
	//public PostService getPostService() {
		//return postService;
	//}
	/*
	@Autowired
	@Qualifier("serviceDecorado")
	public void setPostService(PostService postService) {
		this.postService = postService;
		this.postService.addClass(CursoSpringApplication.class);
	}
	*/
	

	public CursoSpringApplication() {

	}
	
	///@Autowired
	//public CursoSpringApplication(@Qualifier("serviceDecorado") PostService postService) {
		//this.postService = postService;
	//}

	
	public static void main(String[] args) {
		SpringApplication.run(CursoSpringApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//System.out.println(conexion.getDb());
		
		/*postComponent.getPosts().forEach(p -> {
			System.out.println(p.getDescrpicion());
		});*/
		
		/*Log log = LogFactory.getLog(getClass());
		
		try {
			
			postService.validation(postComponent.getPosts())
			.forEach((post)-> {
				log.info(post.getTitulo());
			});
			
		} catch ( NullPointerException e) {
			log.error(e);
		}
		*/
		
		//jdbcTemplate.execute("insert into permiso(Nombre) values ('Ejemplo')");
							//"src/main/resources/import.sql
		/*Path path = Paths.get(ruta);
		
		//Log log = LogFactory.getLog(getClass());
		
		try(BufferedReader bufferedReader = Files.newBufferedReader(path,Charset.forName("UTF-8"))){
			String line;
			while((line =bufferedReader.readLine())!= null) {
				jdbcTemplate.execute(line);
				//log.info(line);
			}
		}catch (IOException ex) {
			
		}*/
		
		if(importar.equalsIgnoreCase("true")) {
			Path path = Paths.get(ruta);
			
			
			
			try(BufferedReader bufferedReader = Files.newBufferedReader(path,Charset.forName("UTF-8"))){
				String line;
				while((line =bufferedReader.readLine())!= null) {
					jdbcTemplate.execute(line);
				}
			}catch (IOException ex) {
				
			}
			
		}
		
		log.info("Tenemos esta cantidad de permisos " + jdbcTemplate.queryForObject("SELECT count(*) FROM permiso;", Integer.class));
	}

}
