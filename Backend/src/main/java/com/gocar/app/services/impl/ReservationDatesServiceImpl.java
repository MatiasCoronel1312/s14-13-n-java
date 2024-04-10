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
    private final AgencyService agencyService;

    @Override
    public ReservationResponseDTO save(ReservationDTO reservationDTO) {
        String userEmail = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findByEmail(userEmail);
        Vehicle vehicle = vehicleService.findVehicleById(reservationDTO.vehicleId());
        Insurance insurance = insuranceService.findById(reservationDTO.insuranceId());
        try{
            Reservation reservationEntity = Reservation.builder()
                    .vehicle(vehicle)
                    .User(user)
                    .iva(reservationDTO.total() * 0.12)
                    .subtotal(reservationDTO.total() - (reservationDTO.total() * 0.12))
                    .total(reservationDTO.total())
                    .idReservationDates(reservationDTO.idReservationDates())
                    .Insurance(insurance)
                    .softDelete(Boolean.FALSE)
                    .build();
            Reservation entitySaved = reservationRepository.save(reservationEntity);
            return new ReservationResponseDTO(entitySaved);
        }catch (Exception e){
            throw new ServiceException("Error occurred while saving reservation", e);
        }
    }



    @Override
    public ReservationDatesResponseDto save(ReservationDatesRequestDto reservationDatesRequestDto) {
            Agency retirementPlace = agencyService.findById(reservationDatesRequestDto.retirementPlace());
            try {
                ReservationDates reservationDates = ReservationDates.builder()
                        .retirementPlace(retirementPlace)
                        .retirementDate(reservationDatesRequestDto.retirementDate())
                        .returnPlaceId(reservationDatesRequestDto.returnPlace())
                        .reservationId(reservationDatesRequestDto.reservation())
                        .returnDate(reservationDatesRequestDto.returnDate())
                        .build();

                    .retirementPlace(retirementPlace)
                    .retirementDate(reservationDatesRequestDto.retirementDate())
                    .returnPlaceId(reservationDatesRequestDto.returnPlace())
                    .reservationId(reservationDatesRequestDto.reservation())
                    .returnDate(reservationDatesRequestDto.returnDate())
                    .build();
            ReservationDates entitySaved = reservationDatesRepository.save(reservationDates);
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
