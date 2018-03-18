package com.example.vue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageCtrl {

    @GetMapping(value = "/")
    public String home() {
        return "index";
    }
}
