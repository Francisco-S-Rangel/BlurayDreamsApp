import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CartaoCredito } from '../../models/cartaoCredito';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartaoCreditoService {

  baseUrl = `${environment.API_url}/CartaoCreditos`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<CartaoCredito[]>{
    return this.http.get<CartaoCredito[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<CartaoCredito>{
    return this.http.get<CartaoCredito>(`${this.baseUrl}/${id}`);
  }
  put(id: number,cartao: CartaoCredito){
    console.log(id);
    console.log(cartao);
    return this.http.put(`${this.baseUrl}/${id}`, cartao).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(cartao: CartaoCredito){
    return this.http.post(`${this.baseUrl}`, cartao);
  }
  delete(id: number){
    return this.http.delete<CartaoCredito>(`${this.baseUrl}/${id}`);
  }

}
