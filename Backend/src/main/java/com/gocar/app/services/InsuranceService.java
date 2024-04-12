package com.gocar.app.services;


import com.gocar.app.models.Insurance;
import org.hibernate.service.spi.ServiceException;

import com.gocar.app.dtos.insurance.InsuranceDTO;
import com.gocar.app.dtos.reservation.ReservationDTO;

public interface InsuranceService {

   
    InsuranceDTO save(InsuranceDTO insuranceDTO);
    Insurance findById(Long id);


}
