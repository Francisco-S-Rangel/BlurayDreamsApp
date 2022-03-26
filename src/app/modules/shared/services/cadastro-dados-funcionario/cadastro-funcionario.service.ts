import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroFuncionarioService {

  funcionario: any;

  constructor() { }

  setFuncionario(obj: any){
    this.funcionario = obj;

  }

  getFuncionario(){
    return this.funcionario;
  }
}
