import { EnderecoEntregaService } from './../../../../shared/services/cadastro-dados-cliente/endereco-entrega.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-cadastrar-entrega',
  templateUrl: './perfil-usuario-cadastrar-entrega.component.html',
  styleUrls: ['./perfil-usuario-cadastrar-entrega.component.css']
})
export class PerfilUsuarioCadastrarEntregaComponent implements OnInit {

  public id?: number;
  public idcliente: number = 0;
  public aux: any
  formEndereco!: FormGroup;

  cliente: any

  enderecoEntregas =
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
    numero: "",
    apelido: "",
    observacao: ""
  }

  get f(): any {
    return this.formEndereco.controls;
  }

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
    , private route: ActivatedRoute,private EnderecoEntregaService: EnderecoEntregaService){}


  ngOnInit() {

    this.route.params.subscribe(x => {
      this.id= x[`clienteid`];
      this.idcliente= x[`clienteid`];
    });

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

  cadastrarEndereco(){
    console.log(this.formEndereco.value);
    this.EnderecoEntregaService.post(this.formEndereco.value).subscribe(
      ()=>{
        console.log();
        this.backPage();
      }
    );
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

  backPage() { this.router.navigate(['/perfil-usuario-enderecos']); }

}
