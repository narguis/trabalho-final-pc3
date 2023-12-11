package br.com.prog3.trabalho2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.prog3.trabalho2.domain.Marca;
import br.com.prog3.trabalho2.domain.Veiculo;
import br.com.prog3.trabalho2.repository.MarcaRepository;

@Service
public class MarcaService {
	@Autowired
	private MarcaRepository marcarepository;
	
	public Marca save(Marca marca) {
		return marcarepository.save(marca);
	}
	public List<Marca> findAll(){
		return (List<Marca>) marcarepository.findAll();
		}
		public Optional<Marca> findById(Long id) {
		return marcarepository.findById(id);
		}
		public Marca update(Marca marca) {
		return marcarepository.save(marca);
		}
		public void deleteById(Long id) {
			marcarepository.deleteById(id);
	}
}
