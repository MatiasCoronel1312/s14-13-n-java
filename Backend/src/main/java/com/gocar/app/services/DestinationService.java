package com.gocar.app.services;

import com.gocar.app.dtos.destination.DestinationResponseDTO;

import java.util.List;

public interface DestinationService {

    List<DestinationResponseDTO> findAllDestinations();

}
