package com.server.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Document(collection = "products")
@Component
public class ProductModel {

    @Id
    String id;
    String name;
    int price;
    int quantity;
    ArrayList<Integer> location;

    public ProductModel(){}

    //Getter and Setter for id
    public String getId() {
        return id;
    }
    public void setId(String id) {
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

    //Getter and Setter for quantity
    public ArrayList<Integer> getLocation() {
        return location;
    }
    public void setLocation(ArrayList<Integer> location) {
        this.location = location;
    }
}
