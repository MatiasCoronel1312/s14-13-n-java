package com.gocar.app.exceptions;

public class NoVehicleInStockException extends RuntimeException {
    public NoVehicleInStockException(String msg) {
        super(msg);
    }
}
