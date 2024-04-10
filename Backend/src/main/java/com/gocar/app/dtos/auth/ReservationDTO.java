package com.gocar.app.dtos.auth;

import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;

@Builder
public record ReservationDTO (


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


  public ReservationDTO(Reservation reservation){
	  
       this(  reservation.getId(),
              reservation.getidUser(),
              reservation.getidUser(),
              reservation.getiva(),
              reservation.getsubtotal(),
              reservation.gettotal(),
              reservation.getidReservationDates(),
              reservation.idInsurance()
         	
             
      );
  }

}
