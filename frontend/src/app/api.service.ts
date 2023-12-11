import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5448'

  constructor(private http: HttpClient) { }

  listarMarcas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/marcas`);
  }

  cadastrarMarca(marca: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/marcas`, marca);
  }

  atualizarMarca(id: number, marca: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/api/marcas/${id}`, marca);
  }

  excluirMarca(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/api/marcas/${id}`);
  }

  listarVeiculos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/veiculos`);
  }

  cadastrarVeiculo(veiculo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/veiculos`, veiculo);
  }

  atualizarVeiculo(id: number, veiculo: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/api/veiculos/${id}`, veiculo);
  }

  excluirVeiculo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/api/veiculos/${id}`);
  }


}
