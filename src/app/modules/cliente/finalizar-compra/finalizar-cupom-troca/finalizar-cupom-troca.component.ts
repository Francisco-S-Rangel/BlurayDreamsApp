import { ProdutoService } from './../../../shared/services/cadastro-dados-pedido/produto.service';
import { CarrinhoComprasService } from './../../../shared/services/cadastro-dados-pedido/carrinho-compras.service';
import { Carrinho } from './../../../shared/models/carrinho';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions, AbstractControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produto } from 'src/app/modules/shared/models/produto';

@Component({
  selector: 'app-finalizar-cupom-troca',
  templateUrl: './finalizar-cupom-troca.component.html',
  styleUrls: ['./finalizar-cupom-troca.component.css']
})
export class FinalizarCupomTrocaComponent implements OnInit {

  public id?: number;
  public idcliente: number = 0;

  public cuponsTroca: number = 1;
  public arrayTrocas: number[] = [];
  public qtdProdutosTrocas: number = 0

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

  constructor(private router: Router, private fb: FormBuilder, private CarrinhoComprasService: CarrinhoComprasService, private ProdutoService: ProdutoService) { }

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
        })
      }
    })
    //console.error = () => {};
  }

  selectChange(event: any, index: number){
    let evt = parseInt(event.target.value)
    this.arrayTrocas[index] = evt
    this.calcularQtdDeTrocas()
  }


  irParaProximaPagina(){
    let qtdTotalProdutos = this.calcularQtdTotal()
    if(qtdTotalProdutos > this.qtdProdutosTrocas){
      this.router.navigate(['/finalizar-cartao']);
    } else {
      this.router.navigate(['/finalizar-endereco-cobranca']);
    }
  }

  calcularQtdTotal(){
    let qtd = 0
    for(let i = 0; i < this.carrinho.carrinhoProduto!.length; i++){
      qtd += this.carrinho.carrinhoProduto![i].quantidade
    }
    return qtd;
  }

  calcularQtdDeTrocas(){
    this.qtdProdutosTrocas = this.arrayTrocas.reduce((acumulador, valor) => acumulador + valor)
  }

  backPage() {
    this.router.navigate(['/carrinho-compras']);
  }
}
