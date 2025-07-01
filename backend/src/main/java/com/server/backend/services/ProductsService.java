package com.server.backend.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.MultipleProducts;
import com.server.backend.models.ProductModel;
import com.server.backend.dto.SingleProduct;
import com.server.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProductsService {

    @Autowired
    ProductRepo repo;

    public ObjectNode GetSingleProduct(SingleProduct productObject){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        long productID = productObject.getId();

        ProductModel productObj = repo.findById(productID)
                .orElse(new ProductModel());

        //Create database function to get single product
        // and fill response with data

        return result;
    }

    public ArrayList<ObjectNode> GetMultipleProducts(MultipleProducts productsObject){
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<ObjectNode> result = new ArrayList<>();
        ArrayList<Long> productIds  = productsObject.getProductIds();

        //Create database function to get multiple products
        // from the productIds list using for loop

        for(long ID: productIds){
            ObjectNode productObject = mapper.createObjectNode();

            //create request to get the current object in the loop
            //then request it from db
            // then add that object to the array
        }

        return result;
    }

    public ArrayList<ObjectNode> GetAllProducts(){
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<ObjectNode> result = new ArrayList<>();

        //Create database function to get multiple products
        //from the productIds list using for loop

//        Get all the products from db and fill them to an object or json node
//        for(){
//            ObjectNode productObject = mapper.createObjectNode();
//
//            //create request to get the current object in the loop
//            //then request it from db
//            // then add that object to the array
//        }

        return result;
    }
}
