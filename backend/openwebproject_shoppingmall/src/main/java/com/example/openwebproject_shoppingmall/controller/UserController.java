package com.example.openwebproject_shoppingmall.controller;

import com.example.openwebproject_shoppingmall.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private List<User> users = new ArrayList<>();

    @PostMapping
    public User createUser(@RequestBody User newUser) {
        users.add(newUser);
        return newUser;
    }

    @GetMapping
    public List<User> getUsers() {
        return users;
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") int id) {
        return users.stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable("id") int id, @RequestBody User updatedUser) {
        users.stream()
                .filter(user -> user.getId() == id)
                .forEach(user -> {
                    user.setName(updatedUser.getName());
                    user.setEmail(updatedUser.getEmail());
                });
        return updatedUser;
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        users.removeIf(user -> user.getId() == id);
        return "User id " + id + " has been removed.";
    }
}
