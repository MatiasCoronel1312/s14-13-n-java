package com.gocar.app.services;

import com.gocar.app.dtos.vehicle.VehicleDTO;
import com.gocar.app.enums.Category;
import org.hibernate.service.spi.ServiceException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface VehicleService {

    List<VehicleDTO> findAll() throws ServiceException;
    Page<VehicleDTO> findAll(Pageable pageable);
    VehicleDTO findById(Long id);
    List<VehicleDTO> findByCategory(Category category);
    VehicleDTO save(VehicleDTO vehicleDTO);
    VehicleDTO update(Long id, VehicleDTO vehicleDTO);
    boolean delete(Long id);

}
