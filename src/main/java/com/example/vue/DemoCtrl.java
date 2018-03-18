package com.example.vue;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class DemoCtrl {

    @GetMapping("/public/demo/list")
    public List<String> getDemoList() {
        List<String> data = Arrays.asList("a", "b", "c", "d");
        return data;
    }
}
