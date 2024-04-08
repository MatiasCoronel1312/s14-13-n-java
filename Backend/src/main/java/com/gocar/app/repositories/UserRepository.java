package com.gocar.app.repositories;

import com.gocar.app.models.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface UserRepository  {
     Optional<UserDetails> findByEmail(String email);
}
