package com.gocar.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "destinations")
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(mappedBy = "destination", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DestinationImage> images;
    private String city;
    private String title;
    private String subtitle;
    private String location;
    private String locationTitle;
    private String highSeason;
    private String highSeasonTitle;
    private String celebrations;
    private String celebrationsTitle;
    private String phase;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "destinations_tags",
            joinColumns = @JoinColumn(name = "destination_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> tags;



}
