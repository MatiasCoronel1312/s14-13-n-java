package com.gocar.app.dtos.user;

import com.gocar.app.models.User;
import com.gocar.app.utils.Identification;

public record UserResponseDto(
        Long id,
        String name,
        String lastName,
        String email,
        Identification identification,
        String identificationNumber,
        String country,
        String phoneNumber) {

    public UserResponseDto(User user){
        this(user.getId(), user.getName(), user.getLastName(), user.getEmail(),
                user.getIdentification(), user.getIdentificationNumber(), user.getCountry(), user.getCountry());
    }
}
