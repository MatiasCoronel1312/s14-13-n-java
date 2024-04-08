package com.gocar.app.enums;

import lombok.Getter;

@Getter
public enum Category {

    SEDAN("SEDAN"),
    SEDAN_PREMIUM("SEDAN_PREMIUM"),
    HYBRID("HYBRID"),
    SUV("SUV"),
    SPORT("SPORT"),
    ECONOMIC("ECONOMIC"),
    MINIVAN("MINIVAN"),
    VAN("VAN"),
    TRUCK("TRUCK");

    private final String description;

    Category (String description){
        this.description=description;
    }

}
