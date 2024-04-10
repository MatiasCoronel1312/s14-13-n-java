package com.gocar.app.services.impl;
import java.util.List;



import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;


import com.gocar.app.dtos.insurance.InsuranceDTO;
import com.gocar.app.dtos.reservation.ReservationDTO;
import com.gocar.app.models.Insurance;
import com.gocar.app.repositories.InsuranceRepository;
import com.gocar.app.services.InsuranceService;


import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor

public class InsuranceServiceImpl implements InsuranceService{
	private final InsuranceRepository insuranceRepository;



    @Override
    public InsuranceDTO save(InsuranceDTO insuranceDTO) {
        try{
            Insurance insuranceEntity = Insurance.builder()

                    .name(insuranceDTO.name())
                    .price(insuranceDTO.price())

                    .build();
            Insurance entitySaved = insuranceRepository.save(insuranceEntity);
            return new InsuranceDTO(entitySaved);
        }catch (Exception e){
            throw new ServiceException("Error occurred while saving Insurance", e);
        }
    }

    @Override

    public Insurance findById(Long id) {
        return insuranceRepository.findById(id).orElseThrow();
    }



}
