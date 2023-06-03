package com.example.openwebproject_shoppingmall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class OpenwebprojectShoppingmallApplication {

    public static void main(String[] args) {
        SpringApplication.run(OpenwebprojectShoppingmallApplication.class, args);
    }

}
