import { EnderecoEntregaService } from '../../../../shared/services/cadastro-dados-cliente/endereco-entrega.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-altera-entrega',
  templateUrl: './perfil-usuario-altera-entrega.component.html',
  styleUrls: ['./perfil-usuario-altera-entrega.component.css']
})
export class PerfilUsuarioAlteraEntregaComponent implements OnInit {

  public id?: number;
  public id2?: number;
  public idEnderecoEntrega: number =0;
  public idcliente: number = 0;
  public aux: any
  formEndereco!: FormGroup;

  cliente: any

  enderecoEntregas =
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
    numero: "",
    apelido: "",
    observacao: ""
  }

  get f(): any {
    return this.formEndereco.controls;
  }

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
    , private route: ActivatedRoute,private EnderecoEntregaService: EnderecoEntregaService, private cdRef: ChangeDetectorRef){}


  ngOnInit() {

    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.idEnderecoEntrega = x[`id`];
      this.id2= x[`clienteid`];
      this.idcliente= x[`clienteid`];
    });

    this.EnderecoEntregaService.getById(this.idEnderecoEntrega).subscribe(
      (result)=>{
        //console.log(result)
        this.enderecoEntregas.cep = result.cep
        this.enderecoEntregas.tipoResidencia = result.tipoResidencia
        this.enderecoEntregas.logradouro = result.logradouro
        this.enderecoEntregas.tipoLogradouro = result.tipoLogradouro
        this.enderecoEntregas.bairro = result.bairro
        this.enderecoEntregas.cidade = result.cidade
        this.enderecoEntregas.estado = result.estado
        this.enderecoEntregas.pais = result.pais
        this.enderecoEntregas.numero = result.numero
        this.enderecoEntregas.apelido = result.apelido
        this.enderecoEntregas.observacao = result.observacao!
        this.cdRef.detectChanges();
      }
    );


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

  AlterarEnderecoEntrega() {

    //this.str = JSON.stringify(this.formEndereco.value, null, 4);
    //console.log(this.str)

    this.EnderecoEntregaService.put(this.idEnderecoEntrega,this.formEndereco.value).subscribe(
      ()=>{
        console.log();
        this.backPage();
      }
    );
  }

  public validacao(): void {

    this.formEndereco = this.fb.group({
      id: this.idEnderecoEntrega,
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
