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

  public pedidos?: Pedido[]

  constructor(private router: Router, private route: ActivatedRoute,private clienteService: ClienteService, private PedidoService: PedidoService) { }

  ngOnInit() {
    this.carregarPedidos(1)
  }

  carregarPedidos(id: number){
    this.PedidoService.getPedidoporCliente(id).subscribe((pedidos)=>{
      this.pedidos = pedidos
      console.log(pedidos)
    })

  }

  irParaPerfil(){ this.router.navigate(['/perfil-usuario-main'])}

  irParaEnderecos(){this.router.navigate(['/perfil-usuario-enderecos'])}

  irParaMetPagamentos(){this.router.navigate(['/perfil-usuario-cartoes'])}

  irParaTrocas(id: number){this.router.navigate([`/perfil-usuario-trocas/${id}`])}

}
