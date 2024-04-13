package com.gocar.app.services;


import com.gocar.app.dtos.ReservationDates.ReservationDatesRequestDto;
import com.gocar.app.dtos.ReservationDates.ReservationDatesResponseDto;
import com.gocar.app.dtos.agency.AgencyResponseDto;
import com.gocar.app.models.Agency;
import com.gocar.app.models.ReservationDates;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface ReservationDatesService {
    ReservationDates save(Agency retirementAgency, Agency returnAgency, LocalDateTime retirementDate, LocalDateTime returnDate);
    ReservationDatesResponseDto findById(Long id);
    void deleteById(Long id);
//    ReservationDatesResponseDto update(Long id,ReservationDatesRequestDto reservationDatesRequestDto);

    List<ReservationDatesResponseDto> findAll();
    Long getTotalDays(ReservationDates reservationDates);

}