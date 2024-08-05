package com.storybook.storybookbacked.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.storybook.storybookbacked.model.Website;


public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}
