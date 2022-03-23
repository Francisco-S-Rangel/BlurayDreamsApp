import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from '../../models/produto';
import { catchError, Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = `${environment.API_url}/Produtos`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }
  put(id: number,produto: Produto){
    console.log(id);
    console.log(produto);
    return this.http.put(`${this.baseUrl}/${id}`, produto).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(produto: Produto){
    return this.http.post(`${this.baseUrl}`, produto);
  }
  delete(id: number){
    return this.http.delete<Produto>(`${this.baseUrl}/${id}`);
  }
}
