package com.gocar.app.dtos.auth;

import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;


	
	@Builder
	public record InsuranceDTO (
    Long id,
    @NotBlank
    Long idCar,
    @NotBlank
    Long idUser,
    @NotNull
    Double iva,
    @NotNull
    Double Subtotal,
    @NotBlank
    Double total,
    @NotNull
    Long idReservationDates,
    @NotNull
    Insurance idInsurance
   
) {


public InsuranceDTO(Insurance insurance){
	  
     this(  insurance.getId(),
            insurance.getname(),
            insurance.getprice()
       
       	
           
    );
}


