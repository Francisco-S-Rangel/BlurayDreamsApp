import { Produto } from './../../shared/models/produto';
import { ProdutoService } from './../../shared/services/cadastro-dados-pedido/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  public paginacao = [1,2,3];
  public produtos?: Produto[];



  constructor(private router: Router, private ProdutoService : ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos()
  }


  carregarProdutos(){
    this.ProdutoService.getAll().subscribe(
      (produtos: Produto[])=>{
        this.produtos = produtos;
        console.log(this.produtos);
      }
    );
  }

  produtoSelecionado(id: number) {this.router.navigate([`produto-selecionado/${id}`])};

}
