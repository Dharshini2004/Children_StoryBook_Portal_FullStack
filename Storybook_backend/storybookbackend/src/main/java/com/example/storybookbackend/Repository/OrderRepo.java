package com.example.storybookbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.storybookbackend.Model.OrderDetails;

public interface OrderRepo extends JpaRepository<OrderDetails,Integer>{
   
}
