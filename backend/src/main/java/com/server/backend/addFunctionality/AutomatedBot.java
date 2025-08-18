package com.server.backend.addFunctionality;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.server.backend.dto.OrderProduct;
import org.springframework.security.core.parameters.P;

import java.util.ArrayList;
import java.util.Arrays;

public class AutomatedBot {

    private static ArrayList<Integer> botLocation = new ArrayList<>(Arrays.asList(0,0));

    public static ArrayList<ArrayList<Integer>> calculateBotPath(ArrayList<OrderProduct> products){

        ArrayList<ArrayList<Integer>> botPath = new ArrayList<>();
        ArrayList<Integer> botLocation = new ArrayList<>(Arrays.asList(0, 0)); // start at (0,0)
        ArrayList<OrderProduct> productsList = new ArrayList<>(products); // copy to avoid messing with original

        botPath.add(new ArrayList<>(botLocation));

        while (!productsList.isEmpty()) {
            int minDistance = Integer.MAX_VALUE;
            OrderProduct closestProduct = null;

            for (OrderProduct product : productsList) {
                ArrayList<Integer> loc = product.getLocation();
                int distance = Math.abs(loc.get(0) - botLocation.get(0)) + Math.abs(loc.get(1) - botLocation.get(1));
                if (distance < minDistance) {
                    minDistance = distance;
                    closestProduct = product;
                }
            }

            if (closestProduct != null) {
                botLocation.set(0, closestProduct.getLocation().get(0));
                botLocation.set(1, closestProduct.getLocation().get(1));
                botPath.add(new ArrayList<>(botLocation));
                productsList.remove(closestProduct);
            }
        }

        // return to start
        botPath.add(new ArrayList<>(Arrays.asList(0, 0)));

        return botPath;
    }
}
