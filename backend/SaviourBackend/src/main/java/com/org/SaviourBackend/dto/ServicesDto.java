package com.org.SaviourBackend.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;

public class ServicesDto {
	private Long serviceID;
	private String serviceCode;
	private String serviceName;
	private String serviceDescription;
	private String category;
	private String rateType;
	private BigDecimal price;
	private LocalDateTime dateAdded;
	private LocalDateTime lastUpdated;

//	Getters and Setters
	public Long getServiceID() {
		return serviceID;
	}

	public void setServiceID(Long serviceID) {
		this.serviceID = serviceID;
	}

	public String getServiceCode() {
		return serviceCode;
	}

	public void setServiceCode(String serviceCode) {
		this.serviceCode = serviceCode;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public String getServiceDescription() {
		return serviceDescription;
	}

	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getRateType() {
		return rateType;
	}

	public void setRateType(String rateType) {
		this.rateType = rateType;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public LocalDateTime getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(LocalDateTime dateAdded) {
		this.dateAdded = dateAdded;
	}

	public LocalDateTime getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(LocalDateTime lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

//	No-arguments Constructor
	public ServicesDto() {

	}

//	Constructor with parameters
	public ServicesDto(Long serviceID, String serviceCode, String serviceName, String serviceDescription,
			String category, String rateType, BigDecimal price, LocalDateTime dateAdded, LocalDateTime lastUpdated) {
		this.serviceID = serviceID;
		this.serviceCode = serviceCode;
		this.serviceName = serviceName;
		this.serviceDescription = serviceDescription;
		this.category = category;
		this.rateType = rateType;
		this.price = price;
		this.dateAdded = dateAdded;
		this.lastUpdated = lastUpdated;
	}

}
