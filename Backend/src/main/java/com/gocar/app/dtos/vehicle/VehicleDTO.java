package com.gocar.app.dtos.vehicle;

import com.gocar.app.enums.Category;
import com.gocar.app.enums.Feature;
import com.gocar.app.models.Vehicle;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.util.List;

@Builder
public record VehicleDTO(
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
        List<Feature> features,
        @NotNull
        Category category
) {


    public VehicleDTO(Vehicle vehicle){
        this(
                vehicle.getBrand(),
                vehicle.getModel(),
                vehicle.getModelYear(),
                vehicle.getEngineSize(),
                vehicle.getPassengers(),
                vehicle.getImage(),
                vehicle.getPrice(),
                vehicle.getStock(),
                vehicle.getFeatures(),
                vehicle.getCategory()
        );
    }


}
