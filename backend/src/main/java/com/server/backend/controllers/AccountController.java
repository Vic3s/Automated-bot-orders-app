package com.server.backend.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.dto.RegisterData;
import com.server.backend.services.AccountService;
import org.springframework.http.ResponseEntity;
import com.server.backend.dto.LoginData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    public final AccountService accountService;

    public AccountController(AccountService accountService){
        this.accountService = accountService;
    }

    @GetMapping("/get-account")
    public ResponseEntity<ObjectNode> GetAccount(){
        ObjectNode response = accountService.GetAccount();

        return ResponseEntity.ok(response);
    }
    @PostMapping("/post-login-data")
    public ResponseEntity<Object> PostLoginData(@RequestBody LoginData body) {
        ObjectNode response = accountService.PostLoginData(body);

        return ResponseEntity.ok(response);
    }
    @PostMapping("/post-register-data")
    public ResponseEntity<Object> PostRegisterData(@RequestBody RegisterData body) {
        ObjectNode response = accountService.PostRegisterData(body);

        return ResponseEntity.ok(response);
    }
    @GetMapping("/is-user-authenticated")
    ResponseEntity<ObjectNode> IsUserAuthenticated(){
        ObjectNode response = accountService.IsUserAuthenticated();

        return ResponseEntity.ok(response);
    }
}
