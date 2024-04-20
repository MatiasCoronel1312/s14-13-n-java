package com.gocar.app.services;

import com.gocar.app.dtos.destination.DestinantionResponseDTO;

import java.util.List;

public interface DestinationService {

    List<DestinantionResponseDTO> findAllDestinations();

}
