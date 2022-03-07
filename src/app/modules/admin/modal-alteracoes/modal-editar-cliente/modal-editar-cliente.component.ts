import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ValidadorSenha } from 'src/app/modules/shared/helpers/ValidadorSenha';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-modal-editar-cliente',
  templateUrl: './modal-editar-cliente.component.html',
  styleUrls: ['./modal-editar-cliente.component.css']
})
export class ModalEditarClienteComponent implements OnInit {

  public id?: number;
  form!: FormGroup;

   Clientes = {
    id: 0,
    Nome: "",
    DataNascimento: "",
    ddd: "",
    Telefone: "",
    TipoTelefone: "",
    CPF: "",
    Email: "",
    Senha: ""
  }

  get f(): any {
    return this.form.controls;
  }

  constructor( private router: Router, private formBuilder: FormBuilder, private shared: SharedDataService
    ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
    this.id = x[`id`];});
    this.validacao();
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

  atualizarCliente(){
    
  }

  public validacao(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidadorSenha.isEqual("Senha", "confSenha")
    }

    this.form = this.formBuilder.group({
      Nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      DataNascimento: ['', Validators.required],
      ddd: ['', Validators.required],
      Telefone: ['', Validators.required],
      TipoTelefone: ['', Validators.required],
      CPF: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(60)]],
      Senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confSenha: ['', Validators.required]
    }, formOptions);

  }

    //voltar para a tela de informação
    
    backPage() {this.router.navigate([`informacao-cliente/${this.id}`]);}
    //salvar edição
  
  

}
