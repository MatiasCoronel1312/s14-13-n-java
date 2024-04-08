package com.gocar.app.services;
import java.util.List;
import java.util.Optional;

import org.hibernate.service.spi.ServiceException;

import com.gocar.app.dtos.auth.InsuranceDTO;
import com.gocar.app.dtos.auth.ReservationDTO;
import com.gocar.app.models.Reservation;

public interface InsuranceService {
	
	List<InsuranceDTO> findAll() throws ServiceException;
    InsuranceDTO findById(Long id);
   
    InsuranceDTO save(InsuranceDTO insuranceDTO);
    InsuranceDTO update(Long id, ReservationDTO reservationDTO);
    boolean delete(Long id);

}
