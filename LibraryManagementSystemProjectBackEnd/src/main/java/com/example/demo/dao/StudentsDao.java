package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Students;



public interface StudentsDao extends JpaRepository<Students, Integer>{

}
