import { Cliente } from './../../shared/models/cliente';
import { SharedDataService } from './../../shared/services/shared-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent implements OnInit {

  formEndereco!: FormGroup;

  cliente?: any
  clienteDono: Cliente | undefined;

  str: any

  enderecoEntregas = [
    {
      id: 0,
      clienteId: 0,
      cep: "",
      tipoResidencia: "",
      logradouro: "",
      tipoLogradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "",
      numero: "",
      apelido: "",
      observacao: ""
    }
  ]

  enderecoCobrancas = [
    {
      id: 0,
      clienteId: 0,
      cep: "",
      tipoResidencia: "",
      logradouro: "",
      tipoLogradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "",
      numero: "",
    }
  ]

  get f(): any {
    return this.formEndereco.controls;
  }

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService) {
    this.cliente = this.shared.getClientes()
  }


  ngOnInit() {
    this.validacao()
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  VoltarTelaInicial(){ this.router.navigate(['']);}

  irParaCartao(){ this.router.navigate(['/cadastrar-cartao'])}


  cadastrarCliEnd() {

    const datacompleta = new Date(`${this.cliente.DataNascimento}T06:00:00.000Z`);
    this.cliente.DataNascimento = datacompleta;

    this.cliente.enderecoCobrancas = this.enderecoCobrancas;
    this.cliente.enderecoEntregas = this.enderecoEntregas;
    this.shared.setClientes(this.cliente);
    this.irParaCartao();
  }

  public validacao(): void {

    this.formEndereco = this.fb.group({
      cep: ['', Validators.required],
      TipoResidencia: ['', Validators.required],
      Logradouro: ['', Validators.required],
      TipoLogradouro: ['', Validators.required],
      Bairro: ['', Validators.required],
      Cidade: ['', Validators.required],
      Estado: ['', Validators.required],
      Pais: ['', Validators.required],
      Numero: ['', [Validators.required]],
      Apelido: ['', Validators.required],
      Obs: [''],

      cep2: ['', Validators.required],
      TipoResidencia2: ['', Validators.required],
      Logradouro2: ['', Validators.required],
      TipoLogradouro2: ['', Validators.required],
      Bairro2: ['', Validators.required],
      Cidade2: ['', Validators.required],
      Estado2: ['', Validators.required],
      Pais2: ['', Validators.required],
      Numero2: ['', [Validators.required]],
    })


  }

}

