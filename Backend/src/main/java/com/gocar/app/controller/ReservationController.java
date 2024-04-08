package com.gocar.app.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gocar.app.dtos.auth.ReservationDTO;
import com.gocar.app.services.ReservationService;
import com.gocar.app.services.impl.ReservationServiceImpl;

import java.util.List;
@RestController
@RequestMapping("api/reservation")
@RequiredArgsConstructor
public class ReservationController {
	
	

	    private final ReservationServiceImpl reservationService;

	    @GetMapping(value = "all", produces = "application/json")
	    public ResponseEntity<List<ReservationDTO>> getAll(){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.findAll());
	    }

	    

	    @GetMapping(value = "{id}", produces = "application/json")
	    public ResponseEntity<ReservationDTO> getOne(@PathVariable Long id){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.findById(id));
	    }

	    @PostMapping(value = "save", consumes = "application/json", produces = "application/json")
	    public ResponseEntity<ReservationDTO> save (@RequestBody ReservationDTO ReservationDTO){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.save(ReservationDTO));
	    }

	    @PutMapping(value = "{id}", consumes = "application/json", produces = "application/json")
	    public ResponseEntity<ReservationDTO> update(@PathVariable Long id, @RequestBody ReservationDTO reservationDTO){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.update(id,reservationDTO));
	    }

	    @DeleteMapping(value = "{id}")
	    public ResponseEntity<?> delete (@PathVariable Long id){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.delete(id));
	    }

}
