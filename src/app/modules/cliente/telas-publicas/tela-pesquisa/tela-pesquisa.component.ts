import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/modules/shared/models/produto';
import { ProdutoService } from 'src/app/modules/shared/services/cadastro-dados-pedido/produto.service';

@Component({
  selector: 'app-tela-pesquisa',
  templateUrl: './tela-pesquisa.component.html',
  styleUrls: ['./tela-pesquisa.component.css']
})
export class TelaPesquisaComponent implements OnInit {

  public comparacao: number = 0;
  public titulo: string = "";
  public resultado: string = "";

  public produtos?: Produto[];
  public paginacao = [1,2,3];


  constructor(private route: ActivatedRoute,private router: Router, private ProdutoService : ProdutoService) { }

  carregarProdutosporTitulo(titulo: string){
    this.ProdutoService.getProdutosPorTitulo(titulo).subscribe(
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

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.titulo = x[`titulo`];
      this.carregarProdutosporTitulo(this.titulo);
      this.resultado = this.titulo;
    });
  }
  produtoSelecionado(id: number) {this.router.navigate([`produto-selecionado/${id}`])};

}
