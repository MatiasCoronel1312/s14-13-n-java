package com.gocar.app.dtos.auth;

import com.gocar.app.utils.Identification;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RegisterRequestDto(
        @NotBlank
        String email,
        @NotBlank
        String password,
        @NotBlank
        String name,
        @NotBlank
        String lastName,
        @NotNull
        Identification identification,
        @NotBlank
        String identificationNumber,
        @NotBlank
        String country,
        @NotBlank
        String phoneNumber

) {

}
