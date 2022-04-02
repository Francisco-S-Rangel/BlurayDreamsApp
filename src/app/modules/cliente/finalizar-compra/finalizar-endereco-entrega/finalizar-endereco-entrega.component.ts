import { EfetivarCompraRequest } from './../../../shared/models/efetivarCompraRequest';
import { CarrinhoComprasService } from './../../../shared/services/cadastro-dados-pedido/carrinho-compras.service';
import { EnderecoEntregas } from './../../../shared/models/enderecoEntrega';
import { EnderecoEntregaService } from './../../../shared/services/cadastro-dados-cliente/endereco-entrega.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-endereco-entrega',
  templateUrl: './finalizar-endereco-entrega.component.html',
  styleUrls: ['./finalizar-endereco-entrega.component.css']
})
export class FinalizarEnderecoEntregaComponent implements OnInit {


  public idcliente: number = 1;
  public radioUsarEndereco: boolean = true;
  public radioCadastrarEndereco: boolean = true;
  enderecoId: number = 0;
  formEndereco!: FormGroup;

  enderecosCliente?: EnderecoEntregas[]

  EfetivarCompraRequest: EfetivarCompraRequest


  enderecoEntregas =
    {
      id: 0,
      clienteId: this.idcliente,
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

  get f(): any {
    return this.formEndereco.controls;
  }

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
    , private route: ActivatedRoute, private EnderecoEntregaService: EnderecoEntregaService, private CarrinhoComprasService: CarrinhoComprasService) {

    this.EfetivarCompraRequest = this.shared.getRequest()
    console.log(this.EfetivarCompraRequest.enderecoCobrancaId)
  }


  ngOnInit() {
    this.validacao()
    this.carregarEnderecosCliente(1)
  }

  carregarEnderecosCliente(id: number) {
    this.EnderecoEntregaService.getByClienteId(id).subscribe(
      (enderecoEntregas: EnderecoEntregas[]) => {
        this.enderecosCliente = enderecoEntregas;
      }
    )
  }

  selectChange(event: any) {
    let evt: number = parseInt(event.target.value)
    this.enderecoId = evt
  }

  radioAddEnderecoChange(event: any) {
    if (event.target.value == 1) {
      this.radioCadastrarEndereco = true
    } else {
      this.radioCadastrarEndereco = false
    }
  }

  radioChange(event: any) {
    if (event.target.value == 1) {
      this.radioUsarEndereco = true
    } else {
      this.radioUsarEndereco = false
    }
  }

  cadastrarEndereco() {
    if (this.radioUsarEndereco) {
      this.EfetivarCompraRequest.enderecoEntregaId = this.enderecoId
      console.log(this.EfetivarCompraRequest)
      this.CarrinhoComprasService.efetivarCompra(1, this.EfetivarCompraRequest).subscribe(() => {
        console.log("Sucess!")
      })
    } else {

      if (this.radioCadastrarEndereco) {
        this.EnderecoEntregaService.post(this.formEndereco.value).subscribe(() => {
          this.EnderecoEntregaService.getByClienteId(1).subscribe((enderecosEntregas) => {
            this.EfetivarCompraRequest.enderecoEntregaId = enderecosEntregas[enderecosEntregas.length - 1].id
            console.log(this.EfetivarCompraRequest)
            this.CarrinhoComprasService.efetivarCompra(1, this.EfetivarCompraRequest).subscribe(() => {
              console.log("Sucess!")
            })
          })
        })
        console.log("cadastrou!")
      } else {
        console.log("Nao cadastrar!!!")
      }

    }
    this.router.navigate(['finalizar-endereco-entrega']);
  }

  public validacao(): void {

    this.formEndereco = this.fb.group({
      id: 0,
      clienteid: this.idcliente,
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
      observacao: [''],
    })


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

  backPage() { this.router.navigate(['/finalizar-endereco-cobranca']); }

}
