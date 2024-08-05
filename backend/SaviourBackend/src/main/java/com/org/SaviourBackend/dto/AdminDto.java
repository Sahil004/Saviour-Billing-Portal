package com.org.SaviourBackend.dto;

public class AdminDto {
	
	private Long adminId;
	private String adminUsername;
	private String adminEmail;
	private Long adminContact;
	private String adminPassword;
	public AdminDto(Long adminId, String adminUsername, String adminEmail, long adminContact, String adminPassword) {
		super();
		this.adminId = adminId;
		this.adminUsername = adminUsername;
		this.adminEmail = adminEmail;
		this.adminContact = adminContact;
		this.adminPassword = adminPassword;
	}
	public AdminDto() {
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
		return "AdminDto [adminId=" + adminId + ", adminUsername=" + adminUsername + ", adminEmail=" + adminEmail
				+ ", adminContact=" + adminContact + ", adminPassword=" + adminPassword + "]";
	}
}
