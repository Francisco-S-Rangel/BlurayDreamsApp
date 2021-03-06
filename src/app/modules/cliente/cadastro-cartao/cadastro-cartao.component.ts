import { SharedDataService } from './../../shared/services/shared-data.service';
import { FormBuilder, FormGroup, ValidatorFn, Validators, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/services/cadastro-dados-cliente/cliente.service';
import { Cliente } from '../../shared/models/cliente';

@Component({
  selector: 'app-cadastro-cartao',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent implements OnInit {

  cliente: any;

  bandeiraCartao: any = [
    {
      bandeira: "visa"
    },
    {
      bandeira: "mastercard"
    },
    {
      bandeira: "elo"
    }
  ]

  str: any;

  cartaoCreditos = [
    {
      id: 0,
      clienteId: 0,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }
  ]

  formCartao!: FormGroup;

  get f(): any {
    return this.formCartao.controls;
  }


  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService,private clienteService: ClienteService) {
    this.cliente = this.shared.getClientes()
  }

  ngOnInit() {
    this.validacao();
  }

  VoltarTelaInicial(){ this.router.navigate(['']);}

  cadastrarCartao(){
    this.cliente.cartaoCreditos = this.cartaoCreditos

    this.cadastrarCliente(this.cliente);

    this.str = JSON.stringify(this.cliente, null, 4);
    console.log(this.str)

    this.VoltarTelaInicial()
  }

  naoCadastrarCartao(){
    this.cliente.cartaoCreditos = null;

    this.cadastrarCliente(this.cliente);

    this.str = JSON.stringify(this.cliente, null, 4);
    console.log(this.str)

   this.VoltarTelaInicial()
  }

  public validacao(): void {

    const formOptions: AbstractControlOptions = {
      validators: this.controlBandeiraPermitida("BandeiraCartao")
    }

    this.formCartao = this.fb.group({
      numeroCartao: ['', [Validators.required]],
      NomeTitular: ['', Validators.required],
      BandeiraCartao: ['', Validators.required],
      cvv: ['', Validators.required]
    }, formOptions)


  }

  private controlBandeiraPermitida(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup
      const control = formGroup.controls[controlName]
      let match:boolean = false

      for (let i = 0; i < this.bandeiraCartao.length; i++) {

        if (control.value.toLowerCase() == this.bandeiraCartao[i].bandeira){
          match = true
        }

      }

      if (control.errors && !control.errors['notValid']) {
        return null
      }

      if(match != true){
        control.setErrors({notValid: true})
      } else {
        control.setErrors(null)
      }

      return null

    }
  }

  cadastrarCliente(cliente: Cliente){
       console.log(cliente);
       this.clienteService.post(this.cliente).subscribe(
        ()=>{
          console.log();
        }
       )
  }

}
