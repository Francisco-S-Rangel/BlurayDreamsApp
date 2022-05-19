import { Produto } from './../../../shared/models/produto';
import { ProdutoService } from './../../../shared/services/cadastro-dados-pedido/produto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.component.html',
  styleUrls: ['./consultar-produtos.component.css']
})
export class ConsultarProdutosComponent implements OnInit {
  public paginacao = [1,2,3];
  public produtos?: Produto[];
  public pesquisaTitulo = new FormControl('');

  constructor(private router: Router,private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(){
    this.produtoService.getAll().subscribe(
      (produtos: Produto[])=>{
        this.produtos = produtos;
        console.log(this.produtos);
      }
    );
  }
  deletarProdutos(id: number){
    this.produtoService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
        this.carregarProdutos();
      }
    );
  }

  
  informacaoProduto(id: number){
     this.router.navigate([`informacao-produto/${id}`]); 
    }
  cadastrarNovoProduto(){ 
    this.router.navigate([`cadastrar-produto`]); 
  }
  ativarProduto(id: number){
    this.router.navigate([`/motivo-ativacao-produto/${id}`]);
  }
  inativarProduto(id: number){
    this.router.navigate([`/motivo-inativacao-produto/${id}`]);
  }
  adicionarEstoque(id: number){
    this.router.navigate([`/cadastrar-estoque/${id}`]);
  }

  backPage() { this.router.navigate(['tela-funcionario']); }

  pesquisarProdutos(){
    if(this.pesquisaTitulo.value == ""){

    }else{
      this.router.navigate([`pesquisa-produto/${this.pesquisaTitulo.value}`]);
    }
  }


}
