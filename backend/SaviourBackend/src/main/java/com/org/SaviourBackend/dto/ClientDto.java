package com.org.SaviourBackend.dto;

import java.time.LocalDateTime;


public class ClientDto {
	private Long clientId;
	private String clientName;
	private String clientEmail;
	private String clientPhone;
	private String clientAddress;
	private String clientCompany;
	private String clientIndustry;
	private LocalDateTime clientAddedDate;
	private LocalDateTime clientUpdatedDate;
	private String status;
	public Long getClientId() {
		return clientId;
	}
	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getClientEmail() {
		return clientEmail;
	}
	public void setClientEmail(String clientEmail) {
		this.clientEmail = clientEmail;
	}
	public String getClientPhone() {
		return clientPhone;
	}
	public void setClientPhone(String clientPhone) {
		this.clientPhone = clientPhone;
	}
	public String getClientAddress() {
		return clientAddress;
	}
	public void setClientAddress(String clientAddress) {
		this.clientAddress = clientAddress;
	}
	public String getClientCompany() {
		return clientCompany;
	}
	public void setClientCompany(String clientCompany) {
		this.clientCompany = clientCompany;
	}
	public String getClientIndustry() {
		return clientIndustry;
	}
	public void setClientIndustry(String clientIndustry) {
		this.clientIndustry = clientIndustry;
	}
	public LocalDateTime getClientAddedDate() {
		return clientAddedDate;
	}
	public void setClientAddedDate(LocalDateTime clientAddedDate) {
		this.clientAddedDate = clientAddedDate;
	}
	public LocalDateTime getClientUpdatedDate() {
		return clientUpdatedDate;
	}
	public void setClientUpdatedDate(LocalDateTime clientUpdatedDate) {
		this.clientUpdatedDate = clientUpdatedDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public ClientDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ClientDto(Long clientId, String clientName, String clientEmail, String clientPhone, String clientAddress,
			String clientCompany, String clientIndustry, LocalDateTime clientAddedDate, LocalDateTime clientUpdatedDate,
			String status) {
		super();
		this.clientId = clientId;
		this.clientName = clientName;
		this.clientEmail = clientEmail;
		this.clientPhone = clientPhone;
		this.clientAddress = clientAddress;
		this.clientCompany = clientCompany;
		this.clientIndustry = clientIndustry;
		this.clientAddedDate = clientAddedDate;
		this.clientUpdatedDate = clientUpdatedDate;
		this.status = status;
	}
	
	
}
