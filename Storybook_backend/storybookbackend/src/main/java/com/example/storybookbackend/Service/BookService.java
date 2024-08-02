package com.example.storybookbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.storybookbackend.Model.Book;
import com.example.storybookbackend.Repository.BookRepo;

@Service
public class BookService {
    @Autowired
    BookRepo bookRepo;

    //post and create 
    public Book createbBookDetails(Book book)
    {
        return bookRepo.save(book);
    }

    //get
    public List<Book> getBookDetails()
    {
        return bookRepo.findAll();
    }

    //get by id
    public Book getBookById(int id)
    {
        return bookRepo.findById(id).orElse(null);
    }

    //update or put
    public boolean updateBookDetails(int id,Book book)
    {
        if(this.getBookById(id)==null)
        {
            return false;
        }
        try{
            bookRepo.save(book);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }

    //delete
    public boolean deleteBookDetails(int id)
    {
        if(this.getBookById(id)==null)
        {
            return false;
        }
        bookRepo.deleteById(id);
        return true;
    }
}
