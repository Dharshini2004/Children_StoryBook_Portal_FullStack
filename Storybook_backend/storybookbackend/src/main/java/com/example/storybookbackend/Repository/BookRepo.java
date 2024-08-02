package com.example.storybookbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.storybookbackend.Model.Book;

public interface BookRepo extends JpaRepository<Book,Integer>{
    
}
