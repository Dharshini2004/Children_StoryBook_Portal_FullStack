package com.storybook.storybookbacked.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/sample")
public class SampleController {
    @GetMapping("path")
    public String getMethodName() {
        return "public endpoint";
    }

}
