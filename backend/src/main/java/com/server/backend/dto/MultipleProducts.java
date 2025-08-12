package com.server.backend.dto;

import java.util.ArrayList;

public class MultipleProducts {

    ArrayList<String> productIds;

    public MultipleProducts(){}

    public ArrayList<String> getProductIds(){
        return productIds;
    }
    public void setProductIds(ArrayList<String> productIds){
        this.productIds = productIds;
    }
}
