package com.gocar.app.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@Table(name ="reservation")
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
	 @ManyToOne
	 @JoinColumn(name = "vehicle_id")
	 private Vehicle vehicle;
	@ManyToOne
	@JoinColumn(name = "user_id")
	 private User User;
	 private Double iva;
	 private Double subtotal;
	 private Double total;
	 private Long idReservationDates;
	 @OneToOne
	 @JoinColumn
	 private Insurance Insurance;
	 private Boolean softDelete  = Boolean.FALSE;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "reservation_dates_id", referencedColumnName = "id")
	private ReservationDates reservationDates;



}
