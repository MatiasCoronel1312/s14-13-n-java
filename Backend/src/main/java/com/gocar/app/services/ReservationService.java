package com.gocar.app.services;
import java.util.List;
import java.util.Optional;

import com.gocar.app.models.Reservation;

public interface ReservationService {
	
	  Reservation save(Reservation reservation);

	    Optional<Reservation> findById(Long id);

	    boolean delete(Long id);

	    Reservation update(Reservation reservation);

	    List<Reservation> getAll();
	

}
