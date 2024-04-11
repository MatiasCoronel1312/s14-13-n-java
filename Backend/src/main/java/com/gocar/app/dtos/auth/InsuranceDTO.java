package com.gocar.app.dtos.auth;

import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;

import lombok.Builder;


	
	@Builder
	public record InsuranceDTO (


	
	
	
	


	  @NotNull
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
    Insurance idInsurance,
   
) {


public InsuranceDTO(Insurance insurance){
	  
     this(  insurance.getId(),
            insurance.getname(),
            insurance.getprice()
       
       	
           
    );
}


