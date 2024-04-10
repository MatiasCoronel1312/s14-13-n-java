package com.gocar.app.controller;


import com.gocar.app.models.ReservationDates;
import com.gocar.app.services.ReservationDatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservations")
public class ReservationDatesController {

    private final ReservationDatesService reservationDatesService;

    @Autowired
    public ReservationDatesController(ReservationDatesService reservationDatesService) {
        this.reservationDatesService = reservationDatesService;
    }

    @PostMapping
    public ReservationDates createReservation(@RequestBody ReservationDates reservationDates) {
        return reservationDatesService.save(reservationDates);
    }

    @GetMapping("/{id}")
    public ReservationDates getReservation(@PathVariable Long id) {
        return reservationDatesService.findById(id);
    }

    @PutMapping
    public ReservationDates updateReservation(@RequestBody ReservationDates reservationDates) {
        return reservationDatesService.update(reservationDates);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationDatesService.deleteById(id);
    }
}