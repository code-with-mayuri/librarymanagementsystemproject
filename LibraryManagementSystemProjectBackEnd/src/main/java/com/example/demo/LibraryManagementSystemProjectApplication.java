package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
@EnableAutoConfiguration
public class LibraryManagementSystemProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryManagementSystemProjectApplication.class, args);
	}

}
