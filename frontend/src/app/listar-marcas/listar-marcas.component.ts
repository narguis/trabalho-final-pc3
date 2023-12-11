import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'tf-listar-marcas',
  standalone: true,
  imports: [],
  templateUrl: './listar-marcas.component.html',
  styleUrl: './listar-marcas.component.css'
})
export class ListarMarcasComponent implements OnInit {
  marcas: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.carregarMarcas();
  }

  carregarMarcas(): void {
    this.apiService.listarMarcas().subscribe(data => {
      this.marcas = data || [];
    });
  }

  excluirMarca(id: number): void {
    this.apiService.excluirMarca(id).subscribe(() => {
      this.carregarMarcas();
    });
  }
}
