import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-funcionario',
  templateUrl: './tela-funcionario.component.html',
  styleUrls: ['./tela-funcionario.component.css']
})
export class TelaFuncionarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaConsultarCliente(){ this.router.navigate(['consultar-clientes'])}
  irParaConsultarProduto(){ this.router.navigate(['consultar-produtos'])}
  irParaConsultarTrocas(){ this.router.navigate(['consultar-trocas'])}
  irParaConsultarFuncionarios(){ this.router.navigate(['consultar-funcionarios'])}

}
