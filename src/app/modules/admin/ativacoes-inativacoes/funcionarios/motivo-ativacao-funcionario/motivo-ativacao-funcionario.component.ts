import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/modules/shared/models/funcionario';
import { FuncionarioService } from 'src/app/modules/shared/services/cadastro-dados-funcionario/funcionario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AtivacaoFuncionarioService } from 'src/app/modules/shared/services/cadastro-dados-funcionario/ativacao-funcionario.service';

@Component({
  selector: 'app-motivo-ativacao-funcionario',
  templateUrl: './motivo-ativacao-funcionario.component.html',
  styleUrls: ['./motivo-ativacao-funcionario.component.css']
})
export class MotivoAtivacaoFuncionarioComponent implements OnInit {

  public id: number = 0;
  public funcionario?: Funcionario;
  form!: FormGroup;
  formMotivo!: FormGroup;

  ativacaofuncionario = {
    id: 0,
    funcionarioId: 0,
    motivoAtivacao: "",
    funcionario: null
  }

  Motivos = [
    { msg: "Funcionario re-contratado" },
    { msg: "Funcionario recuperou acesso a conta" },
    { msg: "Outro"}
  ];


  constructor(private router: Router,private route: ActivatedRoute,private funcionarioService: FuncionarioService, private ativacaoService: AtivacaoFuncionarioService,
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

  cadastrarMotivoAtivacao(){

    if (this.formMotivo.value == null) {

    } else if(this.formMotivo.value != null) {
      const mensagem = this.formMotivo.value;
      this.ativacaofuncionario.motivoAtivacao = mensagem.motivo;

      console.log(this.ativacaofuncionario);
      console.log(this.funcionario);

      if(mensagem.motivo !=null){
      this.atualizarFuncionario();
      this.cadastrarMotivo();
      this.backPage();
      
      }
    }

  }

  public inserirMotivoAtivacao() {
    this.ativacaofuncionario.funcionarioId = this.id;
    this.ativacaofuncionario.motivoAtivacao = "";
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
      status: true,
    });

  }

  carregarFuncionario(id: number){
    this.funcionarioService.getById(id).subscribe(
      (funcionario: Funcionario) => {
        this.funcionario = funcionario;
        this.validacao();
        this.inserirMotivoAtivacao();
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
    this.ativacaoService.post(this.ativacaofuncionario).subscribe(
      () => {
        console.log();
      }
    );
  }

  backPage() {
    this.router.navigate(['/consultar-funcionarios']);
  }
}
