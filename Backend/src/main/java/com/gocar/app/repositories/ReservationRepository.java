package com.gocar.app.repositories;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.gocar.app.models.Reservation;
import com.gocar.app.models.User;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findAllByUserAndSoftDelete(User user, boolean softDelete);
    List<Reservation> findAllByUser(User user);
}
