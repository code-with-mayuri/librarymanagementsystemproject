package com.example.demo.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.Librarian;

@Service
public interface LibrarianService {
	public List<Librarian>findAllLibrarian();
	public Librarian addLibrarian(Librarian l);
	public Librarian getLibrarianById(int id);
	public Librarian updateLibrarian(Librarian b);
	public String deleteById(int id);
	public Librarian findByUsername(String name) ;
	public ResponseEntity<?> loginLibrarian(@RequestBody Librarian librarianData) ;

}
