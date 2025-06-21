package com.server.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.RegisterData;
import org.springframework.http.ResponseEntity;
import com.server.backend.dto.LoginData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/get-account")
    public ResponseEntity<ObjectNode> GetAccount(){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();

        // create a function to get the data from the
        // currently logged in account and fill object with data

        return ResponseEntity.ok(response);
    }
    @PostMapping("/post-login-data")
    public ResponseEntity<Object> PostLoginData(@RequestBody LoginData body) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();

        String email = body.getEmail();
        String password = body.getPassword();

        //create jwt function to generate token and store it in cookie storage

        response.put("message", "login successful");

        return ResponseEntity.ok(response);

    }
    @PostMapping("/post-register-data")
    public ResponseEntity<Object> PostRegisterData(@RequestBody RegisterData body) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();

        String username = body.getUsername();
        String email = body.getEmail();
        String password = body.getPassword();
        String telephone = body.getTelephone();
        String address = body.getAddress();

        //create functionality to store the user in DB and create the user an id

        response.put("message", "registered successfully");

        return ResponseEntity.ok(response);

    }
    @GetMapping("/is-user-authenticated")
    ResponseEntity<ObjectNode> IsUserAuthenticated(){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode response = mapper.createObjectNode();

        //create function to check if a user is logged in and authenticated

        // then fill the object with true or false depending on the result

        return ResponseEntity.ok(response);
    }
}
