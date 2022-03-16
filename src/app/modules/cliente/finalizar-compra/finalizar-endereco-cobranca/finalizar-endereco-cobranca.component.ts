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

  public id?: number;
  public idcliente: number = 0;
  public str: any
  formEndereco!: FormGroup;

  cliente: any

  enderecoCobrancas =
    {
      id: 0,
      clienteId: this.id,
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
    , private route: ActivatedRoute, private EnderecoCobrancaService: EnderecoCobrancaService) { }

  ngOnInit() {

    this.route.params.subscribe(x => {
      this.id = x[`clienteid`];
      this.idcliente = x[`clienteid`];
    });

    this.validacao()
  }


  get f(): any {
    return this.formEndereco.controls;
  }


  cadastrarEndereco() {
    console.log(this.formEndereco.value);
    this.EnderecoCobrancaService.post(this.formEndereco.value).subscribe(
      () => {
        console.log();
        this.backPage();
      }
    );
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

  backPage() { this.router.navigate(['finalizar-cartao']); }

}
