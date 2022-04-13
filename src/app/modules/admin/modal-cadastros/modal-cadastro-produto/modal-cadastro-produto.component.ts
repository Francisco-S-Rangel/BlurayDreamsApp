import { Produto } from './../../../shared/models/produto';
import { ProdutoService } from './../../../shared/services/cadastro-dados-pedido/produto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cadastro-produto',
  templateUrl: './modal-cadastro-produto.component.html',
  styleUrls: ['./modal-cadastro-produto.component.css']
})
export class ModalCadastroProdutoComponent implements OnInit {

  formProduto!: FormGroup;


  produto =
    {
      id: 0,
      titulo: "",
      img: "",
      tipo: "",
      categoria: "",
      ano: "",
      direcao: "",
      duracao: "",
      produtora: "",
      sinopse: "",
      status: true,
      preco: 0,
      estoque: 0,
    }

  constructor(private router: Router, private formBuilder: FormBuilder,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.validacao();
  }


  public validacao(): void {

    this.formProduto = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      img: ['', Validators.required],
      tipo: ['', Validators.required],
      categoria: ['', Validators.required],
      ano: ['', Validators.required],
      direcao: ['', Validators.required],
      duracao: ['', Validators.required],
      produtora: ['', Validators.required],
      sinopse: ['', Validators.required],
      status: true,
      preco: ['', Validators.required],
      estoque: ['', Validators.required],
    });


  }

  backPage() {
    this.router.navigate(['/consultar-produtos']);
  }
}
