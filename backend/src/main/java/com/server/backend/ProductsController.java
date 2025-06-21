package com.server.backend;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.MultipleProducts;
import com.server.backend.dto.SingleProduct;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class ProductsController {
    @GetMapping("/get-product-single")
    public ResponseEntity<ObjectNode> GetProductSingle(@RequestBody SingleProduct body){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();
        String productID = body.getId();

        //Create database function to get single product

        //dummy data to test front to back end communication
        response.put("Message", "Request received");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/get-product-multiple")
    public ResponseEntity<ObjectNode> GetProductMultiple(@RequestBody MultipleProducts body){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();
        ArrayList<String> productIds  = body.getProductIds();

        //Create database function to get multiple products

        //dummy data to test front to back end communication
        response.put("Message", "Request received");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/get-product-all")
    public ResponseEntity<ObjectNode> GetProductAll(){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();

        //Create database function to get all products

        //dummy data to test front to back end communication
        response.put("Message", "Request received");

        return ResponseEntity.ok(response);
    }
}
