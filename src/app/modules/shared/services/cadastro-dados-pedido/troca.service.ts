import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Troca } from '../../models/troca';

@Injectable({
  providedIn: 'root'
})
export class TrocaService {

  
  baseUrl = `${environment.API_url}/Trocas`;
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Troca[]>{
    return this.http.get<Troca[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Troca>{
    return this.http.get<Troca>(`${this.baseUrl}/${id}`);
  }
  put(id: number,troca: Troca){
    
    return this.http.put(`${this.baseUrl}/${id}`, troca).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(troca: Troca){
    return this.http.post(`${this.baseUrl}`, troca);
  }
  delete(id: number){
    return this.http.delete<Troca>(`${this.baseUrl}/${id}`);
  }
}
