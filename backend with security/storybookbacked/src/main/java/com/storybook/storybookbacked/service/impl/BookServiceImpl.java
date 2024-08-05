package com.storybook.storybookbacked.service.impl;

import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;

import com.storybook.storybookbacked.dto.request.BookRequest;
import com.storybook.storybookbacked.dto.response.BookResponse;
import com.storybook.storybookbacked.model.Book;
import com.storybook.storybookbacked.repo.BookRepo;
import com.storybook.storybookbacked.service.BookService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepo bookRepo;

    @Override
    public BookResponse saveBook(BookRequest bookRequest) {
        System.out.println("BookRequest received in service: " + bookRequest); // Debugging statement
        Book book = Book.builder()
                .title(bookRequest.getTitle())
                .author(bookRequest.getAuthor())
                .publisher(bookRequest.getPublisher())
                .grade(bookRequest.getGrade())
                .price(bookRequest.getPrice())
                .genre(bookRequest.getGenre())
                .imageurl(bookRequest.getImageurl())
                .videourl(bookRequest.getVideourl())
                .description(bookRequest.getDescription())
                .build();
        
        Book savedBook = bookRepo.save(book);
        return mapToResponse(savedBook);
    }

    @Override
    public List<BookResponse> getAllBooks() {
        return bookRepo.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public BookResponse getBookById(int bookId) {
        Book book = bookRepo.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Book with id " + bookId + " not found"));
        return mapToResponse(book);
    }

    @Override
    public BookResponse updateBook(int bookId, BookRequest bookRequest) {
        Book existingBook = bookRepo.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Book with id " + bookId + " not found"));

        updateField(bookRequest.getTitle(), existingBook::setTitle);
        updateField(bookRequest.getAuthor(), existingBook::setAuthor);
        updateField(bookRequest.getPublisher(), existingBook::setPublisher);
        updateField(bookRequest.getGrade(), existingBook::setGrade);
        updateField(bookRequest.getPrice(), existingBook::setPrice);
        updateField(bookRequest.getGenre(), existingBook::setGenre);
        updateField(bookRequest.getImageurl(), existingBook::setImageurl);
        updateField(bookRequest.getVideourl(), existingBook::setVideourl);
        updateField(bookRequest.getDescription(), existingBook::setDescription);

        Book updatedBook = bookRepo.save(existingBook);
        return mapToResponse(updatedBook);
    }

    @Override
    public void deleteBook(int bookId) {
        Book book = bookRepo.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Book with id " + bookId + " not found"));
        bookRepo.delete(book);
    }

    private void updateField(@Nullable String newValue, Consumer<String> setter) {
        if (newValue != null) {
            setter.accept(newValue);
        }
    }

    private void updateField(@Nullable Long newValue, Consumer<Long> setter) {
        if (newValue != null) {
            setter.accept(newValue);
        }
    }

    private BookResponse mapToResponse(Book book) {
        return BookResponse.builder()
                .title(book.getTitle())
                .author(book.getAuthor())
                .publisher(book.getPublisher())
                .grade(book.getGrade())
                .price(book.getPrice())
                .genre(book.getGenre())
                .imageurl(book.getImageurl())
                .videourl(book.getVideourl())
                .description(book.getDescription())
                .build();
    }
}
