package com.aladdin.users;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.aladdin.users.entities.User;

@SpringBootTest
class UsersMsApplicationTests {

	@Autowired
	UserRepository userRep;

	@Test
	void contextLoads() {
	}

	@Test
	void testUsername() {
		User u = userRep.findByUsername("admin");
		System.out.println(u);
	}
}
