package com.gocar.app.dtos.feature;

import com.gocar.app.models.Feature;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record FeatureDTO(
        @NotBlank
        String name
) {

    public FeatureDTO(@NotNull Feature feature){
        this(feature.getName());
    }

}
