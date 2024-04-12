package com.gocar.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "reservation_dates")
public class ReservationDates {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Agency retirementPlace;

    private LocalDate retirementDate;

    @OneToOne
    private Agency returnPlace;

    @OneToOne(mappedBy = "reservationDates", cascade = CascadeType.ALL)
    private Reservation reservation;

    private LocalDate returnDate;
}
