package com.server.backend.dto;

import com.fasterxml.jackson.databind.JsonNode;

import java.util.ArrayList;

public class OrderData {

    JsonNode products;
    int total;

    public OrderData (){}

    //Getter and Setter for products list
    public JsonNode getProducts(){
        return products;
    }
    public void setProducts(JsonNode products){
        this.products = products;
    }

    //Getter and Setter for total
    public int getTotal() {
        return total;
    }
    public void setTotal(int total) {
        this.total = total;
    }
}
