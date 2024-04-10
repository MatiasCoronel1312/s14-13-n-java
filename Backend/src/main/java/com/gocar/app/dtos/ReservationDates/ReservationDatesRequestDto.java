package com.gocar.app.dtos.ReservationDates;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record ReservationDatesRequestDto(
        @NotNull
        Long id,
        @NotNull
        Long retirementPlaceId,
        @NotNull
        @FutureOrPresent
        LocalDate retirementDate,
        @NotNull
        Long returnPlace,
        @NotNull
        Long reservation,
        @NotNull
        @FutureOrPresent
        LocalDate returnDate
) {
}
