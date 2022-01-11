package com.rodrigo.core.controllers;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.rodrigo.core.components.PostComponent;
import com.rodrigo.core.configuration.Paginas;
import com.rodrigo.core.model.Post;

@Controller
@RequestMapping("/home")
public class ControllerBasic {
	@Autowired
	private PostComponent _postComponent;
	
	@GetMapping(path = {"/posts","/"})
	public String saludar(Model model) {
		model.addAttribute("posts",this._postComponent.getPosts());
		return "index";
	}
	
	/*@GetMapping("/public")
	public ModelAndView post() {
		ModelAndView modelAndView = new ModelAndView(Paginas.HOME);
		modelAndView.addObject("posts",this.getPosts());
		return modelAndView;
	}*/
	

	// Intercambiar: @RequestParam(defaultValue = "1", name ="id",required=false)
	@GetMapping(path = {"/post"})
	public ModelAndView getPostIndividual(
			@RequestParam(defaultValue = "1", name ="id",required=false) int id
			) {
		ModelAndView modelAndView = new ModelAndView(Paginas.POST);
		
		List<Post> postFiltado = this._postComponent.getPosts().stream()
												.filter( (p) ->{
													return p.getId() == id;
												}).collect(Collectors.toList());
		
		modelAndView.addObject("post", postFiltado.get(0));
		return modelAndView;
	}
	/*@GetMapping(path = {"/post/{post}"})
	public ModelAndView getPostIndividualPath(
			@PathVariable(required=true,name ="post") int id
			) {
		ModelAndView modelAndView = new ModelAndView(Paginas.POST);
		
		List<Post> postFiltado = this.getPosts().stream()
												.filter( (p) ->{
													return p.getId() == id;
												}).collect(Collectors.toList());
		
		modelAndView.addObject("post", postFiltado.get(0));
		return modelAndView;
	}
	*/
	
	@GetMapping("/postNew")
	public ModelAndView getForm() {
		return new ModelAndView("form").addObject("post", new Post());
	}
	//@GetMapping
	@PostMapping("/addNewPost")
	public String addNewPost(Post post,Model model) {
		List<Post> posts = this._postComponent.getPosts();
		posts.add(post);
		model.addAttribute("posts", posts);
		return "index";
	}
	
}
