package com.lakshankd.taskmanagementsystem.controller;

import com.lakshankd.taskmanagementsystem.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin("http://localhost:3000")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping
    public String helloUserController() {
        return "User level controller.";
    }
    
}
