package com.example.storybookbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.storybookbackend.Model.Book;
import com.example.storybookbackend.Service.BookService;

@RestController
public class BookController {
    @Autowired
    BookService bookService;

    //post
    @PostMapping("/addbook")
    public ResponseEntity<Book> addbook(@RequestBody Book book)
    {
        Book b=bookService.createbBookDetails(book);
        return new ResponseEntity<>(b,HttpStatus.CREATED);
    }

    //get
    @GetMapping("/getbookdata")
    public ResponseEntity<java.util.List<Book>> showbookdetails()
    {
        return new ResponseEntity<>(bookService.getBookDetails(),HttpStatus.OK);
    }

    //UPDATE
    @PutMapping("/putbookdata/{id}")
    public ResponseEntity<Book> updateUserDetails(@PathVariable("id") int id,@RequestBody Book book )
    {   
        if(bookService.updateBookDetails(id, book)==true)
        {

            return new ResponseEntity<>(book,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    //DELETE
    @DeleteMapping("/deletebookdata/{id}")
    public ResponseEntity<Boolean> deleteuserdata(@PathVariable("id") int id)
    {
        if(bookService.deleteBookDetails(id)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
