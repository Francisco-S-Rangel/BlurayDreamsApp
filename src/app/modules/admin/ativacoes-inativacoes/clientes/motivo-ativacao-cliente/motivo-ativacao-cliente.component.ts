import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivo-ativacao-cliente',
  templateUrl: './motivo-ativacao-cliente.component.html',
  styleUrls: ['./motivo-ativacao-cliente.component.css']
})
export class MotivoAtivacaoClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.router.navigate(['/consultar-clientes']);
  }

}
