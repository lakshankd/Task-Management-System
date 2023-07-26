package com.lakshankd.taskmanagementsystem.controller;

import com.lakshankd.taskmanagementsystem.service.UserService;
import org.springframework.stereotype.Controller;

@Controller
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
}
