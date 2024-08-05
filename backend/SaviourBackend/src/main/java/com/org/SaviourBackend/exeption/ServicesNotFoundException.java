package com.org.SaviourBackend.exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ServicesNotFoundException extends RuntimeException {

	public ServicesNotFoundException(String message) {
		super(message);
	}
}
