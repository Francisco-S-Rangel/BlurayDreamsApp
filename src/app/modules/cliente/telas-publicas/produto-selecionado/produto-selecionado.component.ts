import { Carrinho } from './../../../shared/models/carrinho';
import { CarrinhoComprasService } from './../../../shared/services/cadastro-dados-pedido/carrinho-compras.service';
import { Produto } from './../../../shared/models/produto';
import { ProdutoService } from './../../../shared/services/cadastro-dados-pedido/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-selecionado',
  templateUrl: './produto-selecionado.component.html',
  styleUrls: ['./produto-selecionado.component.css']
})
export class ProdutoSelecionadoComponent implements OnInit {

  public id: number = 0;
  public produto: Produto = {
        id:0,
        titulo:'',
        img:'',
        tipo:'',
        categoria:'',
        ano: new Date(),
        direcao: '',
        duracao: '',
        produtora: '',
        sinopse: '',
        status: false,
        preco: 0,
        estoque: 0
  };
  public carrinho: Carrinho = {
        id:0,
        clienteId:0,
        desconto:0,
        frete:0,
        precoFinal:0,
  }

  constructor(private router: Router, private route: ActivatedRoute, private ProdutoService: ProdutoService, private CarrinhoComprasService: CarrinhoComprasService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarProduto(this.id)
    })
    this.carregarCarrinhoCliente(1)
  }

  carregarCarrinhoCliente(id: number){
    this.CarrinhoComprasService.getById(id).subscribe(
      (carrinho: Carrinho)=>{
        this.carrinho = carrinho
        console.log(this.carrinho)
      }
    )
  }


  carregarProduto(id: number){
    this.ProdutoService.getById(id).subscribe(
      (produto: Produto)=>{
        this.produto = produto;
        console.log(this.produto);
      }
    );
  }

  adicionarAoCarrinho(){
    this.carrinho.Produtos = [this.produto]
    this.CarrinhoComprasService.put(this.carrinho.id,this.carrinho).subscribe(
      ()=>{
        this.irParaCarrinho()
      })
  }

  backPage(){ this.router.navigate([''])};

  irParaCarrinho(){ this.router.navigate(['carrinho-compras'])}

}
