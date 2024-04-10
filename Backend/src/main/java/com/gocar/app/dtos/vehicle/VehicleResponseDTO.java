package com.gocar.app.dtos.vehicle;

import com.gocar.app.enums.Category;
import com.gocar.app.models.Feature;
import com.gocar.app.models.Vehicle;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.util.List;

@Builder
public record VehicleResponseDTO(
        @NotNull
        Long id,
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


    public VehicleResponseDTO(Vehicle vehicle){
         this(  vehicle.getId(),
                vehicle.getBrand(),
                vehicle.getModel(),
                vehicle.getModelYear(),
                vehicle.getEngineSize(),
                vehicle.getPassengers(),
                vehicle.getImage(),
                vehicle.getPrice(),
                vehicle.getStock(),
                vehicle.getFeatures().stream().map(Feature::getName).toList(),
                vehicle.getCategory()
        );
    }


}
