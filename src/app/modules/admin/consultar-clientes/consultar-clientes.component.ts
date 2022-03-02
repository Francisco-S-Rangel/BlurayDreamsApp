import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-clientes',
  templateUrl: './consultar-clientes.component.html',
  styleUrls: ['./consultar-clientes.component.css']
})
export class ConsultarClientesComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  backPage() { this.router.navigate(['']); }

}
