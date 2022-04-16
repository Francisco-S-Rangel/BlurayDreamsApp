import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/modules/shared/services/cadastro-dados-pedido/produto.service';
import { Produto } from 'src/app/modules/shared/models/produto';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-cadastrar-estoque',
  templateUrl: './modal-cadastrar-estoque.component.html',
  styleUrls: ['./modal-cadastrar-estoque.component.css']
})
export class ModalCadastrarEstoqueComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private produtoService: ProdutoService,
    private fb: FormBuilder, private formBuilder: FormBuilder) { }

  public id: number = 0;
  public produto?: Produto;
  formEstoque!: FormGroup;
  form!: FormGroup;

  ngOnInit() {
    this.route.params.subscribe(x=>{
      this.id= x[`id`];
      this.carregarProduto(this.id);
    });
    this.formEstoque = this.fb.group(
      {estoqueNovo: 0}
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
    this.produtoService.put(this.id,this.form.value).subscribe(
      ()=>{
        console.log();
      }
    );
  }
  NovoEstoque(){

    let estoquefinal = this.produto?.estoque + this.formEstoque.value.estoqueNovo;
    console.log(estoquefinal);
    this.form.value.estoque = estoquefinal;
    console.log(this.form.value);
    this.atualizarProduto();
    this.backPage();
  }
  public validacao(): void{

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
  backPage(){
    this.router.navigate(['/consultar-produtos']);
  }

}
