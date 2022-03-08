import { BandeiraCartao } from './../../models/bandeiraCartao';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CartaoCredito } from '../../models/cartaoCredito';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandeiraCartaoService {

  baseUrl = `${environment.API_url}/CartaoCreditos`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<BandeiraCartao[]>{
    return this.http.get<BandeiraCartao[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<BandeiraCartao>{
    return this.http.get<BandeiraCartao>(`${this.baseUrl}/${id}`);
  }
  put(id: number,bandeira: BandeiraCartao){
    console.log(id);
    console.log(bandeira);
    return this.http.put(`${this.baseUrl}/${id}`, bandeira).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(bandeira: BandeiraCartao){
    return this.http.post(`${this.baseUrl}`, bandeira);
  }
  delete(id: number){
    return this.http.delete<BandeiraCartao>(`${this.baseUrl}/${id}`);
  }

}
