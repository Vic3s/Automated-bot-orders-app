package com.server.backend.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.OrderData;
import com.server.backend.services.OrdersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class OrdersController {

    public final OrdersService ordersService;

    public OrdersController(OrdersService ordersService){
        this.ordersService = ordersService;
    }

    @PostMapping("/post-order")
    public ResponseEntity<ObjectNode> PostOrder(@RequestBody OrderData body){
        ObjectNode response = ordersService.PostOrder(body);

        return ResponseEntity.ok(response);
    }
    @GetMapping("get-account-orders")
    public ResponseEntity<ArrayList<ObjectNode>> GetAccountOrders(){
        ArrayList<ObjectNode> response = ordersService.GetAccountOrders();

        return ResponseEntity.ok(response);
    }

}
