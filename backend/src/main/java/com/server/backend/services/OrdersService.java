package com.server.backend.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.addFunctionality.AutomatedBot;
import com.server.backend.addFunctionality.IDGenerate;
import com.server.backend.dto.OrderData;
import com.server.backend.dto.OrderProduct;
import com.server.backend.models.OrderModel;
import com.server.backend.repo.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrdersService {

    @Autowired
    JWTService jwtService;

    @Autowired
    OrdersRepo repo;

    public ObjectNode PostOrder(OrderData orderObject, String authorizationToken){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        long id = IDGenerate.idGenerate();
        String accountOrder = jwtService.extractUsername(authorizationToken);
        ArrayList<ArrayList<Integer>> visitedLocations = AutomatedBot.calculateBotPath(orderObject.getProducts());
        ArrayList<OrderProduct> products = orderObject.getProducts();
        double total = orderObject.getTotal();

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
    public ArrayList<ObjectNode> GetAccountOrders(String authorization) {
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<ObjectNode> result = new ArrayList<>();

        List<OrderModel> accountOrders = repo.findAllByAccountName(jwtService.extractUsername(authorization));

        for(OrderModel order : accountOrders){
            ObjectNode orderNode = mapper.createObjectNode();
            orderNode.put("orderNumber", order.getId());
            orderNode.set("visitedLocations", order.getVisitedLocations());
            orderNode.set("products", order.getProducts());
            orderNode.put("total", order.getTotal());

            result.add(orderNode);
        }

        return result;
    }

}
