package com.gocar.app.services;

import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import org.hibernate.service.spi.ServiceException;

import com.gocar.app.dtos.reservation.ReservationDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ReservationService {
	

    Page<ReservationResponseDTO> findAll(Pageable pageable) throws ServiceException;

    ReservationResponseDTO findById(Long id);
	   
	ReservationResponseDTO save(ReservationDTO reservationDTO);
	ReservationResponseDTO update(Long id, ReservationDTO reservationDTO);
	    boolean delete(Long id);

}
