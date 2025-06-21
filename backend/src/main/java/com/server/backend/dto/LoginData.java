package com.server.backend.dto;

public class LoginData {

    String email;
    String password;

    public LoginData(){}

    //Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    //Getter and Setter for password

    public String getPassword() {
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
