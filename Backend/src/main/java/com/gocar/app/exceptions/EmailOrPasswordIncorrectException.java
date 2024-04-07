package com.gocar.app.exceptions;

public class EmailOrPasswordIncorrectException extends RuntimeException {
    public EmailOrPasswordIncorrectException(String msg) {
        super(msg);
    }
}
