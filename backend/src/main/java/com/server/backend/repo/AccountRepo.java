package com.server.backend.repo;

import com.server.backend.models.AccountModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepo extends MongoRepository<AccountModel, Long> {

    AccountModel findByUsername(String username);
}