import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-editar-produtos',
  templateUrl: './modal-editar-produtos.component.html',
  styleUrls: ['./modal-editar-produtos.component.css']
})
export class ModalEditarProdutosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage(){ this.router.navigate([`informacao-produto`]);}

}
