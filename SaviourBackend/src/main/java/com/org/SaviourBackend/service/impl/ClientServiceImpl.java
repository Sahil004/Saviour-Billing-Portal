package com.org.SaviourBackend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.org.SaviourBackend.dto.ClientDto;
import com.org.SaviourBackend.entity.Client;
import com.org.SaviourBackend.exeption.ClientNotFoundException;
import com.org.SaviourBackend.mapper.ClientMapper;
import com.org.SaviourBackend.repository.ClientRepository;
import com.org.SaviourBackend.service.ClientService;

@Service
public class ClientServiceImpl implements ClientService{
	@Autowired
	private ClientRepository clientRepository;
	@Override
	public ClientDto createClient(ClientDto clientDto) {
		
		Client client=ClientMapper.mapToClient(clientDto);
		Client savedClient = clientRepository.save(client);
		return ClientMapper.mapToClientDto(savedClient);
	}
	
	public ClientDto getClientById(Long clientId) {
	Client client = clientRepository.findById(clientId)
		.orElseThrow(() -> 
			new ClientNotFoundException("Client Does not Exist"+clientId));
		return ClientMapper.mapToClientDto(client);
	}

	@Override
	public List<ClientDto> getAllClient() {
		List<Client> clients = clientRepository.findAll();
		return clients.stream().map((client) -> ClientMapper.mapToClientDto(client))
				.collect(Collectors.toList());
	}

	@Override
	public ClientDto updateClient(Long clientId, ClientDto updateClient) {

		Client client = clientRepository.findById(clientId).orElseThrow(() -> 
			new ClientNotFoundException("Client Does not Exist"+clientId));
		
		client.setName(updateClient.getName());
		client.setEmail(updateClient.getEmail());
		
		Client updatedClientObj = clientRepository.save(client);
		return ClientMapper.mapToClientDto(updatedClientObj);
	}

	@Override
	public void deleteClient(Long clientId) {

		Client client = clientRepository.findById(clientId).orElseThrow(() -> 
		new ClientNotFoundException("Client Does not Exist with given ID"+clientId));
		
		clientRepository.deleteById(clientId);
		
	}

}
