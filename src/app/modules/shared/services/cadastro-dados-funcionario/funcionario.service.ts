import { Funcionario } from './../../models/funcionario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = `${environment.API_url}/Funcionarios`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.baseUrl}/${id}`);
  }
  put(id: number,funcionario: Funcionario){
    console.log(id);
    console.log(funcionario);
    return this.http.put(`${this.baseUrl}/${id}`, funcionario).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(funcionario: Funcionario){
    return this.http.post(`${this.baseUrl}`, funcionario);
  }
  delete(id: number){
    return this.http.delete<Funcionario>(`${this.baseUrl}/${id}`);
  }
}

