import { Troca } from './../../../../shared/models/troca';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrocaService } from 'src/app/modules/shared/services/cadastro-dados-pedido/troca.service';

@Component({
  selector: 'app-perfil-usuario-notificacoes',
  templateUrl: './perfil-usuario-notificacoes.component.html',
  styleUrls: ['./perfil-usuario-notificacoes.component.css']
})
export class PerfilUsuarioNotificacoesComponent implements OnInit {

  public trocas?: Troca[];

  constructor(private router: Router, private TrocaService: TrocaService) { }

  ngOnInit(): void {
    this.carregarTroca();
  }

  carregarTroca(){
    this.TrocaService.getAll().subscribe((trocas)=>{
      this.trocas = trocas
      console.log(this.trocas)
    })
  }

  irParaPerfil(){ this.router.navigate(['/perfil-usuario-main'])}

  irParaPedidos(){this.router.navigate(['/perfil-usuario-pedidos'])}

  irParaEnderecos(){this.router.navigate(['/perfil-usuario-enderecos'])}

  irParaMetPagamentos(){this.router.navigate(['/perfil-usuario-cartoes'])}

  irParaDetalhesTrocas(idTroca: number){this.router.navigate([`/perfil-usuario-trocas-detalhes/${idTroca}`])}

  irParaNotificacoes(){this.router.navigate(['/perfil-usuario-notificacoes'])}

}
