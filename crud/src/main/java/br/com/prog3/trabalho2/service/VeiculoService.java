package br.com.prog3.trabalho2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;

import br.com.prog3.trabalho2.domain.Veiculo;
import br.com.prog3.trabalho2.repository.VeiculoRepository;

@Service
public class VeiculoService {
	@Autowired
	private VeiculoRepository veiculorepository;
	
	public Veiculo save(Veiculo veiculo) {
		return veiculorepository.save(veiculo);
	}
	
	public List<Veiculo> findAll(){
		return (List<Veiculo>) veiculorepository.findAll();
		}
		public Optional<Veiculo> findById(Long id) {
		return veiculorepository.findById(id);
		}
		public Veiculo update(Veiculo veiculo) {
		return veiculorepository.save(veiculo);
		}
		public void deleteById(Long id) {
			veiculorepository.deleteById(id);
	}
}
