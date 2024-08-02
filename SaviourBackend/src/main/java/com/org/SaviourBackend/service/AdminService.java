package com.org.SaviourBackend.service;

import com.org.SaviourBackend.dto.AdminDto;
import com.org.SaviourBackend.dto.LoginDto;
import com.org.SaviourBackend.response.LoginMessage;

public interface AdminService {

	String addAdmin(AdminDto adminDto);

	LoginMessage loginAdmin(LoginDto loginDto);
	
}
