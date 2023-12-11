import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMarcasComponent } from './listar-marcas/listar-marcas.component';
import { ListarVeiculosComponent } from './listar-veiculos/listar-veiculos.component';
import { CadastrarMarcasComponent } from './cadastrar-marcas/cadastrar-marcas.component';
import { CadastrarVeiculosComponent } from './cadastrar-veiculos/cadastrar-veiculos.component';

const routes: Routes = [
  { path: 'listar-marcas', component: ListarMarcasComponent },
  { path: 'listar-veiculos', component: ListarVeiculosComponent },
  { path: 'cadastrar-marcas', component: CadastrarMarcasComponent },
  { path: 'cadastrar-veiculos', component: CadastrarVeiculosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }