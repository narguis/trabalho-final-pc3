import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-veiculo',
  templateUrl: './formulario-veiculo.component.html',
  styleUrls: ['./formulario-veiculo.component.css']
})
export class FormularioVeiculoComponent {
  @Input() veiculo: any = {};
  @Output() salvar = new EventEmitter<any>();

  salvarVeiculo(): void {
    this.salvar.emit(this.veiculo);
  }
}
