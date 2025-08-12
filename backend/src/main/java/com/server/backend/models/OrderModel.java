package com.server.backend.models;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.OrderProduct;
import org.springframework.core.annotation.Order;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Document(collection = "orders")
@Component
public class OrderModel {

    private long id;
    private String accountOrder;
    private ArrayList<ArrayList<Integer>> visitedLocations;
    private ArrayList<OrderProduct> products;
    private double total;

    //Getter and Setter for id
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    //Getter and Setter for orderedBy
    public String getAccountOrder() {
        return accountOrder;
    }
    public void setAccountOrder(String accountOrder) {
        this.accountOrder = accountOrder;
    }

    //Getter and Setter for visitedLocations
    public ArrayList<ArrayList<Integer>> getVisitedLocations() {
        return visitedLocations;
    }
    public void setVisitedLocations(ArrayList<ArrayList<Integer>> visitedLocations) {
        this.visitedLocations = visitedLocations;
    }

    //Getter and setter for products
    public ArrayList<OrderProduct> getProducts() {
        return products;
    }
    public void setProducts(ArrayList<OrderProduct> products) {
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
