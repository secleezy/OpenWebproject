package com.example.openwebproject_shoppingmall.repository;

import com.example.openwebproject_shoppingmall.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

}
