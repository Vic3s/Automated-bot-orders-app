package com.server.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.stereotype.Component;

@Entity
@Component
public class AccountModel {

    @Id
    int id;
    String username;
    String email;
    String password;
    String telephone;
    String address;

    //Getter and Setter for id
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    //Getter and Setter for username
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    //Getter and Setter for email
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    //Getter and Setter for password
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    //Getter and Setter for telephone
    public String getTelephone() {
        return telephone;
    }
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    //Getter and Setter for address
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
}
