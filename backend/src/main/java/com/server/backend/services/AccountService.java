package com.server.backend.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.server.backend.models.AccountModel;
import com.server.backend.dto.LoginData;
import com.server.backend.dto.RegisterData;
import com.server.backend.repo.AccountRepo;
import com.server.backend.add_functionality.IDGenerate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    AccountRepo repo;

    public ObjectNode GetAccount(){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        //get id from jwt logged account functionality
        // dummy id ||
        //          \/
        int id = 13;
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
    public ObjectNode PostLoginData(LoginData loginDataObject){

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        String email = loginDataObject.getEmail();
        String password = loginDataObject.getPassword();

        //create jwt function to generate token and store it in cookie storage

        //After authentication setup add a check if login is successful
        // and return response accordingly

        result.put("message", "login successful");

        return result;
    }
    public ObjectNode PostRegisterData(RegisterData registerDataObject){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        String username = registerDataObject.getUsername();
        String email = registerDataObject.getEmail();
        String password = registerDataObject.getPassword();
        String telephone = registerDataObject.getTelephone();
        String address = registerDataObject.getAddress();

        int id = IDGenerate.idGenerate(username, email);

        AccountModel accountObj = new AccountModel();

        accountObj.setId(id);
        accountObj.setUsername(username);
        accountObj.setEmail(email);
        // hash password before saving !!!
        accountObj.setPassword(password);
        accountObj.setTelephone(telephone);
        accountObj.setAddress(address);

        repo.save(accountObj);

        result.put("message", "registered successfully");

        return result;
    }
    public ObjectNode IsUserAuthenticated(){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode result = mapper.createObjectNode();

        //create function to check if a user is logged in and authenticated
        // then fill the object with true or false depending on the result

        return result;
    }
}
