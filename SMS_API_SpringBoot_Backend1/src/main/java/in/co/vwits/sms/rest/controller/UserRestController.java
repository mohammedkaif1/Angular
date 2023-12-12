package in.co.vwits.sms.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.co.vwits.sms.model.User;

import in.co.vwits.sms.service.UserService;

@RestController
@RequestMapping(value="/api/user")
public class UserRestController {
	@Autowired
	private UserService service;
	
	
	@GetMapping("/{name}/{password}")
	public List<User> findByRollno(@PathVariable("name") String name,@PathVariable("password") String password) {
		return this.service.findByNameandPassword(name,password);
	}

}
