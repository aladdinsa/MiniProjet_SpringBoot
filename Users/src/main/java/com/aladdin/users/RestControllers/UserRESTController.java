package com.aladdin.users.RestControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aladdin.users.UserRepository;
import com.aladdin.users.entities.User;

@RestController
@CrossOrigin(origins = "*")
public class UserRESTController {
	@Autowired
	UserRepository userRep;

	@RequestMapping(value = "/login/{username}", method = RequestMethod.GET)
	public User getUserByUsername(@PathVariable("username") String username) {

		return userRep.findByUsername(username);
	}
}
