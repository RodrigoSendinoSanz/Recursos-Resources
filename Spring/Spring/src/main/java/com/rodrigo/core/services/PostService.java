package com.rodrigo.core.services;

import java.util.List;

import com.rodrigo.core.model.Post;

public interface PostService {
	public List<Post> validation(List<Post> posts) throws NullPointerException;
	public void addClass(Class clazz);
}
