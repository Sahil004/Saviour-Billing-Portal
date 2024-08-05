package com.org.SaviourBackend.service;

import java.util.List;

import com.org.SaviourBackend.dto.ClientDto;

public interface ClientService {
	ClientDto createClient(ClientDto clientDto);
	
	ClientDto getClientById(Long clientId);
	
	List<ClientDto> getAllClient();
	
	ClientDto updateClient(Long clientId, ClientDto updateClient);
	
	void deleteClient(Long clientId);
}
