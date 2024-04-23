package com.gocar.app.controller;

import com.gocar.app.dtos.insurance.InsuranceDTO;
import com.gocar.app.services.impl.InsuranceServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/insurance")
@RequiredArgsConstructor
public class InsuranceController {
    private final InsuranceServiceImpl insuranceService;

    @GetMapping(value = "all", produces = "application/json")
    public ResponseEntity<List<InsuranceDTO>> getInsurance (){
        return ResponseEntity.status(HttpStatus.OK).body(insuranceService.getInsurances());
    }


}
