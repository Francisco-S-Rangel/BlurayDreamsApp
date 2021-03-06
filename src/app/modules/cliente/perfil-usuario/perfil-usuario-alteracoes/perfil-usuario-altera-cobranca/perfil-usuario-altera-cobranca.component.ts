import { EnderecoCobrancaService } from './../../../../shared/services/cadastro-dados-cliente/endereco-cobranca.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-altera-cobranca',
  templateUrl: './perfil-usuario-altera-cobranca.component.html',
  styleUrls: ['./perfil-usuario-altera-cobranca.component.css']
})
export class PerfilUsuarioAlteraCobrancaComponent implements OnInit {

  public id?: number;
  public id2?: number;
  public idEnderecoCobranca: number =0;
  public idcliente: number = 0;
  public str: any
  formEndereco!: FormGroup;

  cliente: any

  enderecoCobrancas =
    {
      id: this.id,
      clienteId: this.id2,
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
    , private route: ActivatedRoute,private EnderecoCobrancaService: EnderecoCobrancaService, private cdRef: ChangeDetectorRef) {

    }


    ngOnInit() {

      this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.idEnderecoCobranca = x[`id`];
      this.id2= x[`clienteid`];
      this.idcliente= x[`clienteid`];
    });

    this.EnderecoCobrancaService.getById(this.idEnderecoCobranca).subscribe(
      (result)=>{
        //console.log(result)
        this.enderecoCobrancas = result
        this.cdRef.detectChanges();
      }
    );


    this.validacao()
  }


  get f(): any {
    return this.formEndereco.controls;
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

  AlterarEnderecoCobranca() {

    //this.str = JSON.stringify(this.formEndereco.value, null, 4);
    //console.log(this.str)

    this.EnderecoCobrancaService.put(this.idEnderecoCobranca,this.formEndereco.value).subscribe(
      ()=>{
        console.log();
        this.backPage();
      }
    );
  }

  public validacao(): void {

    this.formEndereco = this.fb.group({
      id: this.idEnderecoCobranca,
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

  backPage() { this.router.navigate(['perfil-usuario-enderecos']); }

}
