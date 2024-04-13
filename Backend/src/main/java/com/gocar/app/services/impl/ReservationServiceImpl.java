package com.gocar.app.services.impl;

import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import com.gocar.app.models.*;
import org.hibernate.service.spi.ServiceException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.gocar.app.dtos.reservation.ReservationRequestDTO;

import com.gocar.app.repositories.ReservationRepository;
import com.gocar.app.services.ReservationService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import java.text.DecimalFormat;

@Service
@Transactional
@RequiredArgsConstructor

public class ReservationServiceImpl  implements ReservationService{
	

	  private final ReservationRepository reservationRepository;
	  private final UserServiceImpl userService;
	  private final VehicleServiceImpl vehicleService;
	  private final InsuranceServiceImpl insuranceService;
	  private final ReservationDatesServiceImpl reservationDatesService;
	  private final AgencyServiceImpl agencyService;


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
	    public ReservationResponseDTO save(ReservationRequestDTO reservationRequestDTO) {
			String userEmail = (String)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			User user = userService.findByEmail(userEmail);
			Vehicle vehicle = vehicleService.findVehicleById(reservationRequestDTO.vehicleId());
			Insurance insurance = insuranceService.findById(reservationRequestDTO.insuranceId());
			Agency retirementAgency = agencyService.findById2(reservationRequestDTO.retirementAgencyId());
			Agency returnAgency = agencyService.findById2(reservationRequestDTO.returnAgencyId());
			DecimalFormat df = new DecimalFormat("#.##");
			ReservationDates reservationDates = reservationDatesService.save(retirementAgency, returnAgency, reservationRequestDTO.retirementDate(), reservationRequestDTO.returnDate());
			double total = (vehicle.getPrice() + insurance.getPrice()) * reservationDatesService.getTotalDays(reservationDates);
			double iva = total * 0.21;
			double subTotal = total - iva;
			double administrativeFee = total * 0.06;
			total += administrativeFee;

			iva = Double.parseDouble(df.format(iva).replace(",", "."));
			subTotal = Double.parseDouble(df.format(subTotal).replace(",", "."));
			administrativeFee = Double.parseDouble(df.format(administrativeFee).replace(",", "."));
			total = Double.parseDouble(df.format(total).replace(",", "."));

			try{
	            Reservation reservationEntity = Reservation.builder()
	                    .vehicle(vehicle)
	                    .User(user)
						.reservationDates(reservationDates)
	                    .iva(iva)
	                    .subtotal(subTotal)
						.administrativeFee(administrativeFee)
	                    .total(total)
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

	    public ReservationResponseDTO update(Long id, ReservationRequestDTO reservationRequestDTO) {

//	        try {
//	            Reservation reservationDataBase = reservationRepository.findById(id).
//	                    orElseThrow(()-> new EntityNotFoundException("There is no reservation with that id in the database"));
//
//
//	            reservationDataBase.setIva(reservationRequestDTO.total() * 0.12);
//	            reservationDataBase.setSubtotal(reservationRequestDTO.total() - (reservationRequestDTO.total() * 0.12));
//	            reservationDataBase.setTotal(reservationRequestDTO.total());
//	            Reservation reservationUpdated = reservationRepository.save(reservationDataBase);
//	            return new ReservationResponseDTO(reservationUpdated);
//
//	        } catch (EntityNotFoundException e) {
//	            throw e;
//	        } catch (Exception e) {
//	            throw new ServiceException("Error occurred while updating professional", e);
//	        }
			return null;
	    }

	    @Override
	    public boolean delete(Long id) {
	        Reservation reservationDataBase = reservationRepository.findById(id)
	                .orElseThrow(() -> new EntityNotFoundException("There is no reservation with that id in the database"));

	        reservationDataBase.setSoftDelete(Boolean.TRUE);

	        return Boolean.TRUE;
	    }

	

}
