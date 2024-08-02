package com.org.SaviourBackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.org.SaviourBackend.entity.Admin;

@EnableJpaRepositories
@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	
	Optional<Admin> findOneByAdminEmailAndAdminPassword(String adminEmail, String adminPassword);
	Admin findByAdminEmail(String adminEmail);

}
