import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'tf-cadastrar-veiculos',
  standalone: true,
  imports: [],
  templateUrl: './cadastrar-veiculos.component.html',
  styleUrl: './cadastrar-veiculos.component.css'
})
export class CadastrarVeiculosComponent {
  novoVeiculo: any = {};

  constructor(private apiService: ApiService) { }

  cadastrarVeiculo(): void {
    this.apiService.cadastrarVeiculo(this.novoVeiculo).subscribe(() => {
      this.novoVeiculo = {};
    });
  }
}