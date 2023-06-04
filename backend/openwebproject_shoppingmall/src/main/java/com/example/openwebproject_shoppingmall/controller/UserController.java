package com.example.openwebproject_shoppingmall.controller;

import com.example.openwebproject_shoppingmall.model.User;
import com.example.openwebproject_shoppingmall.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return ResponseEntity.ok().body("You has been logged out");
    }

}
