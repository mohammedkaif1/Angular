package in.co.vwits.sms.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import in.co.vwits.sms.model.User;

import in.co.vwits.sms.repository.UserRepository;

import in.co.vwits.sms.service.UserService;
@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repo;
	public List<User>find(){
		return repo.findAll();
	}
	public List<User> findByNameandPassword(String name,String Password)
	{
		List<User> u1;
		u1= repo.findAll().stream()
				.filter(u -> u.getName().equals(name)&& u.getPassword().equals(Password))
				.collect(Collectors.toList());
		
		
		System.out.println(u1);		
		return u1;
	}
	

}
