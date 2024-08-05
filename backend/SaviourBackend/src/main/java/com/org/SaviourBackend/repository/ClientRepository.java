package com.org.SaviourBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.SaviourBackend.entity.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{

}
