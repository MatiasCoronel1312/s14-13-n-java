package com.gocar.app.dtos.reservation;

import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;
import com.gocar.app.models.User;
import com.gocar.app.models.Vehicle;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;


public record ReservationDTO (

      @NotBlank
      Long vehicleId,
      @NotBlank
      Double total,
      @NotNull
      Long idReservationDates,
      @NotNull
      Long insuranceId
     
) {


  }


