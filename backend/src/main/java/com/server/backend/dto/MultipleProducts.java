package com.server.backend.dto;

import java.util.ArrayList;

public class MultipleProducts {

    ArrayList<Long> productIds;

    public MultipleProducts(){}

    public ArrayList<Long> getProductIds(){
        return productIds;
    }
    public void setProductIds(ArrayList<Long> productIds){
        this.productIds = productIds;
    }
}
