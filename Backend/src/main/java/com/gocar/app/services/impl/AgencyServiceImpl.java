package com.gocar.app.services.impl;

import com.gocar.app.dtos.agency.AgencyRequestDto;
import com.gocar.app.dtos.agency.AgencyResponseDto;
import com.gocar.app.dtos.insurance.InsuranceDTO;
import com.gocar.app.models.Agency;
import com.gocar.app.models.Insurance;
import com.gocar.app.repositories.AgencyRepository;
import com.gocar.app.services.AgencyService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AgencyServiceImpl implements AgencyService {

        private final AgencyRepository agencyRepository;

    @Override
    public AgencyResponseDto save(AgencyRequestDto agencyRequestDto) {
        try{
            Agency agencyEntity = Agency.builder()
                    .name(agencyRequestDto.name())
                    .country(agencyRequestDto.country())
                    .address(agencyRequestDto.address())
                    .phone(agencyRequestDto.phone())
                    .build();
            Agency entitySaved = agencyRepository.save(agencyEntity);
            return new AgencyResponseDto(entitySaved);
        }catch (Exception e){
            throw new ServiceException("Error occurred while saving Agency", e);
        }
    }

    public AgencyResponseDto findById(Long id) {
        Agency agency = agencyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Agency with id " + id + " not found"));
        return new AgencyResponseDto(agency);
    }


    @Override
    public Agency findById2(Long id) {
        return agencyRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("There is no reservation with that id in the database"));
    }

    @Override
        public void deleteById(Long id) {
        agencyRepository.deleteById(id);
    }

    @Override
    public AgencyResponseDto update(AgencyRequestDto agencyRequestDto) {
        try{
            Agency agencyEntity = Agency.builder()
                    .name(agencyRequestDto.name())
                    .country(agencyRequestDto.country())
                    .address(agencyRequestDto.address())
                    .phone(agencyRequestDto.phone())
                    .build();
            Agency entitySaved = agencyRepository.save(agencyEntity);
            return new AgencyResponseDto(entitySaved);
        }catch (Exception e){
            throw new ServiceException("Agency with id " + agencyRequestDto.name() + " not found");
        }
    }

    @Override
    public List<AgencyResponseDto> findAll() {
        return agencyRepository.findAll()
                .stream()
                .map(AgencyResponseDto::new)
                .collect(Collectors
                        .toList());
    }

    @Override
    public List<AgencyResponseDto> search(String name) {
        return agencyRepository.findByNameContaining(name)
                .stream()
                .map(AgencyResponseDto::new)
                .collect(Collectors.toList());
    }



}
