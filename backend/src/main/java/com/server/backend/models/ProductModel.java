package com.server.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.stereotype.Component;

@Entity
@Component
public class ProductModel {

    @Id
    int id;
    String name;
    int price;
    int quantity;

    public ProductModel(){}

    //Getter and Setter for id
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    //Getter and Setter for name
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    //Getter and Setter for price
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }

    //Getter and Setter for quantity
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
