package com.rodrigo.core.services.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.rodrigo.core.model.Post;
import com.rodrigo.core.services.PostService;


@Service("serviceDecorado")
@Scope("singleton")
public class PostServiceDecoradoImp implements PostService{
	private final Log log = LogFactory.getLog(getClass());
	
	@Autowired
	private PostServiceImpl postServiceImpl;
	
	@Autowired
	private PostServiceImplDos postServiceImplDos;
	
	
	@Override
	public List<Post> validation(List<Post> posts) throws NullPointerException {
		log.debug(posts);
		posts = postServiceImpl.validation(posts);
		posts = postServiceImplDos.validation(posts);
		
		for (Post post : posts) {
			if (post.getDescrpicion()==null) {
				throw new NullPointerException("La descripcion esta a nulo");
			}
			if (post.getFecha()==null) {
				throw new NullPointerException("La fecha esta a nulo");
			}
		}
		
		return posts;
	}


	@Override
	public void addClass(Class clazz) {
		System.out.println(clazz.getName());
	}
	

}
