package com.gocar.app.controller;

import com.gocar.app.dtos.destination.DestinantionResponseDTO;
import com.gocar.app.dtos.reservation.ReservationResponseDTO;
import com.gocar.app.services.impl.DestinationServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/destination")
@RequiredArgsConstructor
@Tag(name = "Destination")
public class DestinationController {

    private final DestinationServiceImpl destinationService;

    @Operation(
            summary="Endpoint obterner todos los destinos",
            description = "Este endpoint sirve para obtener todos los destinos con los tags",
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un  Json todos los datos de los destinos",
                            content = @Content(schema = @Schema(implementation = DestinantionResponseDTO.class,
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
    @GetMapping(value = "all")
    public ResponseEntity<List<DestinantionResponseDTO>> findAllDestinations(){
        return ResponseEntity.ok(destinationService.findAllDestinations());
    }
}
