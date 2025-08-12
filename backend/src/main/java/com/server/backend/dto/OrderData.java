package com.server.backend.dto;

import com.fasterxml.jackson.databind.node.ObjectNode;

import java.util.ArrayList;

public class OrderData {

    private ArrayList<OrderProduct> products;
    private double total;

    public OrderData (){}

    //Getter and Setter for products list
    public ArrayList<OrderProduct> getProducts(){
        return products;
    }
    public void setProducts(ArrayList<OrderProduct> products){
        this.products = products;
    }

    //Getter and Setter for total
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }
}
