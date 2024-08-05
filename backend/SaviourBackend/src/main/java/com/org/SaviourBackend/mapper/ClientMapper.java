package com.org.SaviourBackend.mapper;

import com.org.SaviourBackend.dto.ClientDto;
import com.org.SaviourBackend.entity.Client;

public class ClientMapper {
	
	public static ClientDto mapToClientDto(Client client) {
		return new ClientDto(
				client.getId(),
				client.getName(),
				client.getEmail()
				);		
	}
	
	public static Client mapToClient(ClientDto clientDto) {
		return new Client(
				clientDto.getId(),
				clientDto.getName(),
				clientDto.getEmail()
				);
	}
}
