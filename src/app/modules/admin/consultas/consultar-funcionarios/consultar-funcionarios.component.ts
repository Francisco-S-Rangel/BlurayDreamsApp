import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-funcionarios',
  templateUrl: './consultar-funcionarios.component.html',
  styleUrls: ['./consultar-funcionarios.component.css']
})
export class ConsultarFuncionariosComponent implements OnInit {

  public paginacao = [1,2,3];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Botões
  backPage() { this.router.navigate(['tela-funcionario']); }
  irParaFuncionario(){this.router.navigate(['informacao-funcionario']);}

}
