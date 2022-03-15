import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-trocas',
  templateUrl: './consultar-trocas.component.html',
  styleUrls: ['./consultar-trocas.component.css']
})
export class ConsultarTrocasComponent implements OnInit {
  public paginacao = [1,2,3];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage() { this.router.navigate(['tela-funcionario']); }
  irParaInformacaoTroca() { this.router.navigate(['informacao-trocas']); }
}
