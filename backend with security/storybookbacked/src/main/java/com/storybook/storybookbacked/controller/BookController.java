package com.storybook.storybookbacked.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.storybook.storybookbacked.dto.request.BookRequest;
import com.storybook.storybookbacked.dto.response.BookResponse;
import com.storybook.storybookbacked.service.BookService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/books")
@Tag(name = "Books", description = "Endpoints for managing books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @PostMapping("/add")
    @Operation(summary = "Add a new book", description = "Creates a new book entry.")
    public ResponseEntity<BookResponse> createBook(@RequestBody BookRequest bookRequest) {
        System.out.println("Received BookRequest: " + bookRequest); // Debugging
        BookResponse savedBook = bookService.saveBook(bookRequest);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    @Operation(summary = "Get all books", description = "Retrieves a list of all books.")
    public ResponseEntity<List<BookResponse>> getAllBooks() {
        List<BookResponse> books = bookService.getAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a book by ID", description = "Retrieves a book by its ID.")
    public ResponseEntity<BookResponse> getBookById(@PathVariable int id) {
        BookResponse book = bookService.getBookById(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update a book", description = "Updates the details of an existing book.")
    public ResponseEntity<BookResponse> updateBook(@PathVariable int id, @RequestBody BookRequest bookRequest) {
        BookResponse updatedBook = bookService.updateBook(id, bookRequest);
        return new ResponseEntity<>(updatedBook, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a book", description = "Deletes a book by its ID.")
    public ResponseEntity<Void> deleteBook(@PathVariable int id) {
        bookService.deleteBook(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


// package com.storybook.storybookbacked.controller;

// import java.util.List;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.storybook.storybookbacked.dto.request.BookRequest;
// import com.storybook.storybookbacked.dto.response.BookResponse;
// import com.storybook.storybookbacked.service.BookService;

// import io.swagger.v3.oas.annotations.Operation;
// import io.swagger.v3.oas.annotations.parameters.RequestBody;
// import io.swagger.v3.oas.annotations.tags.Tag;
// import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping("/api/books")
// @Tag(name = "Books", description = "Endpoints for managing books")
// @RequiredArgsConstructor
// public class BookController {

//     private final BookService bookService;

//     @PostMapping("/add")
//     @Operation(summary = "Add a new book", description = "Creates a new book entry.")
//     public ResponseEntity<BookResponse> createBook(@RequestBody BookRequest bookRequest) {
//     System.out.println("Received BookRequest: " + bookRequest); // Debugging
//     BookResponse savedBook = bookService.saveBook(bookRequest);
//     return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
//     }

//     // @PostMapping("/add")
//     // @Operation(summary = "Add a new book", description = "Creates a new book entry.")
//     // public ResponseEntity<BookResponse> createBook(@RequestBody BookRequest bookRequest) {
//     //     BookResponse savedBook = bookService.saveBook(bookRequest);
//     //     return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
//     // }

//     @GetMapping("/all")
//     @Operation(summary = "Get all books", description = "Retrieves a list of all books.")
//     public ResponseEntity<List<BookResponse>> getAllBooks() {
//         List<BookResponse> books = bookService.getAllBooks();
//         return new ResponseEntity<>(books, HttpStatus.OK);
//     }

//     @GetMapping("/{id}")
//     @Operation(summary = "Get a book by ID", description = "Retrieves a book by its ID.")
//     public ResponseEntity<BookResponse> getBookById(@PathVariable int id) {
//         BookResponse book = bookService.getBookById(id);
//         return new ResponseEntity<>(book, HttpStatus.OK);
//     }

//     @PutMapping("/{id}")
//     @Operation(summary = "Update a book", description = "Updates the details of an existing book.")
//     public ResponseEntity<BookResponse> updateBook(@PathVariable int id, @RequestBody BookRequest bookRequest) {
//         BookResponse updatedBook = bookService.updateBook(id, bookRequest);
//         return new ResponseEntity<>(updatedBook, HttpStatus.OK);
//     }

//     @DeleteMapping("/{id}")
//     @Operation(summary = "Delete a book", description = "Deletes a book by its ID.")
//     public ResponseEntity<Void> deleteBook(@PathVariable int id) {
//         bookService.deleteBook(id);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }
