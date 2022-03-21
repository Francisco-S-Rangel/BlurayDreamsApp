import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivo-inativacao-funcionario',
  templateUrl: './motivo-inativacao-funcionario.component.html',
  styleUrls: ['./motivo-inativacao-funcionario.component.css']
})
export class MotivoInativacaoFuncionarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.router.navigate(['/consultar-funcionarios']);
  }

}
