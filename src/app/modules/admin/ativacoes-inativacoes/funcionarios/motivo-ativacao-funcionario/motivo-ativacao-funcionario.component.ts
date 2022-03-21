import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivo-ativacao-funcionario',
  templateUrl: './motivo-ativacao-funcionario.component.html',
  styleUrls: ['./motivo-ativacao-funcionario.component.css']
})
export class MotivoAtivacaoFuncionarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.router.navigate(['/consultar-funcionarios']);
  }

}
