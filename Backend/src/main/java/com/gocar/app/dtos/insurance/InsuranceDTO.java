package com.gocar.app.dtos.insurance;

import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;

import lombok.Builder;



	public record InsuranceDTO (Long id,String name, Double price) {
        public InsuranceDTO(Insurance insurance) {
            this(insurance.getId(),insurance.getName(), insurance.getPrice());
        }
    }





