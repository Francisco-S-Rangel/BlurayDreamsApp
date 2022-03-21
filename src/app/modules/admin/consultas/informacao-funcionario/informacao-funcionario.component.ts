import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacao-funcionario',
  templateUrl: './informacao-funcionario.component.html',
  styleUrls: ['./informacao-funcionario.component.css']
})
export class InformacaoFuncionarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage() { this.router.navigate(['consultar-funcionarios']); }

  alterarDados() { this.router.navigate(['editar-funcionario']); }

  alterarEndereco() { this.router.navigate(['editar-funcionario-endereco']); }
}
