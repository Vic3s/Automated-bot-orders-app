package com.server.backend.repo;

import com.server.backend.models.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<ProductModel, Integer> {
}
