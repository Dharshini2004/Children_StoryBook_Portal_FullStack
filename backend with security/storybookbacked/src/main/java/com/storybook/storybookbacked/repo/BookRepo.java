package com.storybook.storybookbacked.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.storybook.storybookbacked.model.Book;

public interface BookRepo extends JpaRepository<Book, Integer> {
}
