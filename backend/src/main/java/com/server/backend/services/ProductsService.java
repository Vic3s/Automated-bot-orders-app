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
        ArrayList<String> productIds = productsObject.getProductIds();

        for(String ID: productIds){
            ObjectNode productObject = mapper.createObjectNode();

            ProductModel productData = repo.findById(ID).orElse(new ProductModel());

            productObject.put("id", ID)
            .put("name", productData.getName())
            .put("price", productData.getPrice())
            .put("quantity", productData.getQuantity())
            .put("location", productData.getLocation());

            result.add(productObject);
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
            productObj.put("id", product.getId())
                    .put("name", product.getName())
                    .put("price", product.getPrice())
                    .put("quantity", product.getQuantity())
                    .put("location", product.getLocation());
            result.add(productObj);
        }

        return result;
    }
}
