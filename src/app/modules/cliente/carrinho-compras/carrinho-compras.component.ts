import { ProdutoService } from './../../shared/services/cadastro-dados-pedido/produto.service';
import { CarrinhoProduto } from './../../shared/models/carrinhoProduto';
import { Carrinho } from './../../shared/models/carrinho';
import { CarrinhoComprasService } from './../../shared/services/cadastro-dados-pedido/carrinho-compras.service';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produto } from '../../shared/models/produto';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  carrinho: Carrinho = {
    id: 0,
    clienteId: 0,
    desconto: 0,
    frete: 0,
    precoFinal: 0,
    carrinhoProduto: [{
      id: 0,
      carrinhoId: 0,
      produtoId: 0,
      quantidade: 0,
      carrinho: new Carrinho(),
      produto: new Produto()
    }]
  }



  constructor(private router: Router, private CarrinhoComprasService: CarrinhoComprasService, private ProdutoService: ProdutoService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.carregarCarrinho()
  }

  carregarCarrinho() {
    this.CarrinhoComprasService.getCarrinhoProdutos(1).subscribe((carrinho) => {
      console.log(carrinho)
      this.carrinho = carrinho

      for (let i = 0; i < this.carrinho.carrinhoProduto!.length; i++) {
        this.ProdutoService.getById(carrinho.carrinhoProduto![i].produtoId).subscribe((produto)=>{
          this.carrinho.carrinhoProduto![i].produto = produto
          //console.log(this.carrinho)
        })
      }
    })
    //console.error = () => {};
  }

  excluirProduto(idCliente: number, idProduto: number){
    console.log(idProduto)
    this.CarrinhoComprasService.excluirProdutoCarrinho(idCliente, idProduto).subscribe(()=>{
      this.ngOnInit()
    })


  }

  irParaTrocas() { this.router.navigate(['/finalizar-cupom-troca']) }

  finalizarPedido() { this.router.navigate(['/finalizar-cartao']) }

}
