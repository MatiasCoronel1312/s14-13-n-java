package com.gocar.app.dtos.ReservationDates;

import com.gocar.app.models.Agency;
import com.gocar.app.models.ReservationDates;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record ReservationDatesResponseDto(

        Long id,
        Agency retirementPlace,

        LocalDateTime retirementDate,
        Agency returnPlace,

        LocalDateTime returnDate
) {
    public ReservationDatesResponseDto(ReservationDates entitySaved) {
        this(entitySaved.getId(),
                entitySaved.getRetirementPlace(),
                entitySaved.getRetirementDate(),
                entitySaved.getReturnPlace(),
                entitySaved.getReturnDate());
    }
}