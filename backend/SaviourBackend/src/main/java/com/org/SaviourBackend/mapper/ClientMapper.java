package com.org.SaviourBackend.mapper;

import com.org.SaviourBackend.dto.ClientDto;
import com.org.SaviourBackend.entity.Client;

public class ClientMapper {
	
	public static ClientDto mapToClientDto(Client client) {
		return new ClientDto(
				client.getClinetId(),
				client.getClientName(),
				client.getClientEmail(),
				client.getClientPhone(),
				client.getClientAddress(),
				client.getClientCompany(),
				client.getClientIndustry(),
				client.getClientAddedDate(),
				client.getClientUpdatedDate(),
				client.getStatus()
				);		
	}
	
	public static Client mapToClient(ClientDto clientDto) {
		return new Client(
				clientDto.getClientId(),
				clientDto.getClientName(),
				clientDto.getClientEmail(),
				clientDto.getClientPhone(),
				clientDto.getClientAddress(),
				clientDto.getClientCompany(),
				clientDto.getClientIndustry(),
				clientDto.getClientAddedDate(),
				clientDto.getClientUpdatedDate(),
				clientDto.getStatus()
				);
	}
}
