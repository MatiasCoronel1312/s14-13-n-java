package com.gocar.app.dtos.agency;

import com.gocar.app.models.Agency;
import com.gocar.app.models.Insurance;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


public record AgencyResponseDto(
        @NotNull
        Long id,
        @NotBlank
        @Size(max = 100)
        String name,
        @NotBlank
        @Size(max = 200)
        String address
){
        public AgencyResponseDto(Agency entitySaved) {
                this(entitySaved.getId(), entitySaved.getName(), entitySaved.getAddress());
        }
}