package com.gocar.app.controller;

import com.gocar.app.dtos.agency.AgencyRequestDto;
import com.gocar.app.dtos.agency.AgencyResponseDto;
import com.gocar.app.dtos.exception.ErrorResponseDto;
import com.gocar.app.models.Agency;
import com.gocar.app.services.AgencyService;
import lombok.RequiredArgsConstructor;

import org.hibernate.service.spi.ServiceException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/agencies")
public class AgencyController {

    private final AgencyService agencyService;


    @GetMapping
    public ResponseEntity<Iterable<AgencyResponseDto>> getAllAgencies() {
        try {
            Iterable<AgencyResponseDto> agencies = agencyService.findAll();
            return ResponseEntity.ok(agencies);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<AgencyResponseDto> getAgency(@PathVariable Long id) {
        try {
            AgencyResponseDto agencyResponseDto = agencyService.findById(id);
            return ResponseEntity.ok(agencyResponseDto);
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/search")
    public ResponseEntity<List<AgencyResponseDto>> searchAgency(@RequestParam String name) {
        return ResponseEntity.ok(agencyService.search(name));
    }
}