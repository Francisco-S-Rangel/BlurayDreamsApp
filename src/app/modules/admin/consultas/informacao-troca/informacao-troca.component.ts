import { Produto } from 'src/app/modules/shared/models/produto';
import { ProdutoService } from './../../../shared/services/cadastro-dados-pedido/produto.service';
import { PedidoService } from './../../../shared/services/cadastro-dados-pedido/pedido.service';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { Pedido } from './../../../shared/models/pedido';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { Troca } from './../../../shared/models/troca';
import { TrocaService } from './../../../shared/services/cadastro-dados-pedido/troca.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacao-troca',
  templateUrl: './informacao-troca.component.html',
  styleUrls: ['./informacao-troca.component.css']
})
export class InformacaoTrocaComponent implements OnInit {

  idTroca: number = 0;
  troca!: Troca
  cliente!: Cliente;
  pedido!: Pedido
  produtoTrocado!: Produto

  constructor(private router: Router, private route: ActivatedRoute, private TrocaService: TrocaService, private ClienteService: ClienteService
    , private PedidoService: PedidoService, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
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
      this.carregarCliente()

    })
  }

  carregarCliente() {
    this.ClienteService.getById(this.troca.clienteId).subscribe((cliente) => {
      this.cliente = cliente
      console.log(this.cliente)
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

  aceitarTroca() {
    console.log(this.troca)
    console.log(this.pedido)
    this.troca.status = "Troca aceita"

    this.TrocaService.put(this.troca.id, this.troca).subscribe(() => {

    })
  }

  recusarTroca() {
    console.log(this.troca)
    console.log(this.pedido)
    this.troca.status = "Troca recusada"

    this.TrocaService.put(this.troca.id, this.troca).subscribe(() => {

    })

  }

  adicionarEstoque() {
    var creditoTroca = this.produtoTrocado.preco * this.troca.quantidade
    this.cliente.credito += creditoTroca
    this.ClienteService.put(1, this.cliente).subscribe(() => {

    })

    this.troca.status = "Troca concluida"
    this.TrocaService.put(this.troca.id, this.troca).subscribe(() => {

    })

    this.adicionarProdutosEstoque()
  }

  naoAdicionarEstoque() {
    var creditoTroca = this.produtoTrocado.preco * this.troca.quantidade
    this.cliente.credito += creditoTroca
    this.ClienteService.put(1, this.cliente).subscribe(() => {

    })

    this.troca.status = "Troca concluida"
    this.TrocaService.put(this.troca.id, this.troca).subscribe(() => {

    })
  }

  adicionarProdutosEstoque() {


    let produtoPut = this.produtoTrocado 
    produtoPut.estoque += this.troca.quantidade

    this.ProdutoService.put(produtoPut.id, produtoPut).subscribe(()=>{

    })

  }

  backPage() { this.router.navigate(['consultar-trocas']); }

}
