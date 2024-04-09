package com.gocar.app.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="reservations")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@ToString
@Builder
public class Reservation {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 @NotBlank
	 private Long idCAr;
	 private Long idUser;
	 private Double iva;
	 private Double subtotal;
	 private Double total;
	 private Long idReservationDates;
	 @OneToOne
	 @JoinColumn
	 private Insurance idInsurance;
	 private Boolean softDelete  = Boolean.FALSE;

}
