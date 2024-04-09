package com.gocar.app.services;

import com.gocar.app.dtos.vehicle.VehicleDTO;
import com.gocar.app.enums.Category;

import com.gocar.app.models.Vehicle;

import org.hibernate.service.spi.ServiceException;

import java.util.List;

public interface VehicleService {

    List<VehicleDTO> findAll() throws ServiceException;
    VehicleDTO findById(Long id);
    List<VehicleDTO> findByCategory(Category category);
    VehicleDTO save(VehicleDTO vehicleDTO);
    VehicleDTO update(Long id, VehicleDTO vehicleDTO);
    boolean delete(Long id);


    Vehicle findVehicleById(Long id);


}
