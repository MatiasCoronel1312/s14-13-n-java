package com.gocar.app.services.impl;

import com.gocar.app.dtos.ReservationDates.ReservationDatesRequestDto;
import com.gocar.app.dtos.ReservationDates.ReservationDatesResponseDto;
import com.gocar.app.dtos.agency.AgencyRequestDto;
import com.gocar.app.dtos.agency.AgencyResponseDto;
import com.gocar.app.dtos.reservation.ReservationDTO;
import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import com.gocar.app.models.*;
import com.gocar.app.repositories.AgencyRepository;
import com.gocar.app.repositories.ReservationDatesRepository;
import com.gocar.app.services.AgencyService;
import com.gocar.app.services.ReservationDatesService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationDatesServiceImpl implements ReservationDatesService {

    private final ReservationDatesRepository reservationDatesRepository;
    private final AgencyServiceImpl agencyService;
    private final ReservationServiceImpl reservationService;




    @Override
    public ReservationDatesResponseDto save(ReservationDatesRequestDto reservationDatesRequestDto) {
        Agency agency = agencyService.findById2(reservationDatesRequestDto.agencyId());
        Reservation reservation = reservationService.findById2(reservationDatesRequestDto.reservationId());
        try {
                ReservationDates reservationDatesEntity = ReservationDates.builder()
                        .retirementPlace(agency)
                        .retirementDate(reservationDatesRequestDto.retirementDate())
                        .returnPlace(agency)
                        .reservation(reservation)
                        .returnDate(reservationDatesRequestDto.returnDate())
                    .build();
            ReservationDates entitySaved = reservationDatesRepository.save(reservationDatesEntity);
            return new ReservationDatesResponseDto(entitySaved);
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

    @Override
    public ReservationDatesResponseDto update(ReservationDatesRequestDto reservationDatesRequestDto) {
        ReservationDates reservationDates = reservationDatesRepository.findById(reservationDatesRequestDto.id())
                .orElseThrow(() -> new EntityNotFoundException("ReservationDates with id " + reservationDatesRequestDto.id() + " not found"));

        Agency agency = agencyService.findById2(reservationDatesRequestDto.agencyId());
        Reservation reservation = reservationService.findById2(reservationDatesRequestDto.reservationId());

        reservationDates.setRetirementPlace(agency);
        reservationDates.setRetirementDate(reservationDatesRequestDto.retirementDate());
        reservationDates.setReturnPlace(agency);
        reservationDates.setReservation(reservation);
        reservationDates.setReturnDate(reservationDatesRequestDto.returnDate());

        ReservationDates updatedReservationDates = reservationDatesRepository.save(reservationDates);
        return new ReservationDatesResponseDto(updatedReservationDates);
    }
}
