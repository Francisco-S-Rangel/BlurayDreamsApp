import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DesativacaoCliente } from '../../models/desativacaoCliente';

@Injectable({
  providedIn: 'root'
})
export class DesativacaoClienteService {

  baseUrl = `${environment.API_url}/DesativacaoClientes`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<DesativacaoCliente[]>{
    return this.http.get<DesativacaoCliente[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<DesativacaoCliente>{
    return this.http.get<DesativacaoCliente>(`${this.baseUrl}/${id}`);
  }
  put(id: number,desativacaocliente: DesativacaoCliente){
    
    return this.http.put(`${this.baseUrl}/${id}`, desativacaocliente).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(desativacaocliente: DesativacaoCliente){
    return this.http.post(`${this.baseUrl}`, desativacaocliente);
  }
  delete(id: number){
    return this.http.delete<DesativacaoCliente>(`${this.baseUrl}/${id}`);
  }
}
