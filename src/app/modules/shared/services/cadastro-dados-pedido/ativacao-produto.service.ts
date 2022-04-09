import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AtivacaoProduto } from '../../models/ativacaoProduto';

@Injectable({
  providedIn: 'root'
})
export class AtivacaoProdutoService {

  baseUrl = `${environment.API_url}/AtivacaoProdutos`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<AtivacaoProduto[]>{
    return this.http.get<AtivacaoProduto[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<AtivacaoProduto>{
    return this.http.get<AtivacaoProduto>(`${this.baseUrl}/${id}`);
  }
  put(id: number,ativacaoproduto: AtivacaoProduto){
    
    return this.http.put(`${this.baseUrl}/${id}`, ativacaoproduto).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(ativacaoproduto: AtivacaoProduto){
    return this.http.post(`${this.baseUrl}`, ativacaoproduto);
  }
  delete(id: number){
    return this.http.delete<AtivacaoProduto>(`${this.baseUrl}/${id}`);
  }
}
