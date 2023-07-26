package com.lakshankd.taskmanagementsystem.service;

import com.lakshankd.taskmanagementsystem.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
