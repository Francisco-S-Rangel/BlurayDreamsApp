import { EfetivarCompraRequest } from './../../../shared/models/efetivarCompraRequest';
import { EnderecoCobrancas } from './../../../shared/models/enderecoCobranca';
import { EnderecoCobrancaService } from './../../../shared/services/cadastro-dados-cliente/endereco-cobranca.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-endereco-cobranca',
  templateUrl: './finalizar-endereco-cobranca.component.html',
  styleUrls: ['./finalizar-endereco-cobranca.component.css']
})
export class FinalizarEnderecoCobrancaComponent implements OnInit {

  public idcliente: number = 1;
  public radioUsarEndereco: boolean = true;
  public radioCadastrarEndereco: boolean = true;
  public enderecoId: number = 0;
  public formEndereco!: FormGroup;
  public EfetivarCompraRequest: EfetivarCompraRequest

  public enderecosCliente?: EnderecoCobrancas[]

  public enderecoCobrancas =
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
      numero: ""
    }


  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
    , private route: ActivatedRoute, private EnderecoCobrancaService: EnderecoCobrancaService) {
    this.EfetivarCompraRequest = this.shared.getRequest()
    //alert(this.EfetivarCompraRequest)
  }

  ngOnInit() {
    this.validacao()
    this.carregarEnderecosCliente(1)
  }

  carregarEnderecosCliente(id: number) {
    this.EnderecoCobrancaService.getByClienteId(id).subscribe(
      (enderecoCobrancas: EnderecoCobrancas[]) => {
        this.enderecosCliente = enderecoCobrancas;
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
      this.EfetivarCompraRequest.enderecoCobrancaId = this.enderecoId
      this.EfetivarCompraRequest.enderecoEntregaId = 0
      this.shared.setRequest(this.EfetivarCompraRequest)
      this.router.navigate(['finalizar-endereco-entrega']);
    } else {

      if (this.radioCadastrarEndereco) {
        this.EnderecoCobrancaService.post(this.formEndereco.value).subscribe(() => {
          this.EnderecoCobrancaService.getByClienteId(1).subscribe((enderecosCobrancas) => {
            //alert(enderecosCobrancas[enderecosCobrancas.length-1].id)
            this.EfetivarCompraRequest.enderecoCobrancaId = enderecosCobrancas[enderecosCobrancas.length - 1].id
            this.EfetivarCompraRequest.enderecoEntregaId = 0
            this.shared.setRequest(this.EfetivarCompraRequest)
            this.router.navigate(['finalizar-endereco-entrega']);
          })
        })
      } else {
        this.EfetivarCompraRequest.enderecoCobrancaId = 2
        this.EfetivarCompraRequest.enderecoEntregaId = 0
        this.shared.setRequest(this.EfetivarCompraRequest)
        this.router.navigate(['finalizar-endereco-entrega']);
      }

    }
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

  public validacao(): void {

    this.formEndereco = this.fb.group({
      id: 0,
      clienteid: this.idcliente,
      cep: ['', Validators.required],
      tipoResidencia: ['', Validators.required],
      logradouro: ['', Validators.required],
      tipoLogradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      pais: ['', Validators.required],
      numero: ['', [Validators.required]],
    })

  }

  get f(): any {
    return this.formEndereco.controls;
  }

  backPage() { this.router.navigate(['finalizar-cartao']); }

}
