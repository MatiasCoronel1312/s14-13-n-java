package com.gocar.app.services;


import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import com.gocar.app.models.Reservation;
import com.gocar.app.models.ReservationDates;
import com.gocar.app.models.Vehicle;
import org.hibernate.service.spi.ServiceException;

import com.gocar.app.dtos.reservation.ReservationRequestDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ReservationService {
	

    Page<ReservationResponseDTO> findAll(Pageable pageable) throws ServiceException;

    ReservationResponseDTO findById(Long id);

	Reservation findById2(Long id);
	   
	ReservationResponseDTO save(ReservationRequestDTO reservationRequestDTO);
	ReservationResponseDTO update(Long id, ReservationRequestDTO reservationRequestDTO);

	    boolean delete(Long id);

    List<ReservationResponseDTO> findAllByLoggedInUserAndActive(boolean isActive);

	List<ReservationResponseDTO> findAllByLoggedInUser();

	 void reservationValidations(Vehicle vehicle, ReservationDates reservationDates);
}
