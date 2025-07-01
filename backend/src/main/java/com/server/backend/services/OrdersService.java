package com.server.backend.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.add_functionality.AutomatedBot;
import com.server.backend.add_functionality.IDGenerate;
import com.server.backend.dto.OrderData;
import com.server.backend.models.OrderModel;
import com.server.backend.repo.OrdersRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class OrdersService {

    OrdersRepo repo;

    public ObjectNode PostOrder(OrderData orderObject){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        long id = IDGenerate.idGenerate();
        int accountOrder = 121314;
        ArrayList<ArrayList<Integer>> visitedLocations =
                AutomatedBot.calculateBotPath(orderObject.getProducts());
        ArrayList<ObjectNode> products = orderObject.getProducts();
        int total = orderObject.getTotal();

        OrderModel order = new OrderModel();

        order.setId(id);
        order.setAccountOrder(accountOrder);
        order.setVisitedLocations(visitedLocations);
        order.setProducts(products);
        order.setTotal(total);

        repo.save(order);

        result.put("message", "Package is on th way!");

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
