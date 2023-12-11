package br.com.prog3.trabalho2.domain;

import jakarta.persistence.*;

@Entity
public class Marca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 5, nullable = false)
    private String sigla;

    @Column(length = 50, nullable = false)
    private String descricao;

    // Getters e Setters
}
