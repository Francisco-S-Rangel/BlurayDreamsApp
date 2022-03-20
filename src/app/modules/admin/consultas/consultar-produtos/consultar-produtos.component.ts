import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.component.html',
  styleUrls: ['./consultar-produtos.component.css']
})
export class ConsultarProdutosComponent implements OnInit {
  public paginacao = [1,2,3];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage() { this.router.navigate(['tela-funcionario']); }
  informacaoProduto() { this.router.navigate(['informacao-produto']); }
  cadastrarNovoProduto() { this.router.navigate(['cadastrar-produto']); }

  inativarProduto(){
    this.router.navigate(['/motivo-inativacao-produto']);
  }

  adicionarEstoque(){
    this.router.navigate(['/cadastrar-estoque']);
  }

}
