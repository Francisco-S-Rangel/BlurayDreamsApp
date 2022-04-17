import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/modules/shared/models/produto';
import { ProdutoService } from 'src/app/modules/shared/services/cadastro-dados-pedido/produto.service';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.css']
})
export class InformacaoProdutoComponent implements OnInit {

  public id: number =0;
  public produto?: Produto;

  constructor(private router: Router,private route: ActivatedRoute,private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarFuncionario(this.id);
    }
    )
  }

  carregarFuncionario(id: number){
    this.produtoService.getById(id).subscribe(
      (produto: Produto)=>{
        this.produto = produto;
      }
    );
  }

  editarProduto(id: number){this.router.navigate([`editar-produto/${id}`]);}
  backPage(){this.router.navigate(['consultar-produtos']);}

}
