package com.gocar.app.services;


import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import com.gocar.app.models.Reservation;
import org.hibernate.service.spi.ServiceException;

import com.gocar.app.dtos.reservation.ReservationRequestDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReservationService {
	

    Page<ReservationResponseDTO> findAll(Pageable pageable) throws ServiceException;

    ReservationResponseDTO findById(Long id);

	Reservation findById2(Long id);
	   
	ReservationResponseDTO save(ReservationRequestDTO reservationRequestDTO);
	ReservationResponseDTO update(Long id, ReservationRequestDTO reservationRequestDTO);

	    boolean delete(Long id);

}
