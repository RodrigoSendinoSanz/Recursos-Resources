package com.rodrigo.core.services.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.rodrigo.core.model.Post;
import com.rodrigo.core.services.PostService;

@Service
public class PostServiceImpl implements PostService{
	
	private final Log log = LogFactory.getLog(getClass());

	@Override
	public List<Post> validation(List<Post> posts) throws NullPointerException {
		log.info("Servicio 1");
		for (Post post : posts) {
			if (post.getTitulo()==null) {
				throw new NullPointerException("No tiene titulo o el titulo esta a nulo");
			}
		}
		return posts;
	}

	@Override
	public void addClass(Class clazz) {
		System.out.println(clazz.getName());
	}
	
}
