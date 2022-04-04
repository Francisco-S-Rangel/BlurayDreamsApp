import { CartaoCreditoService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cartao-credito.service';
import { EnderecoEntregaService } from 'src/app/modules/shared/services/cadastro-dados-cliente/endereco-entrega.service';
import { EnderecoCobrancaService } from 'src/app/modules/shared/services/cadastro-dados-cliente/endereco-cobranca.service';
import { EnderecoCobrancas } from 'src/app/modules/shared/models/enderecoCobranca';
import { EnderecoEntregas } from 'src/app/modules/shared/models/enderecoEntrega';
import { CartaoCredito } from 'src/app/modules/shared/models/cartaoCredito';
import { ProdutoService } from './../../../shared/services/cadastro-dados-pedido/produto.service';
import { Pedido } from './../../../shared/models/pedido';
import { PedidoService } from './../../../shared/services/cadastro-dados-pedido/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';

@Component({
  selector: 'app-info-pedido-escolhido',
  templateUrl: './info-pedido-escolhido.component.html',
  styleUrls: ['./info-pedido-escolhido.component.css']
})
export class InfoPedidoEscolhidoComponent implements OnInit {

  public id: number = 0;
  public idPedido: number = 0

  public cliente!: Cliente;
  public pedido!: Pedido
  public cartaoCredito!: CartaoCredito
  public enderecoEntrega!: EnderecoEntregas
  public enderecoCobranca!: EnderecoCobrancas

  public pedidoPut!: Pedido

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService,
    private PedidoService: PedidoService, private ProdutoService: ProdutoService, private EnderecoCobrancaService: EnderecoCobrancaService,
    private EnderecoEntregaService: EnderecoEntregaService, private CartaoCreditoService: CartaoCreditoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.idPedido = x[`idpedido`];
    });
    this.carregarCliente(this.id)
    this.carregarPedidos(this.id)
  }

  // carregar Entidades necessarias
  carregarCliente(id: number) {
    this.clienteService.getById(id).subscribe(
      (cliente: Cliente) => {
        this.cliente = cliente;
        //console.log(this.cliente);
      }
    );
  }

  carregarPedidos(id: number) {
    this.PedidoService.getPedidoporCliente(id).subscribe((pedidos) => {
      for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id == this.idPedido) {
          this.pedido = pedidos[i];
          this.pedidoPut = pedidos[i];
        }
      }

      //console.log(this.pedidoPut)

      for (let i = 0; i < this.pedido.pedidoProdutos!.length; i++) {
        this.ProdutoService.getById(this.pedido.pedidoProdutos![i].produtoId).subscribe((produto) => {
          this.pedido.pedidoProdutos![i].produto = produto
          //this.valorProdutos += this.carrinho.carrinhoProduto![i].quantidade * this.carrinho.carrinhoProduto![i].produto.preco
          //console.log(this.pedido)
        })
      }

      this.carregarCartao(this.pedido.cartaoCreditoId)
      this.carregarEndEntrega(this.pedido.enderecoEntregaId)
      this.carregarEndCobranca(this.pedido.enderecoCobrancaId)

    })

  }

  carregarCartao(idcartao: number) {
    this.CartaoCreditoService.getById(idcartao).subscribe((cartao) => {
      this.cartaoCredito = cartao
      //console.log(this.cartaoCredito)
    })
  }

  carregarEndEntrega(idendereco: number) {
    this.EnderecoEntregaService.getById(idendereco).subscribe((endereco) => {
      this.enderecoEntrega = endereco
      //console.log(this.enderecoEntrega)
    })
  }

  carregarEndCobranca(idendereco: number) {
    this.EnderecoCobrancaService.getById(idendereco).subscribe((endereco) => {
      this.enderecoCobranca = endereco
      //console.log(this.enderecoCobranca)
    })
  }

  aprovarCompra(idPedido: number){
    this.pedidoPut.status = "Aprovado"
    this.PedidoService.put(idPedido, this.pedidoPut).subscribe(()=>{})
  }
  recusarCompra(idPedido: number){
    this.pedidoPut.status = "Reprovado"
    this.PedidoService.put(idPedido, this.pedidoPut).subscribe(()=>{})
  }

  enviarParaEntrega(idPedido: number){
    this.pedidoPut.status = "Em transporte"
    this.PedidoService.put(idPedido, this.pedidoPut).subscribe(()=>{})
  }

  pedidoEntregue(idPedido: number){
    this.pedidoPut.status = "Entregue"
    this.PedidoService.put(idPedido, this.pedidoPut).subscribe(()=>{})
  }

  backPage() { this.router.navigate([`informacao-pedidos/${this.id}`]); }

}
