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

import com.org.SaviourBackend.dto.ServicesDto;
import com.org.SaviourBackend.service.ServicesService;

@CrossOrigin(origins = {
		"http://localhost:3000", 
		"https://saviour-billing-portal-c7cx.vercel.app", 
		"https://1e26-2402-8100-3001-c797-e0f0-286f-4604-11dd.ngrok-free.app"
		})
@RestController
@RequestMapping("/api/services")
public class ServicesController {
	
	private ServicesService servicesService;

	public ServicesController(ServicesService servicesService) {
		super();
		this.servicesService = servicesService;
	}
	
	@PostMapping
	public ResponseEntity<ServicesDto> createServices(@RequestBody ServicesDto servicesDto) {
		ServicesDto createdServices = servicesService.createService(servicesDto);
		return new ResponseEntity<>(createdServices, HttpStatus.CREATED );
	}
	
	@GetMapping 
	public ResponseEntity<List<ServicesDto>> getAllServices(){
		List<ServicesDto> services = servicesService.getAllServices();
		return ResponseEntity.ok(services);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<ServicesDto> getServicById(@PathVariable("id") Long servicesId){
		ServicesDto servicesDto = servicesService.getServiceById(servicesId);
		return ResponseEntity.ok(servicesDto);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<ServicesDto> updateService(@PathVariable("id") Long servicesId, @RequestBody ServicesDto updateService){
		ServicesDto servicesDto = servicesService.updateService(servicesId, updateService);
		return ResponseEntity.ok(servicesDto);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteService(@PathVariable("id") Long servicesId){
		servicesService.deleteService(servicesId);
		return ResponseEntity.ok("Service Delete Successfully");
	}

}
