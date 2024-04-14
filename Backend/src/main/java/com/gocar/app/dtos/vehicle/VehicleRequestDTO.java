package com.gocar.app.dtos.vehicle;

import com.gocar.app.enums.Category;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record VehicleRequestDTO(
        @NotBlank
        String brand,
        @NotBlank
        String model,
        @NotNull
        Integer modelYear,
        @NotNull
        Double engineSize,
        @NotNull
        Integer passengers,
        @NotBlank
        String image,
        @NotNull
        Double price,
        @NotNull
        Integer stock,
        @NotNull
        List<String> features,
        @NotNull
        Category category
) {
}
