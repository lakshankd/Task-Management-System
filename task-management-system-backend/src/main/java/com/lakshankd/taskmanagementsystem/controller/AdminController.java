package com.lakshankd.taskmanagementsystem.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/admins")
@CrossOrigin("http://localhost:3000")
public class AdminController {

    @GetMapping
    public String helloAdminController() {
        return "Admin level access.";
    }
}
