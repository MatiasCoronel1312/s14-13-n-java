package com.gocar.app.models;

import jakarta.persistence.*;
import jdk.jfr.DataAmount;
import lombok.*;

import java.io.Serializable;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "agency")
public class Agency implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String country;
    private String address;
    private String phone;
}
