import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-enderecos',
  templateUrl: './perfil-usuario-enderecos.component.html',
  styleUrls: ['./perfil-usuario-enderecos.component.css']
})
export class PerfilUsuarioEnderecosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaPerfil(){ this.router.navigate(['/perfil-usuario-main'])}

  irParaMetPagamentos(){this.router.navigate(['/perfil-usuario-cartoes'])}

  irParaPedidos(){this.router.navigate(['/perfil-usuario-pedidos'])}

}
