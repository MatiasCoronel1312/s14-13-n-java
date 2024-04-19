package com.gocar.app.controller;

import com.gocar.app.dtos.auth.AuthResponseDto;
import com.gocar.app.dtos.exception.ErrorResponseDto;
import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.gocar.app.dtos.reservation.ReservationRequestDTO;
import com.gocar.app.services.impl.ReservationServiceImpl;

import java.util.List;


@RestController
@RequestMapping("api/reservation")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearer-key")
@Tag(name = "Reservation")
public class ReservationController {
	
	

	    private final ReservationServiceImpl reservationService;

	@Operation(
			summary="Endpoint guardar una reservación",
			description = "Este endpoint sirve para guardar una reservacion",
			method = "POST",
			responses = {
					@ApiResponse(
							responseCode = "200",
							description = "Success. En caso de éxito, devuelve un  Json todos los datos de la reserva",
							content = @Content(schema = @Schema(implementation = ReservationResponseDTO.class,
									contentMediaType = MediaType.APPLICATION_JSON_VALUE
							))
					),
					@ApiResponse(
							responseCode = "400",
							description = "Bad Request. En caso de error en el ingreso de datos, devuelve, en la mayoría de los casos, un Json que contiene el campo del error y una descripción del mismo. Tambien puede devolver debido a que no paso las validaciones tales como que no hay stock del vehiculo o el usuario ya tiene una reserva en esas fechas",
							content = @Content(schema = @Schema(implementation = String.class,
									contentMediaType = MediaType.APPLICATION_JSON_VALUE
							))
					),
					@ApiResponse(
							responseCode = "403",
							description = "Forbidden. En caso excepciones no controladas devuelve un error de permisos.",
							content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
							))
					)
			}
	)
	    @PostMapping(value = "save", consumes = "application/json", produces = "application/json")
	    public ResponseEntity<ReservationResponseDTO> save (@RequestBody ReservationRequestDTO ReservationRequestDTO){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.save(ReservationRequestDTO));
	    }

	    @PutMapping(value = "{id}", consumes = "application/json", produces = "application/json")
	    public ResponseEntity<ReservationResponseDTO> update(@PathVariable Long id, @RequestBody ReservationRequestDTO reservationRequestDTO){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.update(id, reservationRequestDTO));
	    }
	    @DeleteMapping(value = "{id}")
	    public ResponseEntity<?> delete (@PathVariable Long id){
	        return ResponseEntity.status(HttpStatus.OK).body(reservationService.delete(id));
	    }

		@GetMapping(value = "user", produces = "application/json")
		public ResponseEntity<List<ReservationResponseDTO>> getAllByUser(
				@RequestParam(name = "active", required = false) Boolean isActive
		){
			if (isActive != null) {
				return ResponseEntity.status(HttpStatus.OK).body(reservationService.findAllByLoggedInUserAndActive(isActive));
			} else {
				return ResponseEntity.status(HttpStatus.OK).body(reservationService.findAllByLoggedInUser());
			}
		}


}
