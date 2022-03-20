import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivo-inativacao',
  templateUrl: './motivo-inativacao.component.html',
  styleUrls: ['./motivo-inativacao.component.css']
})
export class MotivoInativacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.router.navigate(['/consultar-produtos']);
  }

}
