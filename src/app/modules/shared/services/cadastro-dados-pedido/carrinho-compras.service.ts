import { CarrrinhoProdutoRequest } from './../../models/carrinhoProdutoRequest';
import { Carrinho } from './../../models/carrinho';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Produto } from '../../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {

  baseUrl = `${environment.API_url}/Carrinhos`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Carrinho[]>{
    return this.http.get<Carrinho[]>(`${this.baseUrl}`);
  }
  getByClienteId(id: number): Observable<Carrinho[]>{
    return this.http.get<Carrinho[]>(`${this.baseUrl}/${id}/carrinho`);
  }
  getById(id: number): Observable<Carrinho>{
    return this.http.get<Carrinho>(`${this.baseUrl}/${id}`);
  }
  put(id: number,carrinho: Carrinho){
    console.log(id);
    console.log(carrinho);
    return this.http.put(`${this.baseUrl}/${id}`, carrinho).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(carrinho: Carrinho){
    return this.http.post(`${this.baseUrl}`, carrinho);
  }
  delete(id: number){
    return this.http.delete<Carrinho>(`${this.baseUrl}/${id}`);
  }
  addCarrinhoProdutos(clienteid: number,carrinhoProdutoRequest: CarrrinhoProdutoRequest){
    return this.http.post(`${this.baseUrl}/${clienteid}/carrinho`, carrinhoProdutoRequest);
  }
  getCarrinhoProdutos(clienteid: number){
    return this.http.get<CarrrinhoProdutoRequest>(`${this.baseUrl}/${clienteid}/cliente`);
  }
  excluirProdutoCarrinho(clienteid: number,produtoid: number){
    return this.http.delete<any>(`${this.baseUrl}/${clienteid}/carrinho?produtoId=${produtoid}`);
  }

}
