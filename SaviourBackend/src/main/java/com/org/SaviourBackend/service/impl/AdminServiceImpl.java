package com.org.SaviourBackend.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.org.SaviourBackend.dto.AdminDto;
import com.org.SaviourBackend.dto.LoginDto;
import com.org.SaviourBackend.entity.Admin;
import com.org.SaviourBackend.repository.AdminRepository;
import com.org.SaviourBackend.response.LoginMessage;
import com.org.SaviourBackend.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public String addAdmin(AdminDto adminDto) {
		Admin admin = new Admin(
				adminDto.getAdminId(),
				adminDto.getAdminUsername(),
				adminDto.getAdminEmail(),
				adminDto.getAdminContact(),
				this.passwordEncoder.encode(adminDto.getAdminPassword())
				);
		adminRepository.save(admin);
		
		return admin.getAdminUsername();
	}

	@Override
	public LoginMessage loginAdmin(LoginDto loginDto) {

		String msg = "";
		Admin admin1 = adminRepository.findByAdminEmail(loginDto.getAdminEmail());
		
		if(admin1 != null) {
			String password = loginDto.getAdminPassword();
			String encodedPassword = admin1.getAdminPassword();
			boolean isPasswordRight = passwordEncoder.matches(password, encodedPassword);
			if(isPasswordRight) {
				Optional<Admin> admin = adminRepository.findOneByAdminEmailAndAdminPassword(loginDto.getAdminEmail(), encodedPassword);
				if(admin.isPresent()) {
					return new LoginMessage("Login Success", true);
				} else {
					return new LoginMessage("Login Failed", false);
				}
			} else {
				return new LoginMessage("Password Not Match", false);
			}
		} else {
			return new LoginMessage("Email Not exist", false);

		}
	}
}
