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
    Long id;
    @NotBlank
    String brand;
    @NotBlank
    String model;
    @NotNull
    Integer modelYear;
    @NotNull
    Double engineSize;
    @NotBlank
    String image;
    @NotNull
    Double price;
    @NotNull
    Integer stock;
    @NotNull
    @Enumerated(EnumType.STRING)
    List<Feature> features;
    @NotNull
    @Enumerated(EnumType.STRING)
    Category category;
    Boolean deleted = Boolean.FALSE;

}
