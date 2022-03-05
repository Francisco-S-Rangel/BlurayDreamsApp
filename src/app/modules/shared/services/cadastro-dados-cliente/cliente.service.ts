import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../../models/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = `https://localhost:7114/api/Clientes`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }
  put(id: number,cliente: Cliente){
    console.log(id);
    console.log(cliente);
    return this.http.put(`${this.baseUrl}/${id}`, cliente).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(cliente: Cliente){
    return this.http.post(`${this.baseUrl}`, cliente);
  }
  delete(id: number){
    return this.http.delete<Cliente>(`${this.baseUrl}/${id}`);
  }

}
