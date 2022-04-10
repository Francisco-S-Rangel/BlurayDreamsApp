import { Troca } from './../../../../shared/models/troca';
import { TrocaService } from './../../../../shared/services/cadastro-dados-pedido/troca.service';
import { Pedido } from './../../../../shared/models/pedido';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { PedidoService } from './../../../../shared/services/cadastro-dados-pedido/pedido.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-pedidos',
  templateUrl: './perfil-usuario-pedidos.component.html',
  styleUrls: ['./perfil-usuario-pedidos.component.css']
})
export class PerfilUsuarioPedidosComponent implements OnInit {

  idCliente: number = 1

  public pedidos?: Pedido[]
  public trocas?: Troca[]

  constructor(private router: Router, private route: ActivatedRoute,private clienteService: ClienteService, private PedidoService: PedidoService, private TrocaService:TrocaService) { }

  ngOnInit() {
    this.carregarPedidos(1)
    this.carregarTroca()
  }

  carregarPedidos(id: number){
    this.PedidoService.getPedidoporCliente(id).subscribe((pedidos)=>{
      this.pedidos = pedidos
      console.log(pedidos)
    })

  }

  carregarTroca(){
    this.TrocaService.getAll().subscribe((trocas)=>{
      this.trocas = trocas
      console.log(this.trocas)
    })
  }

  irParaPerfil(){ this.router.navigate(['/perfil-usuario-main'])}

  irParaEnderecos(){this.router.navigate(['/perfil-usuario-enderecos'])}

  irParaMetPagamentos(){this.router.navigate(['/perfil-usuario-cartoes'])}

  irParaTrocas(idpedido: number){this.router.navigate([`/perfil-usuario-trocas/${idpedido}/${this.idCliente}`])}

  irParaDetalhesTrocas(idTroca: number){this.router.navigate([`/perfil-usuario-trocas-detalhes/${idTroca}`])}

}
