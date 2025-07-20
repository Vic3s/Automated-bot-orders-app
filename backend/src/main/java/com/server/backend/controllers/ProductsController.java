package com.server.backend.controllers;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.MultipleProducts;
import com.server.backend.dto.SingleProduct;
import com.server.backend.services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class ProductsController {

    @Autowired
    private final ProductsService productsService;

    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @PostMapping("/get-product-single")
    public ResponseEntity<ObjectNode> GetProductSingle(@RequestBody SingleProduct body){
        ObjectNode response = productsService.GetSingleProduct(body);

        System.out.println(response);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/get-product-multiple")
    public ResponseEntity<ArrayList<ObjectNode>> GetProductMultiple(@RequestBody MultipleProducts body){
        ArrayList<ObjectNode> response = productsService.GetMultipleProducts(body);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/get-product-all")
    public ResponseEntity<ArrayList> GetProductAll(){
        ArrayList<ObjectNode> response = productsService.GetAllProducts();

        return ResponseEntity.ok(response);
    }
}
