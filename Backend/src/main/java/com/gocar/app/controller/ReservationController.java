package com.gocar.app.controller;

import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.gocar.app.dtos.reservation.ReservationRequestDTO;
import com.gocar.app.services.impl.ReservationServiceImpl;


@RestController
@RequestMapping("api/reservation")
@RequiredArgsConstructor
public class ReservationController {
	
	

	    private final ReservationServiceImpl reservationService;

	    @GetMapping(value = "all", produces = "application/json")

	    public ResponseEntity<Page<ReservationResponseDTO>> getAll(Pageable pageable){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.findAll(pageable));

	    }

	    

	    @GetMapping(value = "{id}", produces = "application/json")

	    public ResponseEntity<ReservationResponseDTO> getOne(@PathVariable Long id){

	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.findById(id));
	    }

	    @PostMapping(value = "save", consumes = "application/json", produces = "application/json")

	    public ResponseEntity<ReservationResponseDTO> save (@RequestBody ReservationRequestDTO ReservationRequestDTO){

	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.save(ReservationRequestDTO));
	    }

	    @PutMapping(value = "{id}", consumes = "application/json", produces = "application/json")

	    public ResponseEntity<ReservationResponseDTO> update(@PathVariable Long id, @RequestBody ReservationRequestDTO reservationRequestDTO){

	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.update(id, reservationRequestDTO));
	    }

	    @DeleteMapping(value = "{id}")
	    public ResponseEntity<?> delete (@PathVariable Long id){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.delete(id));
	    }

}
