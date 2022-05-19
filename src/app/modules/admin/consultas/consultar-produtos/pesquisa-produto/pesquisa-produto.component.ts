import { ProdutoService } from './../../../../shared/services/cadastro-dados-pedido/produto.service';
import { Produto } from './../../../../shared/models/produto';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {

  public paginacao = [1,2,3];
  public produtos?: Produto[];
  public pesquisaTitulo = new FormControl('');

  public comparacao: number = 0;
  public titulo: string = "";
  public resultado: string = "";

  constructor(private route: ActivatedRoute,private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.titulo = x[`titulo`];
      this.carregarProdutosporTitulo(this.titulo);
      this.resultado = this.titulo;
    });
  }

  carregarProdutosporTitulo(titulo: string){
    this.produtoService.getProdutosPorTitulo(titulo).subscribe(
      (produtos: Produto[])=>{
        this.produtos = produtos;
        console.log(this.produtos);
        if(produtos.length == 0){
          this.comparacao++;
        }
        if(produtos.length > 0){
          this.comparacao = 0;
        }
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
    this.router.navigate([`consultar-produtos`]);
  }else{
    this.router.navigate([`pesquisa-produto/${this.pesquisaTitulo.value}`]);
  }
}

}
