package com.example.storybookbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.storybookbackend.Model.UserDetails;

public interface UserDetailsRepo extends JpaRepository<UserDetails,Integer>{
    
}
