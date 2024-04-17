package com.gocar.app.controller;


import com.gocar.app.dtos.ReservationDates.ReservationDatesRequestDto;
import com.gocar.app.dtos.ReservationDates.ReservationDatesResponseDto;
import com.gocar.app.models.ReservationDates;
import com.gocar.app.services.ReservationDatesService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/reservationDates")
public class ReservationDatesController {

    private final ReservationDatesService reservationDatesService;


    @GetMapping("/{id}")
    public ResponseEntity<ReservationDatesResponseDto> findById(@PathVariable Long id) {
        ReservationDatesResponseDto reservationDates = reservationDatesService.findById(id);
        return ResponseEntity.ok(reservationDates);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        reservationDatesService.deleteById(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(reservationDatesService.findAll());
    }
}