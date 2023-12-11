import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'tf-listar-veiculos',
  standalone: true,
  imports: [],
  templateUrl: './listar-veiculos.component.html',
  styleUrl: './listar-veiculos.component.css'
})
export class ListarVeiculosComponent implements OnInit{

  veiculos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.apiService.listarVeiculos().subscribe(data => {
      this.veiculos = data || [];
    });
  }

  excluirVeiculo(id: number): void {
    this.apiService.excluirVeiculo(id).subscribe(() => {
      this.carregarVeiculos();
    });
  }

}
