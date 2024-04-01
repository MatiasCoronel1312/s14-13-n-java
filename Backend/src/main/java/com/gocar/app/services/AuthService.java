package com.gocar.app.services;

import com.gocar.app.dtos.auth.AuthResponseDto;
import com.gocar.app.dtos.auth.LoginRequestDto;
import com.gocar.app.dtos.auth.RegisterRequestDto;
import com.gocar.app.exceptions.EmailOrPasswordIncorrectException;
import com.gocar.app.models.User;
import com.gocar.app.repositories.UserRepository;
import com.gocar.app.utils.Role;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public AuthResponseDto login(@Valid LoginRequestDto loginRequestDto) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequestDto.email(), loginRequestDto.password())
            );
        } catch (AuthenticationException e) {
            throw new EmailOrPasswordIncorrectException("incorrect email or password ");
        }
        UserDetails user = userRepository.findByEmail(loginRequestDto.email()).orElseThrow();
        String token = jwtService.getToken(user);
        return new AuthResponseDto(token);
    }

    public AuthResponseDto register(@Valid RegisterRequestDto registerRequestDto){
        User user = new User();
        user.setEmail(registerRequestDto.email());
        user.setPassword(passwordEncoder.encode(registerRequestDto.password()));
        user.setName(registerRequestDto.name());
        user.setLastName(registerRequestDto.lastName());
        user.setIdentification(registerRequestDto.identification());
        user.setIdentificationNumber(registerRequestDto.identificationNumber());
        user.setPhoneNumber(registerRequestDto.phoneNumber());
        user.setCountry(registerRequestDto.country());
        user.setRole(Role.USER);
        userRepository.save(user);
        String token = jwtService.getToken(user);
        return new AuthResponseDto(token);
    }
}
