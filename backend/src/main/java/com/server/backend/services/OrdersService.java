package com.server.backend.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.OrderData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class OrdersService {

    public ObjectNode PostOrder(OrderData orderObject){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        JsonNode products = orderObject.getProducts();
        int total = orderObject.getTotal();

        //create functionality to format properly and then save to db

        result.put("message", "data received successfully.");

        return result;
    }
    public ArrayList<ObjectNode> GetAccountOrders() {
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<ObjectNode> result = new ArrayList<>();

        //get the current logged in account id from jwt account object
        // and use it to ge the orders and fill the response list

        return result;
    }

}
