import { TrocaRequest } from './../../models/TrocaRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  baseUrl = `${environment.API_url}/Pedidos`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Pedido>{
    return this.http.get<Pedido>(`${this.baseUrl}/${id}`);
  }
  put(id: number,pedido: Pedido){
    console.log(id);
    console.log(pedido);
    return this.http.put(`${this.baseUrl}/${id}`, pedido).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(pedido: Pedido){
    return this.http.post(`${this.baseUrl}`, pedido);
  }
  delete(id: number){
    return this.http.delete<Pedido>(`${this.baseUrl}/${id}`);
  }
  getPedidoporCliente(clienteId: number){
    return this.http.get<Pedido[]>(`${this.baseUrl}/${clienteId}/cliente`);
  }
  postTrocaporPedido(clienteId: number,request: TrocaRequest[]){
    return this.http.post(`${this.baseUrl}/${clienteId}/troca`,request);
  }
}
