import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Endereco } from '../../models/enderero';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl = `${environment.API_url}/Enderecos`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(`${this.baseUrl}`);
  }
  getByClienteId(id: number): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(`${this.baseUrl}/${id}/funcionario`);
  }
  getById(id: number): Observable<Endereco>{
    return this.http.get<Endereco>(`${this.baseUrl}/${id}`);
  }
  put(id: number,endereco: Endereco){
    console.log(id);
    console.log(endereco);
    return this.http.put(`${this.baseUrl}/${id}`, endereco).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(endereco: Endereco){
    return this.http.post(`${this.baseUrl}`, endereco);
  }
  delete(id: number){
    return this.http.delete<Endereco>(`${this.baseUrl}/${id}`);
  }

}