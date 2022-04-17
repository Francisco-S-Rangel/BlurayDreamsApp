import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modules/shared/models/produto';
import { ProdutoService } from 'src/app/modules/shared/services/cadastro-dados-pedido/produto.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-produtos',
  templateUrl: './modal-editar-produtos.component.html',
  styleUrls: ['./modal-editar-produtos.component.css']
})
export class ModalEditarProdutosComponent implements OnInit {

  public id: number =0;
  public produto?: Produto;
  formEstoque!: FormGroup;
  form!: FormGroup;
  tipo?: string;
  preco?: number;

  
  categorias: any = [
    {cat: "Terror"},
    {cat: "Acão"},
    {cat: "Drama"},
    {cat: "Sci-fi"},
    {cat: "Comedia"},

  ]

  constructor(private router: Router,private route: ActivatedRoute,private produtoService: ProdutoService,
    private fb: FormBuilder, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarProduto(this.id);
    }
    );
  }
  carregarProduto(id: number){
    this.produtoService.getById(id).subscribe(
      (produto: Produto)=>{
        this.produto = produto;
        this.validacao();
      }
    );
  }
  atualizarProduto(){

    let produto = this.form.value;
    produto.preco = this.preco;
    produto.tipo = this.tipo;

    let data = new Date(`${produto.ano}T06:00:00.000Z`);
    produto.ano = data;


    console.log(produto);
  
    this.produtoService.put(this.id,produto).subscribe(
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
  public validacao(): void{

    this.tipo=this.produto?.tipo;
    this.preco=this.produto?.preco;

    this.form = this.formBuilder.group({
      id: this.produto?.id,
      titulo: this.produto?.titulo,
      img: this.produto?.img,
      tipo: this.produto?.tipo,
      categoria: this.produto?.categoria,
      ano: this.produto?.ano,
      direcao: this.produto?.direcao,
      duracao: this.produto?.duracao,
      produtora: this.produto?.produtora,
      sinopse: this.produto?.sinopse,
      status: this.produto?.status,
      preco: this.produto?.preco,
      estoque: this.produto?.estoque,
    });


  }
  backPage(){ this.router.navigate([`informacao-produto/${this.id}`]);}

}
