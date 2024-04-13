package com.gocar.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
    @ManyToOne
    @JoinColumn(name = "retirement_place_id")
    private Agency retirementPlace;
    private LocalDateTime retirementDate;
    @ManyToOne
    @JoinColumn(name = "return_place_id")
    private Agency returnPlace;
    @OneToOne(mappedBy = "reservationDates", cascade = CascadeType.ALL)
    private Reservation reservation;
    private LocalDateTime returnDate;


}
