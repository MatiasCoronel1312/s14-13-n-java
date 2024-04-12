package com.gocar.app.dtos.agency;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


public record AgencyRequestDto(
        @NotBlank
        @Size(max = 100)
        String name,
        @NotBlank
        @Size(max = 200)
        String country,
        @NotBlank
        @Size(max = 200)
        String address,
        @NotBlank
        String phone
) {
}