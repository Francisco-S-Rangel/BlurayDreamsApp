import { SharedDataService } from './../../shared/services/shared-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cartao',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent implements OnInit {

  cliente: any;

  str: any;

  cartaoCredito = {
    numeroCartao: "",
    bandeiraCartao: "",
    cvv: "",
    nomeTitular: ""
  }

  formCartao!: FormGroup;

  get f(): any {
    return this.formCartao.controls;
  }


  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService) {
    this.cliente = this.shared.getClientes()
  }

  ngOnInit() {
    this.validacao();
  }

  backPage() { this.router.navigate(['/cadastrar-endereco']); }

  VoltarTelaInicial(){ this.router.navigate(['']);}

  cadastrarCartao(){
    this.cliente.cartoesCreditos = this.cartaoCredito

    this.str = JSON.stringify(this.cliente, null, 4);
    console.log(this.str)

    //post
    //this.VoltarTelaInicial()
  }

  naoCadastrarCartao(){
    this.cliente.cartoesCreditos = null

    this.str = JSON.stringify(this.cliente, null, 4);
    console.log(this.str)

    //post
    //this.VoltarTelaInicial()
  }

  public validacao(): void {

    this.formCartao = this.fb.group({
      numeroCartao: ['', [Validators.required]],
      NomeTitular: ['', Validators.required],
      BandeiraCartao: ['', Validators.required],
      cvv: ['', Validators.required]
    })


  }

}
