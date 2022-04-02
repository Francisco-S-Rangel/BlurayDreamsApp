import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  clientes: any;
  request: any;

  constructor() { }

  setRequest(obj: any){
    this.request = obj
  }

  getRequest(){
    return this.request
  }

  setClientes(obj: any){
    this.clientes = obj
  }

  getClientes(){
    return this.clientes
  }

}
