package com.gocar.app.services.impl;

import com.gocar.app.dtos.destination.DestinationResponseDTO;
import com.gocar.app.models.Destination;
import com.gocar.app.repositories.DestinationRepository;
import com.gocar.app.services.DestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DestinationServiceImpl implements DestinationService {
        private final DestinationRepository destinationRepository;
    @Override
    public List<DestinationResponseDTO> findAllDestinations() {
        List<Destination> destinations = destinationRepository.findAll();
        return destinations.stream().map(DestinationResponseDTO:: new).toList();
    }
}
