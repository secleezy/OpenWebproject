package com.example.openwebproject_shoppingmall.controller;

import com.example.openwebproject_shoppingmall.model.User;
import com.example.openwebproject_shoppingmall.service.UserService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.signup(user.getId(), user.getName(), user.getEmail(), user.getPassword());
    }

    @PostMapping("/signin")
    public User signin(@RequestBody User user) {
        return userService.signin(user.getId(), user.getPassword());
    }
}
