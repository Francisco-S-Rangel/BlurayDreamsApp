import { Produto } from 'src/app/modules/shared/models/produto';
import { Troca } from './../../../../shared/models/troca';
import { TrocaService } from './../../../../shared/services/cadastro-dados-pedido/troca.service';
import { TrocaRequest } from './../../../../shared/models/TrocaRequest';
import { Pedido } from './../../../../shared/models/pedido';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { ProdutoService } from './../../../../shared/services/cadastro-dados-pedido/produto.service';
import { PedidoService } from './../../../../shared/services/cadastro-dados-pedido/pedido.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-trocas-detalhes',
  templateUrl: './perfil-usuario-trocas-detalhes.component.html',
  styleUrls: ['./perfil-usuario-trocas-detalhes.component.css']
})
export class PerfilUsuarioTrocasDetalhesComponent implements OnInit {

  public idTroca: number = 0

  public troca!: Troca
  public pedido!: Pedido
  public produtoTrocado!: Produto

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService,
    private PedidoService: PedidoService, private ProdutoService: ProdutoService, private TrocaService: TrocaService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.idTroca = x[`idTroca`];
    });
    this.carregarTroca()
  }

  carregarTroca() {
    this.TrocaService.getById(this.idTroca).subscribe((troca) => {
      this.troca = troca
      console.log(this.troca)
      this.carregarPedido()

    })
  }

  carregarPedido() {
    this.PedidoService.getPedidoporCliente(this.troca.clienteId).subscribe((pedidos) => {
      for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id == this.troca.pedidoId) {
          this.pedido = pedidos[i];
        }
      }
      this.carregarProduto()

    })
  }

  carregarProduto() {
    for (let i = 0; i < this.pedido.pedidoProdutos!.length; i++) {
      this.ProdutoService.getById(this.pedido.pedidoProdutos![i].produtoId).subscribe((produto) => {
        this.pedido.pedidoProdutos![i].produto = produto
        if (this.pedido.pedidoProdutos![i].id == this.troca.pedidoProdutoId) {
          this.produtoTrocado = this.pedido.pedidoProdutos![i].produto!
          console.log(this.produtoTrocado)
        }
      })
    }
    console.log(this.pedido)
  }

  irParaPedidos() { this.router.navigate(['/perfil-usuario-pedidos']) }



}
