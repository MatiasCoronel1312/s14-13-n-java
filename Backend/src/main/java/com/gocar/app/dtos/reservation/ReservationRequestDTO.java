package com.gocar.app.dtos.reservation;

import com.gocar.app.models.Agency;
import com.gocar.app.models.Reservation;
import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;


public record ReservationRequestDTO(
      @NotBlank
      Long vehicleId,
      @NotNull
      Long  retirementAgencyId,
      @NotNull
      Long insuranceId,
      @NotNull
      @FutureOrPresent
      LocalDateTime retirementDate,
      @NotNull
      Long returnAgencyId,
      @NotNull
      @Future
      LocalDateTime returnDate
     
) {


  }


