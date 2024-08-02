package com.example.storybookbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.storybookbackend.Model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer>{
    
}
