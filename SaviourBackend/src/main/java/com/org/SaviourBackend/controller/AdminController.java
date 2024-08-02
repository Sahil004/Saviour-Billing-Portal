package com.org.SaviourBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.org.SaviourBackend.dto.AdminDto;
import com.org.SaviourBackend.dto.LoginDto;
import com.org.SaviourBackend.response.LoginMessage;
import com.org.SaviourBackend.service.AdminService;

@CrossOrigin(origins = { "http://localhost:3000", "https://saviour-billing-portal-c7cx.vercel.app",
		"https://3cbc-2402-8100-3165-3263-ac63-738e-f054-545.ngrok-free.app" })
@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	public AdminController(AdminService adminService) {
		super();
		this.adminService = adminService;
	}

	@PostMapping(path = "/addAdmin")
	public String saveAdmin(@RequestBody AdminDto adminDto) {
		String id = adminService.addAdmin(adminDto);
		return id;
	}

	@PostMapping(path = "/login")
	public ResponseEntity<?> loginAdmin(@RequestBody LoginDto loginDto) {
		LoginMessage loginMessage = adminService.loginAdmin(loginDto);
		return ResponseEntity.ok(loginMessage);
	}

}
