import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cadastrar-estoque',
  templateUrl: './modal-cadastrar-estoque.component.html',
  styleUrls: ['./modal-cadastrar-estoque.component.css']
})
export class ModalCadastrarEstoqueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage(){
    this.router.navigate(['/consultar-produtos']);
  }

}
