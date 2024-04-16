package com.gocar.app.services;


import com.gocar.app.models.Insurance;

import com.gocar.app.dtos.insurance.InsuranceDTO;

public interface InsuranceService {

   
    InsuranceDTO save(InsuranceDTO insuranceDTO);
    Insurance findById(Long id);


}
