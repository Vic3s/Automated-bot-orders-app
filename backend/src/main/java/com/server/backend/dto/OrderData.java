package com.server.backend.dto;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.util.ArrayList;

public class OrderData {

    ArrayList<ObjectNode> products;
    int total;

    public OrderData (){}

    //Getter and Setter for products list
    public ArrayList<ObjectNode> getProducts(){
        return products;
    }
    public void setProducts(ArrayList<ObjectNode> products){
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
