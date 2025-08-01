package com.server.backend.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.RegisterData;
import com.server.backend.services.AccountService;
import com.server.backend.services.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.server.backend.dto.LoginData;
import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {

    @Autowired
    private AccountService accountService;



    public AccountController(AccountService accountService){
        this.accountService = accountService;
    }

    @GetMapping("/get-account")
    public ResponseEntity<ObjectNode> GetAccount(){
        ObjectNode response = accountService.GetAccount();

        return ResponseEntity.ok(response);
    }
    @PostMapping("/post-login-data")
    public ResponseEntity<ObjectNode> PostLoginData(@RequestBody LoginData body) {
        return ResponseEntity.ok(accountService.VerifyLoginData(body));
    }
    @PostMapping("/post-register-data")
    public ResponseEntity<ObjectNode> PostRegisterData(@RequestBody RegisterData body) {
        ObjectNode response = accountService.PostRegisterData(body);

        return ResponseEntity.ok(response);
    }
    @GetMapping("/is-user-authenticated")
    ResponseEntity<ObjectNode> IsUserAuthenticated(@RequestHeader("Authorization") String authorizationHeader){
        ObjectNode response = accountService.IsUserAuthenticated(authorizationHeader);

        return ResponseEntity.ok(response);
    }
}
