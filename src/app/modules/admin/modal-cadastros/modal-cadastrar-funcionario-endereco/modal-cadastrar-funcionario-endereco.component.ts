import { Endereco } from './../../../shared/models/enderero';
import { FuncionarioService } from './../../../shared/services/cadastro-dados-funcionario/funcionario.service';
import { SharedDataService } from './../../../shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroFuncionarioService } from 'src/app/modules/shared/services/cadastro-dados-funcionario/cadastro-funcionario.service';
import { Funcionario } from 'src/app/modules/shared/models/funcionario';

@Component({
  selector: 'app-modal-cadastrar-funcionario-endereco',
  templateUrl: './modal-cadastrar-funcionario-endereco.component.html',
  styleUrls: ['./modal-cadastrar-funcionario-endereco.component.css']
})
export class ModalCadastrarFuncionarioEnderecoComponent implements OnInit {


  public str: any
  formEndereco!: FormGroup;

  funcionario: any

  endereco =
    {
      id: 0,
      funcionarioId: 0,
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


  constructor(private router: Router, private fb: FormBuilder, private cadastrofuncionario: CadastroFuncionarioService
    , private route: ActivatedRoute, private funcionarioService: FuncionarioService) { 
      this.funcionario = this.cadastrofuncionario.getFuncionario();
    }

  ngOnInit() {

    this.validacao()
  }


  get f(): any {
    return this.formEndereco.controls;
  }

cadastrarEndereco(){
  //Tratando Data para que seja combativel com o DateTime do .Net
  const datacompleta = new Date(`${this.funcionario.dataNascimento}T06:00:00.000Z`);
  this.funcionario.dataNascimento = datacompleta;

  this.funcionario.endereco = this.endereco;
  console.log(this.funcionario);
  this.cadastrarFuncionario(this.funcionario);
}
cadastrarFuncionario(func: Funcionario) {
    //console.log(this.formEndereco.value);
    this.funcionarioService.post(func).subscribe(
      ()=>{
        console.log();
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
      funcionarioid: 0,
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

  backPage() { this.router.navigate([`cadastrar-funcionario`]); }
  voltarparaconsultafuncionario()  { this.router.navigate([`consultar-funcionarios`]); }

}
