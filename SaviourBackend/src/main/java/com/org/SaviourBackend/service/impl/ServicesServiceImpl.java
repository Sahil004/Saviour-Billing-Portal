package com.org.SaviourBackend.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.org.SaviourBackend.dto.ServicesDto;
import com.org.SaviourBackend.entity.Services;
import com.org.SaviourBackend.exeption.ServicesNotFoundException;
import com.org.SaviourBackend.mapper.ServicesMapper;
import com.org.SaviourBackend.repository.ServicesRepository;
import com.org.SaviourBackend.service.ServicesService;

@Service
public class ServicesServiceImpl implements ServicesService {

	@Autowired
	private ServicesRepository servicesRepository;

	@Override
	public ServicesDto createService(ServicesDto servicesDto) {

		Services services = ServicesMapper.mapToServices(servicesDto);
		services.setDateAdded(LocalDateTime.now());
		services.setLastUpdated(LocalDateTime.now());
		Services savedServices = servicesRepository.save(services);
		return ServicesMapper.mapToServicesDto(savedServices);
	}

	@Override
	public List<ServicesDto> getAllServices() {
		List<Services> services = servicesRepository.findAll();
		return services.stream().map((service) -> ServicesMapper.mapToServicesDto(service))
				.collect(Collectors.toList());
	}

	@Override
	public ServicesDto getServiceById(Long serviceId) {
		Services services = servicesRepository.findById(serviceId)
				.orElseThrow(() -> new ServicesNotFoundException("Service Does not Exist" + serviceId));
		return ServicesMapper.mapToServicesDto(services);
	}

	@Override
	public ServicesDto updateService(Long serviceId, ServicesDto updateService) {
		Services services = servicesRepository.findById(serviceId)
				.orElseThrow(() -> new ServicesNotFoundException("Service Does not Exist" + serviceId));
		services.setServiceCode(updateService.getServiceCode());
		services.setServiceName(updateService.getServiceName());
		services.setServiceDescription(updateService.getServiceDescription());
		services.setCategory(updateService.getCategory());
		services.setRateType(updateService.getRateType());
		services.setPrice(updateService.getPrice());
		services.setLastUpdated(LocalDateTime.now());
		
		Services updatedServiceObj = servicesRepository.save(services);
		return ServicesMapper.mapToServicesDto(updatedServiceObj);
	}

	@Override
	public void deleteService(Long serviceId) {
		Services services = servicesRepository.findById(serviceId)
				.orElseThrow(() -> new ServicesNotFoundException("Service Does not Exist" + serviceId));
		
		servicesRepository.deleteById(serviceId);
		
	}

}
