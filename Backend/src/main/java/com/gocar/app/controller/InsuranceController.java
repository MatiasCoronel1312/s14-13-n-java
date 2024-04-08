package com.gocar.app.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gocar.app.dtos.auth.InsuranceDTO;
import com.gocar.app.dtos.auth.ReservationDTO;
import com.gocar.app.services.impl.InsuranceServiceImpl;
import com.gocar.app.services.impl.ReservationServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/insurance")
@RequiredArgsConstructor

public class InsuranceController {
	

    private final InsuranceServiceImpl insuranceService;

    @GetMapping(value = "all", produces = "application/json")
    public ResponseEntity<List<InsuranceDTO>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(insuranceService.findAll());
    }

    

    @GetMapping(value = "{id}", produces = "application/json")
    public ResponseEntity<InsuranceDTO> getOne(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(insuranceService.findById(id));
    }

    @PostMapping(value = "save", consumes = "application/json", produces = "application/json")
    public ResponseEntity<InsuranceDTO> save (@RequestBody InsuranceDTO InsuranceDTO){
        return ResponseEntity.status(HttpStatus.OK).body(insuranceService.save(insuranceDTO));
    }

    @PutMapping(value = "{id}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<InsuranceDTO> update(@PathVariable Long id, @RequestBody InsuranceDTO insuranceDTO){
        return ResponseEntity.status(HttpStatus.OK).body(insuranceService.update(id,insuranceDTO));
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<?> delete (@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(insuranceService.delete(id));
    }


}
