package com.gocar.app.models;

import com.gocar.app.enums.Category;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Table(name = "vehicles")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private Integer modelYear;
    private Double engineSize;
    private Integer passengers;
    private String image;
    private Double price;
    private Integer stock;
    @ManyToMany
    @JoinTable(
            name = "vehicle_features",
            joinColumns = @JoinColumn(name = "vehicle_id"),
            inverseJoinColumns = @JoinColumn(name = "feature_id")
    )
    private List<Feature> features;
    @Enumerated(EnumType.STRING)
    private Category category;
    private Boolean deleted = Boolean.FALSE;

}
