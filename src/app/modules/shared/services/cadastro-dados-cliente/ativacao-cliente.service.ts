import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AtivacaoCliente } from '../../models/ativacaoCliente';

@Injectable({
  providedIn: 'root'
})
export class AtivacaoClienteService {

  baseUrl = `${environment.API_url}/AtivacaoClientes`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<AtivacaoCliente[]>{
    return this.http.get<AtivacaoCliente[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<AtivacaoCliente>{
    return this.http.get<AtivacaoCliente>(`${this.baseUrl}/${id}`);
  }
  put(id: number,ativacaocliente: AtivacaoCliente){
    
    return this.http.put(`${this.baseUrl}/${id}`, ativacaocliente).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(ativacaocliente: AtivacaoCliente){
    return this.http.post(`${this.baseUrl}`, ativacaocliente);
  }
  delete(id: number){
    return this.http.delete<AtivacaoCliente>(`${this.baseUrl}/${id}`);
  }

}
