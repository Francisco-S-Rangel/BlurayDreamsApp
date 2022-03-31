import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  };


  valorProdutos: number = 0;
  valorFrete: number = 0;
  valorDesconto: number = 0;

  cep: string = "";
  cupomDesconto: string = "";

  carrinhoPut: Carrinho = {
    id: 1,
    clienteId: 1,
    desconto: 0,
    frete: 0,
    precoFinal: 0
  };

  constructor(private router: Router, private CarrinhoComprasService: CarrinhoComprasService, private ProdutoService: ProdutoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.carregarCarrinho()
  }

  carregarCarrinho() {

    this.CarrinhoComprasService.getCarrinhoProdutos(1).subscribe((carrinho) => {
      //console.log(carrinho)
      this.carrinho = carrinho

      for (let i = 0; i < this.carrinho.carrinhoProduto!.length; i++) {
        this.ProdutoService.getById(carrinho.carrinhoProduto![i].produtoId).subscribe((produto)=>{
          this.carrinho.carrinhoProduto![i].produto = produto
          this.valorProdutos += this.carrinho.carrinhoProduto![i].quantidade * this.carrinho.carrinhoProduto![i].produto.preco
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

  calcularFrete(){
    if(this.cep.length == 9){
      this.valorFrete = 10
    } else {
      alert("CEP Invalido!")
      this.valorFrete = 0
    }
  }

  calcularCupom(){
    if(this.cupomDesconto == "abc123"){
      this.valorDesconto = 20
    } else {
      alert("Cupom Invalido!")
      this.valorDesconto = 0
    }
  }

  finalizarPedido(){
    this.carrinhoPut.desconto = this.valorDesconto
    this.carrinhoPut.frete = this.valorFrete
    this.carrinhoPut.precoFinal = (this.valorProdutos + this.valorFrete) - this.valorDesconto
    this.CarrinhoComprasService.put(1, this.carrinhoPut).subscribe(()=>{})
  }

  irParaTrocas() {
    this.finalizarPedido()
    this.router.navigate(['/finalizar-cupom-troca'])
  }

  irParaCartao() {
    this.finalizarPedido()
    this.router.navigate(['/finalizar-cartao'])
  }

}
