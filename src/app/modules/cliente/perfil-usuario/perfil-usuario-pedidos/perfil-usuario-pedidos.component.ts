import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-pedidos',
  templateUrl: './perfil-usuario-pedidos.component.html',
  styleUrls: ['./perfil-usuario-pedidos.component.css']
})
export class PerfilUsuarioPedidosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaPerfil(){ this.router.navigate(['/perfil-usuario-main'])}

  irParaEnderecos(){this.router.navigate(['/perfil-usuario-enderecos'])}

  irParaMetPagamentos(){this.router.navigate(['/perfil-usuario-cartoes'])}

}
