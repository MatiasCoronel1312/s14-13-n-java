package com.gocar.app.services.impl;

import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import com.gocar.app.models.Insurance;
import com.gocar.app.models.User;
import com.gocar.app.models.Vehicle;
import org.hibernate.service.spi.ServiceException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.gocar.app.dtos.reservation.ReservationDTO;

import com.gocar.app.models.Reservation;
import com.gocar.app.repositories.ReservationRepository;
import com.gocar.app.services.ReservationService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor

public class ReservationServiceImpl  implements ReservationService{
	

	  private final ReservationRepository reservationRepository;

	  private final UserServiceImpl userService;
	  private final VehicleServiceImpl vehicleService;
	  private final InsuranceServiceImpl insuranceService;


	@Override
	    public Page<ReservationResponseDTO> findAll(Pageable pageable) throws ServiceException {
	   	 	return  reservationRepository.findAll(pageable).map(ReservationResponseDTO:: new);
	    }

	    @Override
	    public ReservationResponseDTO findById(Long id) {
	        try{
	            Reservation reservationEntity = reservationRepository.findById(id)
	                    .orElseThrow(() -> new EntityNotFoundException("There is no reservation with that id in the database"));
	            return new ReservationResponseDTO(reservationEntity);


	        }catch (EntityNotFoundException e){
	            throw e;
	        }catch (Exception e){
	            throw new ServiceException("Error occurred while fetching reservation with id: " + id, e);
	        }
	    }

	@Override
	public Reservation findById2(Long id) {
		return reservationRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("There is no reservation with that id in the database"));
	}


	    @Override
	    public ReservationResponseDTO save(ReservationDTO reservationDTO) {
			String userEmail = (String)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			User user = userService.findByEmail(userEmail);
			Vehicle vehicle = vehicleService.findVehicleById(reservationDTO.vehicleId());
			Insurance insurance = insuranceService.findById(reservationDTO.insuranceId());
	        try{
	            Reservation reservationEntity = Reservation.builder()
	                    .vehicle(vehicle)
	                    .User(user)
	                    .iva(reservationDTO.total() * 0.12)
	                    .subtotal(reservationDTO.total() - (reservationDTO.total() * 0.12))
	                    .total(reservationDTO.total())
	                    .insurance(insurance)
	                    .softDelete(Boolean.FALSE)
	                    .build();
	            Reservation entitySaved = reservationRepository.save(reservationEntity);
	            return new ReservationResponseDTO(entitySaved);


	        }catch (Exception e){
	            throw new ServiceException("Error occurred while saving reservation", e);
	        }
	    }

	    @Override

	    public ReservationResponseDTO update(Long id, ReservationDTO reservationDTO) {

	        try {
	            Reservation reservationDataBase = reservationRepository.findById(id).
	                    orElseThrow(()-> new EntityNotFoundException("There is no reservation with that id in the database"));


	            reservationDataBase.setIva(reservationDTO.total() * 0.12);
	            reservationDataBase.setSubtotal(reservationDTO.total() - (reservationDTO.total() * 0.12));
	            reservationDataBase.setTotal(reservationDTO.total());
	            Reservation reservationUpdated = reservationRepository.save(reservationDataBase);
	            return new ReservationResponseDTO(reservationUpdated);

	        } catch (EntityNotFoundException e) {
	            throw e;
	        } catch (Exception e) {
	            throw new ServiceException("Error occurred while updating professional", e);
	        }
	    }

	    @Override
	    public boolean delete(Long id) {
	        Reservation reservationDataBase = reservationRepository.findById(id)
	                .orElseThrow(() -> new EntityNotFoundException("There is no reservation with that id in the database"));

	        reservationDataBase.setSoftDelete(Boolean.TRUE);

	        return Boolean.TRUE;
	    }

	

}
