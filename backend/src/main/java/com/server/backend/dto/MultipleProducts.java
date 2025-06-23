package com.server.backend.dto;

import java.util.ArrayList;

public class MultipleProducts {

    ArrayList<Integer> productIds;

    public MultipleProducts(){}

    public ArrayList<Integer> getProductIds(){
        return productIds;
    }
    public void setProductIds(ArrayList<Integer> productIds){
        this.productIds = productIds;
    }
}
