import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaTrocas(){this.router.navigate(['/finalizar-cupom-troca'])}

}
