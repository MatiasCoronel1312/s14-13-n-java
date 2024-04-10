package com.gocar.app.dtos.ReservationDates;

import com.gocar.app.models.Agency;
import com.gocar.app.models.ReservationDates;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record ReservationDatesResponseDto(
        @NotNull
        Long id,
        Agency retirementPlace,
        @NotNull
        LocalDate retirementDate,
        Agency returnPlace,
        @NotNull
        Long reservation,
        @NotNull
        LocalDate returnDate
) {
    public ReservationDatesResponseDto(ReservationDates entitySaved) {
        this(entitySaved.getId(),
                entitySaved.getRetirementPlace(),
                entitySaved.getRetirementDate(),
                entitySaved.getReturnPlace(),
                entitySaved.getReservation().getId(),
                entitySaved.getReturnDate());
    }
}