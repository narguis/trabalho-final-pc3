package br.com.prog3.trabalho2.resources;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.prog3.trabalho2.domain.Veiculo;
import br.com.prog3.trabalho2.service.VeiculoService;

@RestController
@RequestMapping("/api/veiculos")
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
public class VeiculoResource {
	@Autowired
	private VeiculoService veiculoservice;
	
	@PostMapping
	public Veiculo save(@RequestBody Veiculo veiculo) {
		return veiculoservice.save(veiculo);
	}
	
	@GetMapping
		public List<Veiculo> findAll(){
		return veiculoservice.findAll();
	}
	@GetMapping(path = {"/{id}"})
		public Optional<Veiculo> findById(@PathVariable("id") Long id){
		return veiculoservice.findById(id);
	}
	@PutMapping(value="/{id}")
	public Veiculo update(@PathVariable("id") Long id, @RequestBody Veiculo veiculo) {
		Optional<Veiculo> optional = veiculoservice.findById(id);
		if(optional.isPresent()) {
		Veiculo v = optional.get();
		v.setPlaca(veiculo.getPlaca());
		v.setCor(veiculo.getCor());
		v.setAnoModelo(veiculo.getAnoModelo());
		v.setMarca(veiculo.getMarca());
		veiculoservice.update(v);
		return v;
		}else {
		throw new RuntimeException("Não foi possível alterar o registro");
		}
		}
		@DeleteMapping(path ={"/{id}"})
		public void delete(@PathVariable("id") Long id) {
		veiculoservice.deleteById(id);
		}
}