package in.co.vwits.sms.service;


import java.util.List;

import in.co.vwits.sms.model.User;

public interface UserService {
	List<User> find();
	List<User> findByNameandPassword(String name,String password);

}
