import { AtivacaoProdutoService } from './../../../../shared/services/cadastro-dados-pedido/ativacao-produto.service';
import { ProdutoService } from './../../../../shared/services/cadastro-dados-pedido/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modules/shared/models/produto';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-motivo-ativacao',
  templateUrl: './motivo-ativacao.component.html',
  styleUrls: ['./motivo-ativacao.component.css']
})
export class MotivoAtivacaoComponent implements OnInit {

  public id: number = 0;
  public produto?: Produto;
  form!: FormGroup;
  formMotivo!: FormGroup;
  formEstoque!: FormGroup;


  ativacaoproduto = {
    id: 0,
    produtoId: 0,
    motivoAtivacao: "",
    produto: null
  }

  Motivos =[
    { msg:"Produto de Volta no Estoque"},
    { msg:"Inativação Equivocada"},
    { msg:"Produto com Demanda"}
  ];

  constructor(private router: Router,private route: ActivatedRoute,private produtoService: ProdutoService,
    private ativacaoService: AtivacaoProdutoService, private formBuilder: FormBuilder, private fb: FormBuilder,
    private fb2: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(x=>{
      this.id= x[`id`];
      this.carregarProduto(this.id);
    });
    this.formMotivo = this.fb.group({
      motivo: [null]
    });
    this.formEstoque = this.fb2.group({
      estoqueNovo: 0
    });
  }
  cadastrarMotivoAtivacao(){

    if(this.formMotivo.value == null){

    }else if(this.formMotivo.value != null){
      const mensagem = this.formMotivo.value;
      this.ativacaoproduto.motivoAtivacao = mensagem.motivo;

      console.log(this.ativacaoproduto);
      console.log(this.produto);

      if(mensagem.motivo != null){
        console.log(mensagem.motivo);
        if(mensagem.motivo == "Produto de Volta no Estoque"){
          this.form.value.estoque = this.formEstoque.value.estoqueNovo;
          console.log(this.form.value);
        }
        this.atualizarProduto();
        this.cadastrarMotivo();
        this.backPage(); 
      }
    }


  }
  public inserirMotivoAtivacao(){
    this.ativacaoproduto.produtoId = this.id;
    this.ativacaoproduto.motivoAtivacao = "";
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
      status: true,
      preco: this.produto?.preco,
      estoque: this.produto?.estoque,
    });


  }
  carregarProduto(id: number){
    this.produtoService.getById(id).subscribe(
      (produto: Produto)=>{
        this.produto = produto;
        this.validacao();
        this.inserirMotivoAtivacao();
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
  cadastrarMotivo(){
    this.ativacaoService.post(this.ativacaoproduto).subscribe(
      ()=>{
        console.log();
      }
    );
  }
  backPage() {
    this.router.navigate(['/consultar-produtos']);
  }

}
