import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-main',
  templateUrl: './perfil-usuario-main.component.html',
  styleUrls: ['./perfil-usuario-main.component.css']
})
export class PerfilUsuarioMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaMetPagamentos(){this.router.navigate(['/perfil-usuario-cartoes'])}

  irParaPedidos(){this.router.navigate(['/perfil-usuario-pedidos'])}

  irParaEnderecos(){this.router.navigate(['/perfil-usuario-enderecos'])}

  irParaAlterarDados(){this.router.navigate(['/perfil-usuario-altera-usuario'])}

  irParaNotificacoes(){this.router.navigate(['/perfil-usuario-notificacoes'])}

}
