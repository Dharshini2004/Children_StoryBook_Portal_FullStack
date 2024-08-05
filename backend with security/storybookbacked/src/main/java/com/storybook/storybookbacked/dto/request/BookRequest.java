package com.storybook.storybookbacked.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookRequest {
    private String title;
    private String author;
    private String publisher;
    private String grade;
    private Long price;
    private String genre;
    private String imageurl;
    private String videourl;
    private String description;
}
