package com.aladdin.users;

import org.springframework.data.jpa.repository.JpaRepository;
import com.aladdin.users.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByUsername(String username);
}
