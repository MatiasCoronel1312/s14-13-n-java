package com.gocar.app.services.impl;

import com.gocar.app.dtos.vehicle.VehicleDTO;
import com.gocar.app.enums.Category;
import com.gocar.app.models.Feature;
import com.gocar.app.models.Vehicle;
import com.gocar.app.repositories.VehicleRepository;
import com.gocar.app.services.VehicleService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;

    @Override
    public List<VehicleDTO> findAll() throws ServiceException {
        List<VehicleDTO> vehicleDTOList;
        try{
            List<Vehicle> vehiculeList = vehicleRepository.findAll();
            vehicleDTOList = vehiculeList.stream().map(v -> VehicleDTO.builder() // v = vehicle
                    .id(v.getId())
                    .brand(v.getBrand())
                    .model(v.getModel())
                    .modelYear(v.getModelYear())
                    .engineSize(v.getEngineSize())
                    .passengers(v.getPassengers())
                    .image(v.getImage())
                    .price(v.getPrice())
                    .stock(v.getStock())
                    .features(v.getFeatures().stream().map(Feature::getName).toList())
                    .category(v.getCategory())
                    .build()
            ).toList();
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching all vehicles", e);
        }
        return vehicleDTOList;
    }

    @Override
    public VehicleDTO findById(Long id) {
        try{
            Vehicle vehicleEntity = vehicleRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("There is no vehicle with that id in the database"));
            return new VehicleDTO(vehicleEntity);
        }catch (EntityNotFoundException e){
            throw e;
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching vehicle with id: " + id, e);
        }
    }

    @Override
    public List<VehicleDTO> findByCategory(Category category) {
        List<VehicleDTO> vehicleDTOList;
        try{
            List<Vehicle> vehicleListDataBase = vehicleRepository.findVehicleByCategory(category);
            vehicleDTOList = vehicleListDataBase.stream().map(v -> VehicleDTO.builder() // v = vehicle
                    .brand(v.getBrand())
                    .model(v.getModel())
                    .modelYear(v.getModelYear())
                    .engineSize(v.getEngineSize())
                    .passengers(v.getPassengers())
                    .image(v.getImage())
                    .price(v.getPrice())
                    .stock(v.getStock())
                    .features(v.getFeatures().stream().map(Feature::getName).toList())
                    .category(v.getCategory())
                    .build()
            ).toList();
            return vehicleDTOList;
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching all vehicles",e);
        }
    }

    @Override
    public VehicleDTO save(VehicleDTO vehicleDTO) {
        try{
            Vehicle vehicleEntity = Vehicle.builder()
                    .brand(vehicleDTO.brand())
                    .model(vehicleDTO.model())
                    .modelYear(vehicleDTO.modelYear())
                    .engineSize(vehicleDTO.engineSize())
                    .passengers(vehicleDTO.passengers())
                    .image(vehicleDTO.image())
                    .price(vehicleDTO.price())
                    .stock(vehicleDTO.stock())
//                    .features(vehicleDTO.features())
                    .category(vehicleDTO.category())
                    .deleted(Boolean.FALSE)
                    .build();
            Vehicle entitySaved = vehicleRepository.save(vehicleEntity);
            return new VehicleDTO(entitySaved);
        }catch (Exception e){
            throw new ServiceException("Error occurred while saving vehicle", e);
        }
    }

    @Override
    public VehicleDTO update(Long id, VehicleDTO vehicleDTO) {
        try {
            Vehicle vehicleDataBase = vehicleRepository.findById(id).
                    orElseThrow(()-> new EntityNotFoundException("There is no vehicle with that id in the database"));

            vehicleDataBase.setBrand(vehicleDTO.brand());
            vehicleDataBase.setModel(vehicleDTO.model());
            vehicleDataBase.setModelYear(vehicleDTO.modelYear());
            vehicleDataBase.setEngineSize(vehicleDTO.engineSize());
            vehicleDataBase.setPassengers(vehicleDTO.passengers());
            vehicleDataBase.setImage(vehicleDTO.image());
            vehicleDataBase.setPrice(vehicleDTO.price());
            vehicleDataBase.setStock(vehicleDTO.stock());
//            vehicleDataBase.setFeatures(vehicleDTO.features());
            vehicleDataBase.setCategory(vehicleDTO.category());
            vehicleDataBase.setDeleted(Boolean.FALSE);

            Vehicle vehicleUpdated = vehicleRepository.save(vehicleDataBase);
            return new VehicleDTO(vehicleUpdated);
        } catch (EntityNotFoundException e) {
            throw e;
        } catch (Exception e) {
            throw new ServiceException("Error occurred while updating professional", e);
        }
    }

    @Override
    public boolean delete(Long id) {
        Vehicle vehicleDataBase = vehicleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("There is no vehicle with that id in the database"));
        vehicleDataBase.setDeleted(Boolean.TRUE);
        return Boolean.TRUE;
    }
}
