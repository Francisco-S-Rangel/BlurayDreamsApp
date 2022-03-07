import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnderecoCobrancas } from '../../models/enderecoCobranca';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoCobrancaService {

  baseUrl = `${environment.API_url}/EnderecoCobrancas`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<EnderecoCobrancas[]>{
    return this.http.get<EnderecoCobrancas[]>(`${this.baseUrl}`);
  }
  getByClienteId(id: number): Observable<EnderecoCobrancas[]>{
    return this.http.get<EnderecoCobrancas[]>(`${this.baseUrl}/${id}/cliente`);
  }
  getById(id: number): Observable<EnderecoCobrancas>{
    return this.http.get<EnderecoCobrancas>(`${this.baseUrl}/${id}`);
  }
  put(id: number,endereco: EnderecoCobrancas){
    console.log(id);
    console.log(endereco);
    return this.http.put(`${this.baseUrl}/${id}`, endereco).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(endereco: EnderecoCobrancas){
    return this.http.post(`${this.baseUrl}`, endereco);
  }
  delete(id: number){
    return this.http.delete<EnderecoCobrancas>(`${this.baseUrl}/${id}`);
  }



}
