package com.example.employee_management_react.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    private static final long serialVersionUID = 1L; //The serialVersionUID field is a unique identifier for the version of the class.
    // It is used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization.

    public ResourceNotFoundException(String message){ //The constructor of the ResourceNotFoundException class accepts a String parameter message, which represents the error message associated with the exception.
        super(message);
    }
}
