package com.gocar.app.services.impl;

import java.util.List;
import java.util.Optional;

import org.hibernate.service.spi.ServiceException;
import org.springframework.stereotype.Service;

import com.gocar.app.dtos.auth.ReservationDTO;
import com.gocar.app.models.Insurance;
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

	    @Override
	    public List<ReservationDTO> findAll() throws ServiceException {
	        List<ReservationDTO> reservationDTOList;
	        try{	          List<Reservation> reservationList = reservationRepository.findAll();
	            reservationDTOList = reservationList.stream().map(r -> ReservationDTO.builder() // r = reservation	                    .brand(v.getBrand())
	                    .idCar(r.getidCar())
	                    .id(r.getid())
	                    .idUser(r.getidUser())
	                    .iva(r.getiva())
	                    .subtotal(r.getsubtotal())
	                    .total(r.gettotal())
	                    .idReservationDates(r.getidReservationDates())
	                    .idInsurance(r.getidInsurance())
	                    .build())
	                    ).toList(); 
	                   
	        }catch (Exception e){
	            throw new ServiceException("Error occurred while fetching all reservation", e);
	        }
	        return reservationDTOList;
	    
	   	 
	   	 
	 
	    }

	    @Override
	    public ReservationDTO findById(Long id) {
	        try{
	            Reservation reservationEntity = reservationRepository.findById(id)
	                    .orElseThrow(() -> new EntityNotFoundException("There is no reservation with that id in the database"));
	            return new ReservationDTO(reservationEntity);
	        }catch (EntityNotFoundException e){
	            throw e;
	        }catch (Exception e){
	            throw new ServiceException("Error occurred while fetching reservation with id: " + id, e);
	        }
	    }

	

	    @Override
	    public ReservationDTO save(ReservationDTO reservationDTO) {
	        try{
	            Reservation reservationEntity = Reservation.builder()
	                    .idCar(reservationDTO.idCar())
	                    .idUser(reservationDTO.idUser())
	                    .iva(reservationDTO.iva())
	                    .subtotal(reservationDTO.subtotal())
	                    .total(reservationDTO.total())
	                    .idReservationDates(reservationDTO.idReservationDates())
	                    .idInsurance(reservationDTO.insurance())
	                    .idInsurance(reservationDTO.idInsurance())                  
	                    .deleted(Boolean.FALSE)
	                    .build();
	            Reservation entitySaved = reservationRepository.save(reservationEntity);
	            return new ReservationDTO(entitySaved);
	        }catch (Exception e){
	            throw new ServiceException("Error occurred while saving reservation", e);
	        }
	    }

	    @Override
	    public ReservationDTO update(Long id, ReservationDTO reservationDTO) {
	        try {
	            Reservation reservationDataBase = reservationRepository.findById(id).
	                    orElseThrow(()-> new EntityNotFoundException("There is no reservation with that id in the database"));

	            reservationDataBase.setidCar(reservationDTO.idCar());
	            reservationDataBase.setidUser(reservationDTO.idUser());
	            reservationDataBase.setiva(reservationDTO.iva());
	            reservationDataBase.setsubtotal(reservationDTO.subtotal());
	            reservationDataBase.total(reservationDTO.total());
	            reservationDataBase.setidReservationDates(reservationDTO.idReservationDates());
	            reservationDataBase.setidInsurance(reservationDTO.idInsurance());
	         
	         

	            Reservation reservationUpdated = reservationRepository.save(reservationDataBase);
	            return new ReservationDTO(reservationUpdated);
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
	        reservationDataBase.setDeleted(Boolean.TRUE);
	        return Boolean.TRUE;
	    }

	

}
