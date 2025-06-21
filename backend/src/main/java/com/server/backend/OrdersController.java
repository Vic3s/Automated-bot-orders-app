package com.server.backend;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.OrderData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class OrdersController {

    @PostMapping("/post-order")
    public ResponseEntity<ObjectNode> PostOrder(@RequestBody OrderData body){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();

        JsonNode products = body.getProducts();
        int total = body.getTotal();

        //create functionality to format properly and then save to db

        response.put("message", "data received successfully.");

        return ResponseEntity.ok(response);
    }
    @GetMapping("get-account-orders")
    public ResponseEntity<ArrayList<ObjectNode>> GetAccountOrders(){
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<ObjectNode> response = new ArrayList<>();

        //get the current logged in account id from jwt account object
        // and use it to ge the orders and fill the response list

        return ResponseEntity.ok(response);
    }

}
