package com.gocar.app.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="reservation")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
@Setter

public class Reservation {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 private Long idCAr;
	 public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdCAr() {
		return idCAr;
	}
	public void setIdCAr(Long idCAr) {
		this.idCAr = idCAr;
	}
	public Long getIdUser() {
		return idUser;
	}
	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}
	public Double getIva() {
		return iva;
	}
	public void setIva(Double iva) {
		this.iva = iva;
	}
	public Double getSubtotal() {
		return subtotal;
	}
	public void setSubtotal(Double subtotal) {
		this.subtotal = subtotal;
	}
	public Double getTotal() {
		return total;
	}
	public void setTotal(Double total) {
		this.total = total;
	}
	public Long getIdReservationDates() {
		return idReservationDates;
	}
	public void setIdReservationDates(Long idReservationDates) {
		this.idReservationDates = idReservationDates;
	}
	public Insurance getIdInsurance() {
		return idInsurance;
	}
	public void setIdInsurance(Insurance idInsurance) {
		this.idInsurance = idInsurance;
	}
	public Boolean getSoftDelete() {
		return softDelete;
	}
	public void setSoftDelete(Boolean softDelete) {
		this.softDelete = softDelete;
	}
	private Long idUser;
	 private Double iva;
	 private Double subtotal;
	 private Double total;
	 private Long idReservationDates;
	 private Insurance idInsurance;
	
	    private Boolean softDelete  = Boolean.FALSE;
	public void setSoftDelete(boolean b) {
		// TODO Auto-generated method stub
		
	
	
	}
	 
	 

}
