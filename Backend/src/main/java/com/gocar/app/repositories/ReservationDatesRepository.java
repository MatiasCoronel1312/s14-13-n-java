package com.gocar.app.repositories;


import com.gocar.app.models.ReservationDates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface ReservationDatesRepository extends JpaRepository<ReservationDates, Long> {
}
