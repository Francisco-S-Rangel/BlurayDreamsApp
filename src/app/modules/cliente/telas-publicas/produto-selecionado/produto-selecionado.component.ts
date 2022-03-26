import { CarrinhoProdutoRequest } from './../../../shared/models/carrinhoProdutoRequest';
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
  public carrinhoProduto: CarrinhoProdutoRequest = {
        produtoId: 0,
        quantidade: 1
  }

  constructor(private router: Router, private route: ActivatedRoute, private ProdutoService: ProdutoService, private CarrinhoComprasService: CarrinhoComprasService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarProduto(this.id)
    })
    this.carrinhoProduto.produtoId = this.id
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
    this.CarrinhoComprasService.addCarrinhoProdutos(1, this.carrinhoProduto).subscribe(
      ()=>{
        this.irParaCarrinho()
      })
  }

  backPage(){ this.router.navigate([''])};

  irParaCarrinho(){ this.router.navigate(['carrinho-compras'])}

}
