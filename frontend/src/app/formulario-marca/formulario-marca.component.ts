import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-marca',
  templateUrl: './formulario-marca.component.html',
  styleUrls: ['./formulario-marca.component.css']
})
export class FormularioMarcasComponent {
  @Input() marca: any = {};
  @Output() salvar = new EventEmitter<any>();

  salvarMarca(): void {
    this.salvar.emit(this.marca);
  }
}