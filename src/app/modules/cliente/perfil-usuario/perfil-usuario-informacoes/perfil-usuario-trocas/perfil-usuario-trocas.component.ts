import { Pedido } from './../../../../shared/models/pedido';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { ProdutoService } from './../../../../shared/services/cadastro-dados-pedido/produto.service';
import { PedidoService } from './../../../../shared/services/cadastro-dados-pedido/pedido.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-trocas',
  templateUrl: './perfil-usuario-trocas.component.html',
  styleUrls: ['./perfil-usuario-trocas.component.css']
})
export class PerfilUsuarioTrocasComponent implements OnInit {

  public idPedido: number = 0
  public idCliente: number = 0

  public pedido!: Pedido

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService,
    private PedidoService: PedidoService, private ProdutoService: ProdutoService ) { }

  ngOnInit() {

    this.route.params.subscribe(x => {
      this.idPedido = x[`idpedido`];
      this.idCliente = x[`idcliente`];
    });
    this.carregarPedidos(this.idCliente)
  }

  carregarPedidos(id: number) {
    this.PedidoService.getPedidoporCliente(id).subscribe((pedidos) => {
      for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id == this.idPedido) {
          this.pedido = pedidos[i];
        }
      }

      //console.log(this.pedidoPut)

      for (let i = 0; i < this.pedido.pedidoProdutos!.length; i++) {
        this.ProdutoService.getById(this.pedido.pedidoProdutos![i].produtoId).subscribe((produto) => {
          this.pedido.pedidoProdutos![i].produto = produto
          //this.valorProdutos += this.carrinho.carrinhoProduto![i].quantidade * this.carrinho.carrinhoProduto![i].produto.preco
          console.log(this.pedido)
        })
      }

    })

  }

  irParaPedidos(){this.router.navigate(['/perfil-usuario-pedidos'])}

}
