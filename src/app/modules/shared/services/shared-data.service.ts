import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  clientes: any;
  request: any;

  currentUrl: string = '';
  previousUrl: string = '';

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

  setCurrentUrl(url: string){
    this.currentUrl = url;
  }
  getCurrentUrl(){
    return this.currentUrl;
  }

  setPreviousUrl(url: string){
    this.previousUrl = url;
  }
  getPreviousUrl(){
    return this.previousUrl;
  }

}
