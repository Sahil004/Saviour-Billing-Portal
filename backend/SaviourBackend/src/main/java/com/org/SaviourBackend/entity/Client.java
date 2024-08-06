package com.org.SaviourBackend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "client")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long clientId;

	@Column(name = "client_name", nullable = false)
	private String clientName;

	@Column(name = "client_email", nullable = false, unique = true)
	private String clientEmail;

	@Column(name = "client_phone", nullable = false)
	private String clientPhone;

	@Column(name = "client_address", nullable = false)
	private String clientAddress;

	@Column(name = "client_company", nullable = false)
	private String clientCompany;

	@Column(name = "client_industry", nullable = false)
	private String clientIndustry;

	@Column(name = "client_added_date", updatable = false, nullable = false)
	private LocalDateTime clientAddedDate;

	@Column(name = "client_updated_date", nullable = false)
	private LocalDateTime clientUpdatedDate;

	@Column(name = "status", nullable = false)
	private String status;

	public Long getClinetId() {
		return clientId;
	}

	public void setClinetId(Long clinetId) {
		this.clientId = clinetId;
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

	@PrePersist
	protected void onCreate() {
		clientAddedDate = LocalDateTime.now();
		status = "ACTIVE"; // Default status
	}

	@PreUpdate
	protected void onUpdate() {
		clientUpdatedDate = LocalDateTime.now();
	}

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Client(Long clientId, String clientName, String clientEmail, String clientPhone, String clientAddress,
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
