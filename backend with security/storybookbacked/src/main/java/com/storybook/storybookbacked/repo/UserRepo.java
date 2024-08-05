package com.storybook.storybookbacked.repo;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.storybook.storybookbacked.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}