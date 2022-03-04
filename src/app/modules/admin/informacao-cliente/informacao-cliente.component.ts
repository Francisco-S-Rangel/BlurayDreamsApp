import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacao-cliente',
  templateUrl: './informacao-cliente.component.html',
  styleUrls: ['./informacao-cliente.component.css']
})
export class InformacaoClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage() { this.router.navigate(['consultar-clientes']); }

}
