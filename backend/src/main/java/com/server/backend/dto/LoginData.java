package com.server.backend.dto;

public class LoginData {

    int id;
    String username;
    String password;

    public LoginData(){}

    //Getter and Setter for username
    public String getUsername() {
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    //Getter and Setter for password

    public String getPassword() {
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
