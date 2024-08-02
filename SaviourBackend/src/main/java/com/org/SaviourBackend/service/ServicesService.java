package com.org.SaviourBackend.service;

import java.util.List;

import com.org.SaviourBackend.dto.ServicesDto;

public interface ServicesService {
	
//	Create service
	ServicesDto createService(ServicesDto servicesDto);
	
// Retrieve all services
	List<ServicesDto> getAllServices();
	
//	Retrieve Service by ID
	ServicesDto getServiceById(Long serviceId);
	
//	Update Services
	ServicesDto updateService(Long serviceId, ServicesDto updateService);
	
//	Delete Services
	void deleteService(Long serviceId);
}
