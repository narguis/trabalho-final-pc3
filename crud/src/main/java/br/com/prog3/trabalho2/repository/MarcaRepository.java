package br.com.prog3.trabalho2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.prog3.trabalho2.domain.Marca;

import org.springframework.stereotype.*;
@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long> {
   
}
