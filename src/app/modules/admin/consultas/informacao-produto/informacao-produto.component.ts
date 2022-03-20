import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.css']
})
export class InformacaoProdutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage(){this.router.navigate(['consultar-produtos']);}

  editarProduto(){this.router.navigate(['editar-produto']);}

}
