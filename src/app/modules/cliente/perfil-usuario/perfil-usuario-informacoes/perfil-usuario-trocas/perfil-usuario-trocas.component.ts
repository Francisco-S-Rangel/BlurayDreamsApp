import { TrocaRequest } from './../../../../shared/models/TrocaRequest';
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
  public qtdProdutosTrocas: number = 0

  public TrocaRequest: TrocaRequest[] = []

  public pedido!: Pedido

  public pedidoPut!: Pedido

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService,
    private PedidoService: PedidoService, private ProdutoService: ProdutoService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.idPedido = x[`idpedido`];
      this.idCliente = x[`idcliente`];
    });
    this.carregarPedidos(this.idCliente)
  }

  criarTrocaRequest(){
    let obj
    for(let i = 0; i < this.pedido.pedidoProdutos!.length; i++){
      obj = {pedidoId: this.pedido.id, pedidoProdutoId: 0, quantidadde: 0}
      this.TrocaRequest[i] = obj
    }
  }

  selectChange(event: any, produtoId: number, index: number) {
    let obj = {pedidoId: this.pedido.id, pedidoProdutoId: 0, quantidadde: 0 }
    let evt = parseInt(event.target.value)
    obj.pedidoProdutoId = produtoId
    obj.quantidadde = evt
    this.TrocaRequest[index] = obj
    console.log(this.TrocaRequest)
  }

  solicitarTroca() {
    let trocaRequest2: TrocaRequest[] = []

    let j = 0

    for(let i = 0; i < this.TrocaRequest.length; i++){
      if(this.TrocaRequest[i].quantidadde != 0){
        trocaRequest2[j] = this.TrocaRequest[i]
        j++
      }
    }
    //console.log(this.TrocaRequest)
    //console.log(trocaRequest2)

    if(trocaRequest2.length > 0){
      this.pedidoPut.status = "Finalizado"
      this.PedidoService.postTrocaporPedido(1, trocaRequest2).subscribe(()=>{
        this.PedidoService.put(this.pedido.id, this.pedidoPut).subscribe(()=>{
          this.router.navigate(['/perfil-usuario-pedidos'])
        })
      })
    } else {
      alert("Escolha ao menos um pedido para troca!")
    }

  }

  irParaPedidos() { this.router.navigate(['/perfil-usuario-pedidos']) }

  carregarPedidos(id: number) {
    this.PedidoService.getPedidoporCliente(id).subscribe((pedidos) => {
      for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id == this.idPedido) {
          this.pedido = pedidos[i];
          this.pedidoPut = pedidos[i];
        }
      }

      for (let i = 0; i < this.pedido.pedidoProdutos!.length; i++) {
        this.ProdutoService.getById(this.pedido.pedidoProdutos![i].produtoId).subscribe((produto) => {
          this.pedido.pedidoProdutos![i].produto = produto
          //this.valorProdutos += this.carrinho.carrinhoProduto![i].quantidade * this.carrinho.carrinhoProduto![i].produto.preco
          console.log(this.pedido)
          this.criarTrocaRequest()
        })
      }

    })

  }

}
