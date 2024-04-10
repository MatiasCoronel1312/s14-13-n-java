package com.gocar.app.services.impl;

import com.gocar.app.dtos.vehicle.VehicleRequestDTO;
import com.gocar.app.dtos.vehicle.VehicleResponseDTO;
import com.gocar.app.enums.Category;
import com.gocar.app.models.Feature;
import com.gocar.app.models.Vehicle;
import com.gocar.app.repositories.FeatureRepository;
import com.gocar.app.repositories.VehicleRepository;
import com.gocar.app.services.VehicleService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Stream;

@Service
@Transactional
@RequiredArgsConstructor
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;
    private final FeatureRepository featureRepository;

    @Override
    public List<VehicleResponseDTO> findAll() {
        List<VehicleResponseDTO> vehicleDTOList;
        try{
            List<Vehicle> vehiculeList = vehicleRepository.findAll();
            vehicleDTOList = vehiculeList.stream().map(v -> VehicleResponseDTO.builder() // v = vehicle
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
    public Page<VehicleResponseDTO> findAll(Pageable pageable) {
        try{
            return vehicleRepository.findAll(pageable).map(VehicleResponseDTO::new);
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching all vehicles", e);
        }
    }

    @Override
    public VehicleResponseDTO findById(Long id) {
        try{
            Vehicle vehicleEntity = vehicleRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("There is no vehicle with that id in the database"));
            return new VehicleResponseDTO(vehicleEntity);
        }catch (EntityNotFoundException e){
            throw e;
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching vehicle with id: " + id, e);
        }
    }

    @Override
    public List<VehicleResponseDTO> findByCategory(Category category) {
        List<VehicleResponseDTO> vehicleDTOList;
        try{
            List<Vehicle> vehicleListDataBase = vehicleRepository.findVehicleByCategory(category);
            vehicleDTOList = vehicleListDataBase.stream().map(v -> VehicleResponseDTO.builder() // v = vehicle
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
            return vehicleDTOList;
        }catch (Exception e){
            throw new ServiceException("Error occurred while fetching all vehicles",e);
        }
    }

    @Override
    public VehicleResponseDTO save(VehicleRequestDTO vehicleDTO) {
        List<Feature> featureList;
        try{
            Stream<String> featureNames = vehicleDTO.features().stream();
            Stream<Feature> featureStream = featureNames.map(fn -> {
                Feature feature = featureRepository.findByName(fn);
                if(feature == null){
                    feature = new Feature();
                    feature.setName(fn);
                    featureRepository.save(feature);
                }
                return feature;
            });
            featureList = featureStream.toList();

            Vehicle vehicleEntity = Vehicle.builder()
                    .brand(vehicleDTO.brand())
                    .model(vehicleDTO.model())
                    .modelYear(vehicleDTO.modelYear())
                    .engineSize(vehicleDTO.engineSize())
                    .passengers(vehicleDTO.passengers())
                    .image(vehicleDTO.image())
                    .price(vehicleDTO.price())
                    .stock(vehicleDTO.stock())
                    .features(featureList)
                    .category(vehicleDTO.category())
                    .deleted(Boolean.FALSE)
                    .build();
            Vehicle entitySaved = vehicleRepository.save(vehicleEntity);
            return new VehicleResponseDTO(entitySaved);
        }catch (Exception e){
            throw new ServiceException("Error occurred while saving vehicle", e);
        }
    }

    @Override
    public VehicleResponseDTO update(Long id, VehicleRequestDTO vehicleDTO) {

        try {
            List<Feature> featureList = vehicleDTO.features().stream().map(fn -> { //fn = feature name
                Feature feature = featureRepository.findByName(fn);
                if(feature == null){
                    throw new EntityNotFoundException("Feature doesn't exist");
                }
                return feature;
            }).toList();

            Vehicle vehicleDB = vehicleRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("There is no vehicle with that id in the database"));

            vehicleDB.setBrand(vehicleDTO.brand());
            vehicleDB.setModel(vehicleDTO.model());
            vehicleDB.setModelYear(vehicleDTO.modelYear());
            vehicleDB.setEngineSize(vehicleDTO.engineSize());
            vehicleDB.setImage(vehicleDTO.image());
            vehicleDB.setPrice(vehicleDTO.price());
            vehicleDB.setPassengers(vehicleDTO.passengers());
            vehicleDB.setStock(vehicleDTO.stock());
            vehicleDB.setFeatures(featureList);
            vehicleDB.setCategory(vehicleDTO.category());

            Vehicle vehicleUpdated = vehicleRepository.save(vehicleDB);

            return new VehicleResponseDTO(vehicleUpdated);

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

    @Override
    public Vehicle findVehicleById(Long id) {
        return vehicleRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("There is no vehicle with that id in the database"));
    }
}


