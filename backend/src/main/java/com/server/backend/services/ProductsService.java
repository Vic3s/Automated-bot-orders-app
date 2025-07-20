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
import java.util.List;

@Service
public class ProductsService {

    @Autowired
    ProductRepo repo;

    public ObjectNode GetSingleProduct(SingleProduct productReqBody){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        String productID = productReqBody.getId();

        ProductModel productObj = repo.findById(productID)
                .orElse(new ProductModel());

        result.put("id", productObj.getId())
                .put("name", productObj.getName())
                .put("price", productObj.getPrice())
                .put("quantity", productObj.getQuantity());

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

        // get all products from database
        List<ProductModel> allProducts = repo.findAll();

        // add them to the result object node ArrayList and return it
        for(ProductModel product : allProducts){
            ObjectNode productObj = mapper.createObjectNode();
            System.out.println(product.getQuantity());
            productObj.put("id", product.getId())
                    .put("name", product.getName())
                    .put("price", product.getPrice())
                    .put("quantity", product.getQuantity());
            result.add(productObj);
        }

        return result;
    }
}
