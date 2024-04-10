package com.gocar.app.services;


import com.gocar.app.dtos.ReservationDates.ReservationDatesRequestDto;
import com.gocar.app.dtos.ReservationDates.ReservationDatesResponseDto;
import com.gocar.app.models.ReservationDates;

public interface ReservationDatesService {
    ReservationDatesResponseDto save(ReservationDatesRequestDto reservationDatesRequestDto);
    ReservationDatesResponseDto findById(Long id);
    void deleteById(Long id);
    ReservationDatesResponseDto update(ReservationDatesRequestDto reservationDatesRequestDto);

}