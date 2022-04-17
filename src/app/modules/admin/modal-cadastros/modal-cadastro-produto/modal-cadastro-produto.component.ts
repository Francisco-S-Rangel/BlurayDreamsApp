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
  tipo: string = "Dvd";
  preco: number = 19.90;


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

    categorias: any = [
      {cat: "Terror"},
      {cat: "Acão"},
      {cat: "Drama"},     
      {cat: "Sci-fi"},
      {cat: "Comedia"},

    ]

  constructor(private router: Router, private formBuilder: FormBuilder,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.validacao();
  }

  cadastrarProduto(){
    let produto = this.formProduto.value;
    produto.preco = this.preco;
    produto.tipo = this.tipo;

    let data = new Date(`${produto.ano}T06:00:00.000Z`);
    produto.ano = data;


    console.log(produto);

    this.produtoService.post(produto).subscribe(
      ()=>{
        console.log();
      }
    );

    this.backPage();
  }

  radioChange(event: any) {
    if (event.target.value == 1) {
      this.tipo = "Dvd";
      this.preco = 19.90;
    } else {
      this.tipo = "Bluray";
      this.preco = 39.90;
    }
  }


  public validacao(): void {

    this.formProduto = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      img: ['', Validators.required],
      tipo: this.tipo,
      categoria: ['', Validators.required],
      ano: ['', Validators.required],
      direcao: ['', Validators.required],
      duracao: ['', Validators.required],
      produtora: ['', Validators.required],
      sinopse: ['', Validators.required],
      status: true,
      preco: this.preco,
      estoque: ['', Validators.required],
    });


  }

  backPage() {
    this.router.navigate(['/consultar-produtos']);
  }
}
