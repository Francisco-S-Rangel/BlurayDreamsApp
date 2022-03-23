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
  public produto?: Produto;

  constructor(private router: Router, private route: ActivatedRoute, private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarProduto(this.id)
    })
  }


  carregarProduto(id: number){
    this.ProdutoService.getById(id).subscribe(
      (produto: Produto)=>{
        this.produto = produto;
        console.log(this.produto);
      }
    );
  }

  backPage(){ this.router.navigate([''])};

}
