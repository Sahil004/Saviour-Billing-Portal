 package com.org.SaviourBackend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.org.SaviourBackend.dto.ClientDto;
import com.org.SaviourBackend.service.ClientService;

@CrossOrigin(origins = {
		"http://localhost:3000", 
		"https://saviour-billing-portal-c7cx.vercel.app", 
		"https://1e26-2402-8100-3001-c797-e0f0-286f-4604-11dd.ngrok-free.app"
		})
@RestController
@RequestMapping("/api/client")
public class ClientController {
	
	private ClientService clientService;

	public ClientController(ClientService clientService) {
		super();
		this.clientService = clientService;
	}
//	Build Add Client REST API
	@PostMapping
	public ResponseEntity<ClientDto> createClient(@RequestBody ClientDto clientDto){
		ClientDto savedClient = clientService.createClient(clientDto);
		return new ResponseEntity<>(savedClient, HttpStatus.CREATED);
	}
	 
//	Build Get Client REST APT
	@GetMapping("{id}")
	public ResponseEntity<ClientDto> getClientById(@PathVariable("id") Long clientId){
		ClientDto clientDto = clientService.getClientById(clientId);
		return ResponseEntity.ok(clientDto);
		
	}
	
//	Build Get All Client REST API
	@GetMapping
	public ResponseEntity<List<ClientDto>> getAllClient(){
		List<ClientDto> clients = clientService.getAllClient();
		return ResponseEntity.ok(clients);
	}
	
//	Build Update Client REST APT
	@PutMapping("{id}")
	public ResponseEntity<ClientDto> updateClient(@PathVariable("id") Long clientId, @RequestBody ClientDto updatedClient){
		ClientDto clientDto = clientService.updateClient(clientId, updatedClient);
		return ResponseEntity.ok(clientDto);
	}
	
//	Build Delete Client REST API 
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteClient(@PathVariable("id") Long clientId){
		clientService.deleteClient(clientId);
		return ResponseEntity.ok("Employee Deleted  Successfully!");
	}
	
}
