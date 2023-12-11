package br.com.prog3.trabalho2.resources;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.prog3.trabalho2.domain.Marca;
import br.com.prog3.trabalho2.domain.Veiculo;
import br.com.prog3.trabalho2.service.MarcaService;

@RestController
@RequestMapping("/api/veiculos")
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
public class MarcaResource {
	@Autowired
	private MarcaService marcaservice;
	
	@PostMapping
	public Marca save(@RequestBody Marca veiculo) {
		return marcaservice.save(veiculo);
	}
	
	@GetMapping
	public List<Marca> findAll(){
	return marcaservice.findAll();
}
	@GetMapping(path = {"/{id}"})
		public Optional<Marca> findById(@PathVariable("id") Long id){
		return marcaservice.findById(id);
	}
	@PutMapping(value="/{id}")
	public Marca update(@PathVariable("id") Long id, @RequestBody Marca marca) {
		Optional<Marca> optional = marcaservice.findById(id);
		if(optional.isPresent()) {
		Marca m = optional.get();
		m.setSigla(marca.getSigla());
		m.setDescricao(marca.getDescricao());
		marcaservice.update(m);
		return m;
		}else {
		throw new RuntimeException("Não foi possível alterar o registro");
		}
		}
		@DeleteMapping(path ={"/{id}"})
		public void delete(@PathVariable("id") Long id) {
		marcaservice.deleteById(id);
		}
}