package com.gocar.app.repositories;


import com.gocar.app.models.ReservationDates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface ReservationDatesRepository extends JpaRepository<ReservationDates, Long> {
}
