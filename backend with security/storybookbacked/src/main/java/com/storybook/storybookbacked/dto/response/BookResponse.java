package com.storybook.storybookbacked.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookResponse {
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
