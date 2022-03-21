import { SharedDataService } from './../../../shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-editar-funcionario-endereco',
  templateUrl: './modal-editar-funcionario-endereco.component.html',
  styleUrls: ['./modal-editar-funcionario-endereco.component.css']
})
export class ModalEditarFuncionarioEnderecoComponent implements OnInit {

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
    , private route: ActivatedRoute) { }

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
    //console.log(this.formEndereco.value);
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

  backPage() { this.router.navigate([`informacao-funcionario`]); }

}
