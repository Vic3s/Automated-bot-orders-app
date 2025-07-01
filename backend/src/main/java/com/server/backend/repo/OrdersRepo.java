package com.server.backend.repo;

import com.server.backend.models.OrderModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersRepo extends MongoRepository<OrderModel, Long> {
}
