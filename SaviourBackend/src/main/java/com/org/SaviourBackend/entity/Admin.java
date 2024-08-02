package com.org.SaviourBackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {
	
	@Id
	@Column(name = "admin_id", length = 45)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long adminId;
	
	@Column(name = "admin_username", length = 45)
	private String adminUsername;
	
	@Column(name = "admin_email", length = 45)
	private String adminEmail;
	
	@Column(name = "admin_contact", length = 10)
	private Long adminContact;
	
	@Column(name = "admin_password")
	private String adminPassword;

	public Admin(Long adminId, String adminUsername, String adminEmail, long adminContact, String adminPassword) {
		super();
		this.adminId = adminId;
		this.adminUsername = adminUsername;
		this.adminEmail = adminEmail;
		this.adminContact = adminContact;
		this.adminPassword = adminPassword;
	}

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

	public String getAdminUsername() {
		return adminUsername;
	}

	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public long getAdminContact() {
		return adminContact;
	}

	public void setAdminContact(long adminContact) {
		this.adminContact = adminContact;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminUsername=" + adminUsername + ", adminEmail=" + adminEmail
				+ ", adminContact=" + adminContact + ", adminPassword=" + adminPassword + "]";
	}

}
