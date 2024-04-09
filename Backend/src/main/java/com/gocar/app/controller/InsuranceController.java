package com.gocar.app.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gocar.app.dtos.insurance.InsuranceDTO;
import com.gocar.app.services.impl.InsuranceServiceImpl;

@RestController
@RequestMapping("api/insurance")
@RequiredArgsConstructor

public class InsuranceController {
	

    private final InsuranceServiceImpl insuranceService;

    @PostMapping(value = "save", consumes = "application/json", produces = "application/json")
    public ResponseEntity<InsuranceDTO> save (@RequestBody InsuranceDTO insuranceDTO){
        return ResponseEntity.status(HttpStatus.OK).body(insuranceService.save(insuranceDTO));
    }




}
