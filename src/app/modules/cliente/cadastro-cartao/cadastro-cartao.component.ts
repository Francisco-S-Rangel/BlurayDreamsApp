import { SharedDataService } from './../../shared/services/shared-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  backPage() { this.router.navigate(['/cadastrar-endereco']); }

  VoltarTelaInicial(){ this.router.navigate(['']);}

  cadastrarCartao(){
    this.cliente.cartaoCreditos = this.cartaoCreditos

    this.cadastrarCliente(this.cliente);

    this.str = JSON.stringify(this.cliente, null, 4);
    console.log(this.str)

    //post
    //this.VoltarTelaInicial()
  }

  naoCadastrarCartao(){
    this.cliente.cartaoCreditos = null;

    this.cadastrarCliente(this.cliente);

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

  cadastrarCliente(cliente: Cliente){
       console.log(cliente);
       this.clienteService.post(this.cliente).subscribe(
        ()=>{
          console.log();
        },
        (erro: any)=>{
          console.log(erro)
        }
       )
  }

}
