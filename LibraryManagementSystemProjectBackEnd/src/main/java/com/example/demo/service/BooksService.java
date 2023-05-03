package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Books;
@Service
public interface BooksService {
	public Books getBooksById(int id);
	public Books addBook(Books e);
	public List<Books>findAllBook();
	public Books updateBook(Books e);
	public String deleteById(int id);

}
