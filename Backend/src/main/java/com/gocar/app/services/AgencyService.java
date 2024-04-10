package com.gocar.app.services;



import com.gocar.app.dtos.agency.AgencyRequestDto;
import com.gocar.app.dtos.agency.AgencyResponseDto;
import com.gocar.app.models.Agency;

import java.util.List;

public interface AgencyService {
    AgencyResponseDto save(AgencyRequestDto agencyRequestDto);
    AgencyResponseDto findById(Long id);
    void deleteById(Long id);
    AgencyResponseDto update(AgencyRequestDto agencyRequestDto);
    List<AgencyResponseDto> findAll();
}
