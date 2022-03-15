import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-trocas',
  templateUrl: './perfil-usuario-trocas.component.html',
  styleUrls: ['./perfil-usuario-trocas.component.css']
})
export class PerfilUsuarioTrocasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaPedidos(){this.router.navigate(['/perfil-usuario-pedidos'])}

}
