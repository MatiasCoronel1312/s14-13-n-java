package com.gocar.app.services;

import com.gocar.app.dtos.vehicle.VehicleRequestDTO;
import com.gocar.app.dtos.vehicle.VehicleResponseDTO;
import com.gocar.app.enums.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface VehicleService {

    List<VehicleResponseDTO> findAll();
    Page<VehicleResponseDTO> findAll(Pageable pageable);
    VehicleResponseDTO findById(Long id);
    List<VehicleResponseDTO> findByCategory(Category category);
    VehicleResponseDTO save(VehicleRequestDTO vehicleDTO);
    VehicleResponseDTO update(Long id, VehicleRequestDTO vehicleDTO);
    boolean delete(Long id);

}
