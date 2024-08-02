package com.example.storybookbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.storybookbackend.Model.Purchase;

public interface PurchaseRepo extends JpaRepository<Purchase,Integer>{
    
}
