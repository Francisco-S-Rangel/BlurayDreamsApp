import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { AtivacaoClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/ativacao-cliente.service';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-motivo-ativacao-cliente',
  templateUrl: './motivo-ativacao-cliente.component.html',
  styleUrls: ['./motivo-ativacao-cliente.component.css']
})
export class MotivoAtivacaoClienteComponent implements OnInit {

  public id: number = 0;
  public cliente?: Cliente;
  form!: FormGroup;
  formMotivo!: FormGroup;

  ativacaocliente = {
    id: 0,
    clienteId: 0,
    motivoAtivacao: "",
    cliente: null
  }

  Motivos = [
    { msg: "Fim do Periodo de Banimento" },
    { msg: "Usúario Re-Logado" }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService, private ativacaoService: AtivacaoClienteService,
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


  cadastrarMotivoAtivacao() {


    if (this.formMotivo.value == null) {

    } else if(this.formMotivo.value != null) {
      const mensagem = this.formMotivo.value;
      this.ativacaocliente.motivoAtivacao= mensagem.motivo;

      console.log(this.formMotivo.value);
      console.log(this.ativacaocliente);

      if(mensagem.motivo !=null){
      this.atualizarCliente();
      this.cadastrarMotivo();
      this.backPage();
      }
    }

  }

  public inserirMotivodeAtivacao() {
    this.ativacaocliente.clienteId = this.id;
    this.ativacaocliente.motivoAtivacao = "";

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
      status: true,

    });

  }

  carregarCliente(id: number) {
    this.clienteService.getById(id).subscribe(
      (cliente: Cliente) => {
        this.cliente = cliente;
        this.validacao();
        this.inserirMotivodeAtivacao();
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
    this.ativacaoService.post(this.ativacaocliente).subscribe(
      () => {
        console.log();
      }
    );
  }

  backPage() {
    this.router.navigate(['/consultar-clientes']);
  }

}
