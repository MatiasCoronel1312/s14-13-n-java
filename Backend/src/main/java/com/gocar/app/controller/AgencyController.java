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

@RestController
@RequiredArgsConstructor
@RequestMapping("/agencies")
public class AgencyController {

    private final AgencyService agencyService;

    @PostMapping
    public ResponseEntity<?> createAgency(@RequestBody AgencyRequestDto agencyRequestDto) {
        try {
            AgencyResponseDto agencyResponseDto = agencyService.save(agencyRequestDto);
            return ResponseEntity.ok(agencyResponseDto);
        } catch (ServiceException e) {
            return ResponseEntity.badRequest().body(new ErrorResponseDto("Error al crear la agencia"));
        }
    }

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

    @PutMapping
    public ResponseEntity<AgencyResponseDto> updateAgency(@RequestBody AgencyRequestDto agencyRequestDto) {
        try {
            AgencyResponseDto agencyResponseDto = agencyService.update(agencyRequestDto);
            return ResponseEntity.ok(agencyResponseDto);
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAgency(@PathVariable Long id) {
        try {
            agencyService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (ServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }
}