package com.server.backend.controllers;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.MultipleProducts;
import com.server.backend.dto.SingleProduct;
import com.server.backend.services.ProductsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;

@RestController
public class ProductsController {

    private final ProductsService productsService;

    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @PostMapping("/get-product-single")
    public ResponseEntity<ObjectNode> GetProductSingle(@RequestBody SingleProduct body){
        ObjectNode response = productsService.GetSingleProduct(body);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/get-product-multiple")
    public ResponseEntity<ArrayList<ObjectNode>> GetProductMultiple(@RequestBody MultipleProducts body){
        ArrayList<ObjectNode> response = productsService.GetMultipleProducts(body);

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
