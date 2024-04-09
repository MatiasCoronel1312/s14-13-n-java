package com.gocar.app.controller;

import com.gocar.app.dtos.vehicle.VehicleRequestDTO;
import com.gocar.app.dtos.vehicle.VehicleResponseDTO;
import com.gocar.app.enums.Category;
import com.gocar.app.services.impl.VehicleServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/vehicles")
@RequiredArgsConstructor
public class VehicleController {

    private final VehicleServiceImpl vehicleService;

    @GetMapping(value = "all", produces = "application/json")
    public ResponseEntity<List<VehicleResponseDTO>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(vehicleService.findAll());
    }

    @GetMapping(value = "all/{category}", produces = "application/json")
    public ResponseEntity<List<VehicleResponseDTO>> getAllByCategory(@PathVariable Category category){
        return ResponseEntity.status(HttpStatus.OK).body(vehicleService.findByCategory(category));
    }

    @GetMapping(value = "{id}", produces = "application/json")
    public ResponseEntity<VehicleResponseDTO> getOne(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(vehicleService.findById(id));
    }

    @PostMapping(value = "save", consumes = "application/json", produces = "application/json")
    public ResponseEntity<VehicleResponseDTO> save (@RequestBody VehicleRequestDTO vehicleDTO){
        return ResponseEntity.status(HttpStatus.OK).body(vehicleService.save(vehicleDTO));
    }

    @PutMapping(value = "{id}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<VehicleResponseDTO> update(@PathVariable Long id, @RequestBody VehicleRequestDTO vehicleDTO){
        return ResponseEntity.status(HttpStatus.OK).body(vehicleService.update(id,vehicleDTO));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<?> delete (@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(vehicleService.delete(id));
    }
}
