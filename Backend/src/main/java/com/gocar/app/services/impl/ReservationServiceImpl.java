package com.gocar.app.services.impl;

import java.util.List;
import java.util.Optional;

import com.gocar.app.models.Reservation;
import com.gocar.app.repositories.ReservationRepository;
import com.gocar.app.services.ReservationService;

public class ReservationServiceImpl  implements ReservationService{
	

    private final ReservationRepository reservationRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

	@Override
	public Reservation save(Reservation reservation) {
		// TODO Auto-generated method stub
	
			return reservationRepository.save(reservation);
		
	}

	@Override
	public Optional<Reservation> findById(Long id) {
		if (!reservationRepository.existsById(id)) {

            throw new RuntimeException("Reservation not found");
        }
        return reservationRepository.findById(id);
	}

	@Override
	public boolean delete(Long id) {
		 Optional<Reservation> reservationOptinal = reservationRepository.findById(id);
	        if (!reservationOptinal.isPresent()) {
	            throw new RuntimeException("Reservation not found");
	        }

	        Reservation reservation = reservationOptinal.get();
	        reservation.setSoftDelete(true);
	        reservationRepository.save(reservation);
	        return true;
	}

	@Override
	public Reservation update(Reservation reservation) {
		// TODO Auto-generated method stub  Optional<Vehicle> vehicleOptional = vehicleRepository.findById(vehicle.getId());
      return null;
	}

	@Override
	public List<Reservation> getAll() {
		// TODO Auto-generated method stub

        List<Reservation> reservation = reservationRepository.findAll();
        if (reservation.isEmpty()) {
            throw new RuntimeException("No reservation found");
        }

        return reservation;
		
	}
	
	

}
