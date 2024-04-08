package com.gocar.app.services;
import java.util.List;
import java.util.Optional;

import org.hibernate.service.spi.ServiceException;

import com.gocar.app.dtos.auth.ReservationDTO;
import com.gocar.app.models.Reservation;

public interface ReservationService {
	
	 List<ReservationDTO> findAll() throws ServiceException;
	    ReservationDTO findById(Long id);
	   
	    ReservationDTO save(ReservationDTO reservationDTO);
	    ReservationDTO update(Long id, ReservationDTO reservationDTO);
	    boolean delete(Long id);

}
