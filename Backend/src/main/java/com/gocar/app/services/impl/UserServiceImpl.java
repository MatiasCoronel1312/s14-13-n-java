package com.gocar.app.services.impl;

import com.gocar.app.models.User;
import com.gocar.app.repositories.UserRepository;
import com.gocar.app.services.UserService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public User findById(Long id) {
        if(userRepository.findById(id).isEmpty()){
            throw new EntityNotFoundException("User not found");
        }
        return userRepository.getReferenceById(id);
    }

    @Override
    public User findByEmail(String userEmail) {
        if(userRepository.findByEmail(userEmail).isEmpty()){
            throw new EntityNotFoundException("User not found");
        }
        return userRepository.findByEmail(userEmail).get();
    }

}
