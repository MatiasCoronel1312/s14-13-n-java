package com.gocar.app.services.impl;
import java.util.List;
import java.util.Optional;

import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import com.gocar.app.dtos.auth.InsuranceDTO;
import com.gocar.app.dtos.auth.ReservationDTO;
import com.gocar.app.models.Insurance;
import com.gocar.app.models.Reservation;
import com.gocar.app.repositories.InsuranceRepository;
import com.gocar.app.repositories.ReservationRepository;
import com.gocar.app.services.InsuranceService;
import com.gocar.app.services.ReservationService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor

public class InsuranceServiceImpl implements InsuranceService{
	private final InsuranceRepository insuranceRepository;
	

    @Override
    public List<InsuranceDTO> findAll() throws ServiceException {
        List<InsuranceDTO> InsuranceDTOList;
        try{	          List<Insurance> insuranceList = insuranceRepository.findAll();
            insuranceDTOList = insuranceList.stream().map(i -> InsuranceDTO.builder() // i = insurance	 
            	
            		
            		.id(i.getid())
                    .name(i.getname())
                    .price(i.getprice())
                    .build())
                    ).toList(); 
                   
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching all insurance", e);
        }
        return insuranceDTOList;
    
   	 
   	 
 
    }

    @Override
    public InsuranceDTO findById(Long id) {
        try{
            Insurance insuranceEntity = insuranceRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("There is no insurance with that id in the database"));
            return new InsuranceDTO(insuranceEntity);
        }catch (EntityNotFoundException e){
            throw e;
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching insurance with id: " + id, e);
        }
    }



    @Override
    public InsuranceDTO save(InsuranceDTO insuranceDTO) {
        try{
            Insurance insuranceEntity = Insurance.builder()
                    .id(insuranceDTO.id())
                    .name(insuranceDTO.name())
                    .price(insuranceDTO.price())
                                  
                    .deleted(Boolean.FALSE)
                    .build();
            Insurance entitySaved = insuranceRepository.save(insuranceEntity);
            return new InsuranceDTO(entitySaved);
        }catch (Exception e){
            throw new ServiceException("Error occurred while saving Insurance", e);
        }
    }

    @Override
    public InsuranceDTO update(Long id, InsuranceDTO insuranceDTO) {
        try {
            Insurance insuranceDataBase = insuranceRepository.findById(id).
                    orElseThrow(()-> new EntityNotFoundException("There is no insurance with that id in the database"));

            insuranceDataBase.setid(insuranceDTO.id());
            insuranceDataBase.setname(insuranceDTO.name());
            insuranceDataBase.setprice(insuranceDTO.name());
                    

            Insurance insuranceUpdated = insuranceRepository.save(insuranceDataBase);
            return new InsuranceDTO(insuranceUpdated);
        } catch (EntityNotFoundException e) {
            throw e;
        } catch (Exception e) {
            throw new ServiceException("Error occurred while updating professional", e);
        }
    }

    @Override
    public boolean delete(Long id) {
        Insurance insuranceDataBase = insuranceRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("There is no insurance with that id in the database"));
        insuranceDataBase.setDeleted(Boolean.TRUE);
        return Boolean.TRUE;
    }


	
	

}
