import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  clientes: any

  constructor() { }

  setClientes(obj: any){
    this.clientes = obj
  }

  getClientes(){
    return this.clientes
  }

}
