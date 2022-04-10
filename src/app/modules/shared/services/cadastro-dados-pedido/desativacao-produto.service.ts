import { DesativacaoProduto } from './../../models/desativacaoProduto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesativacaoProdutoService {

  baseUrl = `${environment.API_url}/DesativacaoProdutos`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<DesativacaoProduto[]>{
    return this.http.get<DesativacaoProduto[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<DesativacaoProduto>{
    return this.http.get<DesativacaoProduto>(`${this.baseUrl}/${id}`);
  }
  put(id: number,desativacaoproduto: DesativacaoProduto){
    
    return this.http.put(`${this.baseUrl}/${id}`, desativacaoproduto).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(desativacaoproduto: DesativacaoProduto){
    return this.http.post(`${this.baseUrl}`, desativacaoproduto);
  }
  delete(id: number){
    return this.http.delete<DesativacaoProduto>(`${this.baseUrl}/${id}`);
  }
}
