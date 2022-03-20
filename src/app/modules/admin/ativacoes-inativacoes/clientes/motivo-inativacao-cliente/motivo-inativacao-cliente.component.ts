import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivo-inativacao-cliente',
  templateUrl: './motivo-inativacao-cliente.component.html',
  styleUrls: ['./motivo-inativacao-cliente.component.css']
})
export class MotivoInativacaoClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.router.navigate(['/consultar-clientes']);
  }

}
