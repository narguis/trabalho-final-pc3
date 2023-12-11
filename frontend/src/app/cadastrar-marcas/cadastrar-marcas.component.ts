import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'tf-cadastrar-marcas',
  standalone: true,
  imports: [],
  templateUrl: './cadastrar-marcas.component.html',
  styleUrl: './cadastrar-marcas.component.css'
})
export class CadastrarMarcasComponent {
  novaMarca: any = {};

  constructor(private apiService: ApiService) { }

  cadastrarMarca(): void {
    this.apiService.cadastrarMarca(this.novaMarca).subscribe(() => {
      this.novaMarca = {};
    });
  }
}
