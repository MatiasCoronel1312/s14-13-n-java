package com.gocar.app.models;

import com.gocar.app.enums.Category;
import com.gocar.app.enums.Feature;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
    @NotBlank
    private String brand;
    @NotBlank
    private String model;
    @NotNull
    private Integer modelYear;
    @NotNull
    private Double engineSize;
    @NotNull
    private Integer passengers;
    @NotBlank
    private String image;
    @NotNull
    private Double price;
    @NotNull
    private Integer stock;
    @NotNull
    @Enumerated(EnumType.STRING)
    private List<Feature> features;
    @NotNull
    @Enumerated(EnumType.STRING)
    private Category category;
    private Boolean deleted = Boolean.FALSE;

}