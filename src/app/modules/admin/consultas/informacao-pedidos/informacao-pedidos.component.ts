import { Pedido } from './../../../shared/models/pedido';
import { PedidoService } from './../../../shared/services/cadastro-dados-pedido/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';

@Component({
  selector: 'app-informacao-pedidos',
  templateUrl: './informacao-pedidos.component.html',
  styleUrls: ['./informacao-pedidos.component.css']
})
export class InformacaoPedidosComponent implements OnInit {

  public id: number =0;

  public cliente?: Cliente;
  public pedidos?: Pedido[]

  constructor(private router: Router, private route: ActivatedRoute,private clienteService: ClienteService, private PedidoService: PedidoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarCliente(this.id);
      this.carregarPedidos(this.id)
    });
  }

    // carregar Entidades necessarias
  carregarCliente(id: number){
      this.clienteService.getById(id).subscribe(
        (cliente: Cliente)=>{
          this.cliente = cliente;
          console.log(this.cliente);
        }
      );
  }

  carregarPedidos(id: number){
    this.PedidoService.getPedidoporCliente(id).subscribe((pedidos)=>{
      this.pedidos = pedidos
      console.log(pedidos)
    })

  }

  backPage(id: number){this.router.navigate([`informacao-cliente/${id}`]);}
  irPedidoEscolhido(id: number, idpedido: number){this.router.navigate([`info-pedido-escolhido/${id}/${idpedido}`]);}
}
