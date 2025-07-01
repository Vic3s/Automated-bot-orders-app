package com.server.backend.models;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Document(collection = "orders")
@Component
public class OrderModel {

    long id;
    int accountOrder;
    ArrayList<ArrayList<Integer>> visitedLocations;
    ArrayList<ObjectNode> products;
    int total;

    //Getter and Setter for id
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    //Getter and Setter for orderedBy
    public int getAccountOrder() {
        return accountOrder;
    }
    public void setAccountOrder(int accountOrder) {
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
    public ArrayList<ObjectNode> getProducts() {
        return products;
    }
    public void setProducts(ArrayList<ObjectNode> products) {
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
