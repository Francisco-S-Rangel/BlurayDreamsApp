import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnderecoEntregas } from '../../models/enderecoEntrega';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnderecoEntregaService {

  baseUrl = `${environment.API_url}/EnderecoEntregas`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<EnderecoEntregas[]>{
    return this.http.get<EnderecoEntregas[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<EnderecoEntregas>{
    return this.http.get<EnderecoEntregas>(`${this.baseUrl}/${id}`);
  }
  put(id: number,endereco: EnderecoEntregas){
    console.log(id);
    console.log(endereco);
    return this.http.put(`${this.baseUrl}/${id}`, endereco).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  post(endereco: EnderecoEntregas){
    return this.http.post(`${this.baseUrl}`, endereco);
  }
  delete(id: number){
    return this.http.delete<EnderecoEntregas>(`${this.baseUrl}/${id}`);
  }


}
