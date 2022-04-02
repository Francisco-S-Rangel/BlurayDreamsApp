import { AtivacaoFuncionario } from './../../models/ativacaoFuncionario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtivacaoFuncionarioService {

  baseUrl = `${environment.API_url}/AtivacaoFuncionarios`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<AtivacaoFuncionario[]>{
    return this.http.get<AtivacaoFuncionario[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<AtivacaoFuncionario>{
    return this.http.get<AtivacaoFuncionario>(`${this.baseUrl}/${id}`);
  }
  put(id: number,ativacaofuncionario: AtivacaoFuncionario){
    
    return this.http.put(`${this.baseUrl}/${id}`, ativacaofuncionario).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(ativacaofuncionario: AtivacaoFuncionario){
    return this.http.post(`${this.baseUrl}`, ativacaofuncionario);
  }
  delete(id: number){
    return this.http.delete<AtivacaoFuncionario>(`${this.baseUrl}/${id}`);
  }

}
