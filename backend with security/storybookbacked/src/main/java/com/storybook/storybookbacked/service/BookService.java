package com.storybook.storybookbacked.service;

import java.util.List;
import com.storybook.storybookbacked.dto.request.BookRequest;
import com.storybook.storybookbacked.dto.response.BookResponse;

public interface BookService {
    BookResponse saveBook(BookRequest bookRequest);
    List<BookResponse> getAllBooks();
    BookResponse getBookById(int bookId);
    BookResponse updateBook(int bookId, BookRequest bookRequest);
    void deleteBook(int bookId);
}
