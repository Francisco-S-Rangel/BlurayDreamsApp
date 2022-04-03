import { DesativacaoClienteService } from './../../../../shared/services/cadastro-dados-cliente/desativacao-cliente.service';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { textChangeRangeIsUnchanged } from 'typescript';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-motivo-inativacao-cliente',
  templateUrl: './motivo-inativacao-cliente.component.html',
  styleUrls: ['./motivo-inativacao-cliente.component.css']
})
export class MotivoInativacaoClienteComponent implements OnInit {

  public id: number = 0;
  public cliente?: Cliente;
  form!: FormGroup;
  formMotivo!: FormGroup;

  inativacaocliente = {
    id: 0,
    clienteId: 0,
    motivoDesativacao: "",
    cliente: null
  }

  Motivos = [
    { msg: "Conta Inativa" },
    { msg: "Ações Contra o Termo de Uso do Site" }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService, private inativacaoService: DesativacaoClienteService,
    private formBuilder: FormBuilder, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.carregarCliente(this.id);
    });
    this.formMotivo = this.fb.group({
      motivo: [null]
    });
  }


  cadastrarMotivoInativacao() {


    if (this.formMotivo.value == null) {

    } else if(this.formMotivo.value != null) {
      const mensagem = this.formMotivo.value;
      this.inativacaocliente.motivoDesativacao = mensagem.motivo;

      if(mensagem.motivo !=null){
      this.atualizarCliente();
      this.cadastrarMotivo();
      this.backPage();
      }
    }

  }

  public inserirMotivodeInativacao() {
    this.inativacaocliente.clienteId = this.id;
    this.inativacaocliente.motivoDesativacao = "";

  }
  public validacao(): void {

    const cupom = this.cliente?.cupomtroca == null ? 0 : this.cliente.cupomtroca;

    this.form = this.formBuilder.group({
      id: this.cliente?.id,
      nome: this.cliente?.nome,
      dataNascimento: this.cliente?.dataNascimento,
      ddd: this.cliente?.ddd,
      telefone: this.cliente?.telefone,
      tipoTelefone: this.cliente?.tipoTelefone,
      cpf: this.cliente?.cpf,
      email: this.cliente?.email,
      cupomTroca: cupom,
      senha: this.cliente?.senha,
      status: false,

    });

  }

  carregarCliente(id: number) {
    this.clienteService.getById(id).subscribe(
      (cliente: Cliente) => {
        this.cliente = cliente;
        this.validacao();
        this.inserirMotivodeInativacao();
      }
    );
  }
  atualizarCliente() {
    this.clienteService.put(this.id, this.form.value).subscribe(
      () => {
        console.log();
      }
    );
  }
  cadastrarMotivo() {
    this.inativacaoService.post(this.inativacaocliente).subscribe(
      () => {
        console.log();
      }
    );
  }

  backPage() {
    this.router.navigate(['/consultar-clientes']);
  }

}
