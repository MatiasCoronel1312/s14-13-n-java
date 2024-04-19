package com.gocar.app.services;

import com.gocar.app.models.User;
import com.gocar.app.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

public interface UserService {


    public User findById(Long id);


    User findByEmail();
}
