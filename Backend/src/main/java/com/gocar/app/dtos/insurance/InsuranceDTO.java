package com.gocar.app.dtos.insurance;

import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;

import lombok.Builder;



	public record InsuranceDTO (String name, Double price) {
        public InsuranceDTO(Insurance entitySaved) {
            this(entitySaved.getName(), entitySaved.getPrice());
        }
    }





