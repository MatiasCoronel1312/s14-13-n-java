package com.gocar.app.dtos.destination;

import com.gocar.app.models.Destination;
import com.gocar.app.models.DestinationImage;
import com.gocar.app.models.Feature;
import com.gocar.app.models.Tag;

import java.util.List;

public record DestinantionResponseDTO(
        Long id,
         List<String> image,
         String city,
         String title,
         String subtitle,
         String location,
         String locationTitle,
         String highSeason,
         String highSeasonTitle,
         String celebrations,
         String celebrationsTitle,
         String phase,
         List<String> tag) {

    public DestinantionResponseDTO(Destination destination){
        this(destination.getId(), destination.getImages().stream().map(DestinationImage::getImageUrl).toList(),
                destination.getCity(), destination.getTitle(),
                destination.getSubtitle(), destination.getLocation(),
                destination.getLocationTitle(), destination.getHighSeason(),
                destination.getHighSeasonTitle(), destination.getCelebrations(),
                destination.getCelebrationsTitle(),
                destination.getPhase(), destination.getTags().stream().map(Tag::getName).toList());
    }
}
