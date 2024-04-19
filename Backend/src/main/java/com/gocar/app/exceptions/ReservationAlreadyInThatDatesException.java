package com.gocar.app.exceptions;

public class ReservationAlreadyInThatDatesException extends RuntimeException {
    public ReservationAlreadyInThatDatesException(String msg) {
        super(msg);
    }
}
