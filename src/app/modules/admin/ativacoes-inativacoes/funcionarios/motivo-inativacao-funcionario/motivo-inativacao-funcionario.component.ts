import { DesativacaoFuncionarioService } from './../../../../shared/services/cadastro-dados-funcionario/desativacao-funcionario.service';
import { FuncionarioService } from './../../../../shared/services/cadastro-dados-funcionario/funcionario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/modules/shared/models/funcionario';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-motivo-inativacao-funcionario',
  templateUrl: './motivo-inativacao-funcionario.component.html',
  styleUrls: ['./motivo-inativacao-funcionario.component.css']
})
export class MotivoInativacaoFuncionarioComponent implements OnInit {

  public id: number = 0;
  public funcionario?: Funcionario;
  form!: FormGroup;
  formMotivo!: FormGroup;

  inativacaofuncionario = {
    id: 0,
    funcionarioId: 0,
    motivoDesativacao: "",
    funcionario: null
  }

  Motivos = [
    { msg: "Funcionario não trabalha mais na empresa" },
    { msg: "Funcionario trocou de conta" },
    { msg: "Outro"}
  ];


  constructor(private router: Router,private route: ActivatedRoute,private funcionarioService: FuncionarioService, private inativacaoService: DesativacaoFuncionarioService,
    private formBuilder: FormBuilder, private fb: FormBuilder  ) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.carregarFuncionario(this.id);
    });
    this.formMotivo = this.fb.group({
      motivo: [null]
    });
  }

  cadastrarMotivoInativacao(){

    if (this.formMotivo.value == null) {

    } else if(this.formMotivo.value != null) {
      const mensagem = this.formMotivo.value;
      this.inativacaofuncionario.motivoDesativacao = mensagem.motivo;

      console.log(this.inativacaofuncionario);
      console.log(this.funcionario);

      if(mensagem.motivo !=null){
      this.atualizarFuncionario();
      this.cadastrarMotivo();
      this.backPage();
      
      }
    }

  }

  public inserirMotivoInativacao() {
    this.inativacaofuncionario.funcionarioId = this.id;
    this.inativacaofuncionario.motivoDesativacao = "";
  }

  public validacao(): void{

    this.form = this.formBuilder.group({
      id: this.funcionario?.id,
      nome: this.funcionario?.nome,
      dataNascimento: this.funcionario?.dataNascimento,
      ddd: this.funcionario?.ddd,
      telefone: this.funcionario?.telefone,
      tipoTelefone: this.funcionario?.tipoTelefone,
      cpf: this.funcionario?.cpf,
      email: this.funcionario?.email,
      senha: this.funcionario?.senha,
      status: false,
    });

  }

  carregarFuncionario(id: number){
    this.funcionarioService.getById(id).subscribe(
      (funcionario: Funcionario) => {
        this.funcionario = funcionario;
        this.validacao();
        this.inserirMotivoInativacao();
      }
    );
  }
  atualizarFuncionario() {

    this.funcionarioService.put(this.id, this.form.value).subscribe(
      () => {
        console.log();
      }
    );
  }
  cadastrarMotivo(){
    this.inativacaoService.post(this.inativacaofuncionario).subscribe(
      () => {
        console.log();
      }
    );
  }

  backPage() {
    this.router.navigate(['/consultar-funcionarios']);
  }

}
