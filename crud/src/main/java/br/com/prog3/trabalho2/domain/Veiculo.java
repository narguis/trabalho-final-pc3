package br.com.prog3.trabalho2.domain;

import jakarta.persistence.*;

@Entity
	public class Veiculo {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(length = 8, nullable = false)
	    private String placa;

	    @Column(length = 20, nullable = false)
	    private String cor;

	    @Column(nullable = false)
	    private Integer anoModelo;

	    @ManyToOne
	    @JoinColumn(name = "marca_id", nullable = false)
	    private Marca marca;

	    // Getters e Setters
}

