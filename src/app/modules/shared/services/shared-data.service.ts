import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  clientes: any;
  pedido: any;

  constructor() { }

  setPedidos(obj: any){
    this.pedido = obj
  }

  getPedido(){
    return this.pedido
  }

  setClientes(obj: any){
    this.clientes = obj
  }

  getClientes(){
    return this.clientes
  }

}
