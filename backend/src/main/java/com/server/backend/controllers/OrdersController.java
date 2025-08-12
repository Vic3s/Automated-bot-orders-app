package com.server.backend.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.OrderData;
import com.server.backend.services.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class OrdersController {

    @Autowired
    private final OrdersService ordersService;

    public OrdersController(OrdersService ordersService){
        this.ordersService = ordersService;
    }

    @PostMapping("/post-order")
    public ResponseEntity<ObjectNode> PostOrder(@RequestBody OrderData body,
        @RequestHeader("Authorization") String authorizationHeader){

        ObjectNode response = ordersService.PostOrder(body, authorizationHeader);

        return ResponseEntity.ok(response);
    }
    @GetMapping("get-account-orders")
    public ResponseEntity<ArrayList<ObjectNode>> GetAccountOrders(){
        ArrayList<ObjectNode> response = ordersService.GetAccountOrders();

        return ResponseEntity.ok(response);
    }

}
