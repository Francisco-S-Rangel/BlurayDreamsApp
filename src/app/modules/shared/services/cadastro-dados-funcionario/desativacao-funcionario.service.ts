import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DesativacaoFuncionario } from '../../models/desativacaoFuncionario';

@Injectable({
  providedIn: 'root'
})
export class DesativacaoFuncionarioService {

  baseUrl = `${environment.API_url}/DesativacaoFuncionarios`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<DesativacaoFuncionario[]>{
    return this.http.get<DesativacaoFuncionario[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<DesativacaoFuncionario>{
    return this.http.get<DesativacaoFuncionario>(`${this.baseUrl}/${id}`);
  }
  put(id: number,desativacaofuncionario: DesativacaoFuncionario){
    
    return this.http.put(`${this.baseUrl}/${id}`, desativacaofuncionario).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(desativacaofuncionario: DesativacaoFuncionario){
    return this.http.post(`${this.baseUrl}`, desativacaofuncionario);
  }
  delete(id: number){
    return this.http.delete<DesativacaoFuncionario>(`${this.baseUrl}/${id}`);
  }
}
