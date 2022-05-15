import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario-notificacoes',
  templateUrl: './perfil-usuario-notificacoes.component.html',
  styleUrls: ['./perfil-usuario-notificacoes.component.css']
})
export class PerfilUsuarioNotificacoesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaPerfil(){ this.router.navigate(['/perfil-usuario-main'])}

  irParaPedidos(){this.router.navigate(['/perfil-usuario-pedidos'])}

  irParaEnderecos(){this.router.navigate(['/perfil-usuario-enderecos'])}

  irParaMetPagamentos(){this.router.navigate(['/perfil-usuario-cartoes'])}

  irParaDetalhesTrocas(idTroca: number){this.router.navigate([`/perfil-usuario-trocas-detalhes/${idTroca}`])}

  irParaNotificacoes(){this.router.navigate(['/perfil-usuario-notificacoes'])}

}
