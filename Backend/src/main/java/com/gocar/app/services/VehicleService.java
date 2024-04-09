package com.gocar.app.services;

import com.gocar.app.dtos.vehicle.VehicleRequestDTO;
import com.gocar.app.dtos.vehicle.VehicleResponseDTO;
import com.gocar.app.enums.Category;
import com.gocar.app.models.Vehicle;
import org.hibernate.service.spi.ServiceException;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.util.List;

public interface VehicleService {

    List<VehicleResponseDTO> findAll() throws ServiceException;
    Page<VehicleResponseDTO> findAll(Pageable pageable);
    VehicleResponseDTO findById(Long id);
    List<VehicleResponseDTO> findByCategory(Category category);
    VehicleResponseDTO save(VehicleRequestDTO vehicleDTO);
    VehicleResponseDTO update(Long id, VehicleRequestDTO vehicleDTO);
    boolean delete(Long id);

    Vehicle findVehicleById(Long id);

}
