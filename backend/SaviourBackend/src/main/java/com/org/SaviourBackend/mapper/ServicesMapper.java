package com.org.SaviourBackend.mapper;

import com.org.SaviourBackend.dto.ServicesDto;
import com.org.SaviourBackend.entity.Services;

public class ServicesMapper {
	
	public static ServicesDto mapToServicesDto(Services services) {
		return new ServicesDto(
				services.getServiceID(),
				services.getServiceCode(),
				services.getServiceName(),
				services.getServiceDescription(),
				services.getCategory(),
				services.getRateType(),
				services.getPrice(),
				services.getDateAdded(),
				services.getLastUpdated());
	}
	
	public static Services mapToServices(ServicesDto servicesDto) {
		return new Services(
				servicesDto.getServiceID(),
				servicesDto.getServiceCode(),
				servicesDto.getServiceName(),
				servicesDto.getServiceDescription(),
				servicesDto.getCategory(),
				servicesDto.getRateType(),
				servicesDto.getPrice(),
				servicesDto.getDateAdded(),
				servicesDto.getLastUpdated());
	}

}
