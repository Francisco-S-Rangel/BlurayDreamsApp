import { DesativacaoProdutoService } from './../../../../shared/services/cadastro-dados-pedido/desativacao-produto.service';
import { ProdutoService } from './../../../../shared/services/cadastro-dados-pedido/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modules/shared/models/produto';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-motivo-inativacao',
  templateUrl: './motivo-inativacao.component.html',
  styleUrls: ['./motivo-inativacao.component.css']
})
export class MotivoInativacaoComponent implements OnInit {

  public id: number = 0;
  public produto?: Produto;
  form!: FormGroup;
  formMotivo!: FormGroup;

  inativacaoProduto = {
    id: 0,
    produtoId: 0,
    motivoDesativacao: "",
  }

  Motivos = [
    {msg: "Falta Estoque"},
    {msg: "Baixas Vendas"},
    {msg: "Outro"}
  ];

  constructor(private router: Router,private route: ActivatedRoute,private produtoService: ProdutoService,
    private formBuilder: FormBuilder, private fb: FormBuilder,private inativacaoService: DesativacaoProdutoService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.carregarProduto(this.id);
    });
    this.formMotivo = this.fb.group({
      motivo: [null]
    });
  }

  carregarProduto(id: number){
    this.produtoService.getById(id).subscribe(
      (produto: Produto) => {
        this.produto = produto;
        this.validacao();
        this.inserirMotivoInativacao();
      }
    );
  }
  atualizarProduto() {

    this.produtoService.put(this.id, this.form.value).subscribe(
      () => {
        console.log();
      }
    );
  }
  cadastrarMotivo(){
    this.inativacaoService.post(this.inativacaoProduto).subscribe(
      () => {
        console.log();
      }
    );
  }
  cadastrarMotivoInativacao(){

    if(this.formMotivo.value == null){

    }else if(this.formMotivo.value != null){
      const mensagem = this.formMotivo.value;
      this.inativacaoProduto.motivoDesativacao = mensagem.motivo;

      console.log(this.inativacaoProduto);
      console.log(this.produto);

      if(mensagem.motivo != null){
        console.log(mensagem.motivo);
        if(mensagem.motivo == "Falta Estoque"){
          this.form.value.estoque = 0;
        }
        this.atualizarProduto();
        this.cadastrarMotivo();
        this.backPage(); 
      }
    }

  }
public inserirMotivoInativacao(){
  this.inativacaoProduto.produtoId = this.id;
  this.inativacaoProduto.motivoDesativacao = "";

}
  public validacao(): void {

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
      status: false,
      preco: this.produto?.preco,
      estoque: this.produto?.estoque,
    });

  }

  backPage() {
    this.router.navigate(['/consultar-produtos']);
  }

}
