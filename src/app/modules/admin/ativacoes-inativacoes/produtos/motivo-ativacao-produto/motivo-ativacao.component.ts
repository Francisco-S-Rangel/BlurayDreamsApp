import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivo-ativacao',
  templateUrl: './motivo-ativacao.component.html',
  styleUrls: ['./motivo-ativacao.component.css']
})
export class MotivoAtivacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.router.navigate(['/consultar-produtos']);
  }

}
