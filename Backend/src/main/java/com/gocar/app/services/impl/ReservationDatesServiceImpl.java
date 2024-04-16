package com.gocar.app.services.impl;

import com.gocar.app.dtos.ReservationDates.ReservationDatesResponseDto;
import com.gocar.app.models.*;
import com.gocar.app.repositories.ReservationDatesRepository;
import com.gocar.app.services.ReservationDatesService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReservationDatesServiceImpl implements ReservationDatesService {

    private final ReservationDatesRepository reservationDatesRepository;

    @Override
    public ReservationDates save(Agency retirementAgency, Agency returnAgency, LocalDateTime retirementDate, LocalDateTime returnDate) {
        try {
                ReservationDates reservationDatesEntity = ReservationDates.builder()
                        .retirementPlace(retirementAgency)
                        .retirementDate(retirementDate)
                        .returnPlace(returnAgency)
                        .returnDate(returnDate)
                    .build();

            return reservationDatesRepository.save(reservationDatesEntity);
        } catch (Exception e) {
            throw new ServiceException("Error occurred while saving ReservationDates", e);
        }
    }


    @Override
    public ReservationDatesResponseDto findById(Long id) {
        ReservationDates reservationDates = reservationDatesRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("ReservationDates with id " + id + " not found"));
        return new ReservationDatesResponseDto(reservationDates);
    }

    @Override
    public void deleteById(Long id) {
        reservationDatesRepository.deleteById(id);
    }

//    @Override
//    public ReservationDatesResponseDto update(Long id, ReservationDatesRequestDto reservationDatesRequestDto) {
//        ReservationDates reservationDates = reservationDatesRepository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("ReservationDates with id " + id + " not found"));
//
//        Agency agency = agencyService.findById2(reservationDatesRequestDto.agencyId());
//        Reservation reservation = reservationService.findById2(reservationDatesRequestDto.reservationId());
//
//        reservationDates.setRetirementPlace(agency);
//        reservationDates.setRetirementDate(reservationDatesRequestDto.retirementDate());
//        reservationDates.setReturnPlace(agency);
//        reservationDates.setReservation(reservation);
//        reservationDates.setReturnDate(reservationDatesRequestDto.returnDate());
//
//        ReservationDates updatedReservationDates = reservationDatesRepository.save(reservationDates);
//        return new ReservationDatesResponseDto(updatedReservationDates);
//    }

    @Override
    public List<ReservationDatesResponseDto> findAll() {
        return reservationDatesRepository.findAll()
                .stream()
                .map(ReservationDatesResponseDto::new)
                .toList();
    }

    @Override
    public Long getTotalDays(ReservationDates reservationDates) {
        return ChronoUnit.DAYS.between(reservationDates.getRetirementDate(), reservationDates.getReturnDate());
    }
}
