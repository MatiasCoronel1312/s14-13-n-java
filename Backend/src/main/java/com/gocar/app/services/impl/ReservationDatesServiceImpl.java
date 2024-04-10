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
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationDatesServiceImpl implements ReservationDatesService {

    private final ReservationDatesRepository reservationDatesRepository;
    private final AgencyServiceImpl agencyService;




    @Override
    public ReservationDatesResponseDto save(ReservationDatesRequestDto reservationDatesRequestDto) {
            AgencyResponseDto retirementPlace = agencyService.findById(reservationDatesRequestDto.retirementPlaceId());
        try {
                ReservationDates reservationDatesEntity = ReservationDates.builder()
                        .retirementDate(reservationDatesRequestDto.retirementDate())
                        .returnDate(reservationDatesRequestDto.returnDate())
                        .retirementPlace(retirementPlace)
                        .returnPlaceId(reservationDatesRequestDto.returnPlace())
                        .reservationId(reservationDatesRequestDto.reservation())


                    .build();
            ReservationDates entitySaved = reservationDatesRepository.save(reservationDatesEntity);
            return new ReservationDatesResponseDto(entitySaved);
        } catch (Exception e) {
            throw new ServiceException("Error occurred while saving ReservationDates", e);
        }
    }


    @Override
    public ReservationDatesResponseDto findById(Long id) {
        ReservationDates reservationDates = reservationDatesRepository.findById(id).orElse(null);
        return reservationDates != null ? new ReservationDatesResponseDto(reservationDates) : null;
    }

    @Override
    public void deleteById(Long id) {
        reservationDatesRepository.deleteById(id);
    }

    @Override
    public ReservationDatesResponseDto update(ReservationDatesRequestDto reservationDatesRequestDto) {
        ReservationDates reservationDates = new ReservationDates(reservationDatesRequestDto);
        ReservationDates updatedReservationDates = reservationDatesRepository.save(reservationDates);
        return new ReservationDatesResponseDto(updatedReservationDates);
    }
}
