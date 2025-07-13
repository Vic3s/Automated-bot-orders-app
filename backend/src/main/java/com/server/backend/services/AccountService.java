package com.server.backend.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.models.AccountModel;
import com.server.backend.dto.LoginData;
import com.server.backend.dto.RegisterData;
import com.server.backend.repo.AccountRepo;
import com.server.backend.add_functionality.IDGenerate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private ObjectMapper mapper = new ObjectMapper();

    @Autowired
    JWTService jwtService;

    @Autowired
    AccountRepo repo;

    @Autowired
    AuthenticationManager authManager;

    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

    public ObjectNode GetAccount(){
        ObjectNode result = mapper.createObjectNode();

        //get id from jwt logged account functionality
        // dummy id ||
        //          \/
        long id = 13;
        AccountModel acc = repo.findById(id).orElse(new AccountModel());

        // create a function to get the data from the
        // currently logged in account and fill object with data

        result.put("id", acc.getId());
        result.put("username", acc.getUsername());
        result.put("email", acc.getEmail());
        result.put("password", acc.getPassword());
        result.put("telephone", acc.getTelephone());
        result.put("address", acc.getAddress());

        return result;
    }
    public ObjectNode VerifyLoginData(LoginData loginDataObject){

        ObjectNode result = mapper.createObjectNode();
        Authentication authentication =
                authManager.authenticate(
                        new UsernamePasswordAuthenticationToken(loginDataObject.getUsername(), loginDataObject.getPassword()));

        if(authentication.isAuthenticated()){
            result.put("token", jwtService.GenerateJWT(loginDataObject.getUsername()));
            return result;
        }

        return result.put("Message", "Login Information Incorrect");
    }
    public ObjectNode PostRegisterData(RegisterData registerDataObject){
        ObjectNode result = mapper.createObjectNode();

        String username = registerDataObject.getUsername();
        String email = registerDataObject.getEmail();
        String password = registerDataObject.getPassword();
        String telephone = registerDataObject.getTelephone();
        String address = registerDataObject.getAddress();

        AccountModel account = new AccountModel();

        account.setId(IDGenerate.idGenerate());
        account.setUsername(username);
        account.setEmail(email);
        account.setPassword(passwordEncoder.encode(password));
        account.setTelephone(telephone);
        account.setAddress(address);

        repo.save(account);

        result.put("message", "account created successfully");

        return result;
    }
    public ObjectNode IsUserAuthenticated(String authorization){
        ObjectNode result = mapper.createObjectNode();

        String username = jwtService.extractUsername(authorization);

        if(repo.findByUsername(username) != null){
            result.put("isUserLogged", true);
            return result;
        }

        result.put("isUserLogged", false);
        return result;
    }
}
