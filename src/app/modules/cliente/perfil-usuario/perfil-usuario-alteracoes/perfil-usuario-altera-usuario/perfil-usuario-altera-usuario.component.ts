import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ValidadorSenha } from 'src/app/modules/shared/helpers/ValidadorSenha';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-perfil-usuario-altera-usuario',
  templateUrl: './perfil-usuario-altera-usuario.component.html',
  styleUrls: ['./perfil-usuario-altera-usuario.component.css']
})
export class PerfilUsuarioAlteraUsuarioComponent implements OnInit {

  public id?: number;
  public idAux: number = 0;
  public form!: FormGroup;

  Clientes = {
    id: this.idAux,
    nome: "",
    dataNascimento: "",
    ddd: "",
    telefone: "",
    tipoTelefone: "",
    cpf: "",
    email: "",
    senha: ""
  }

  get f(): any {
    return this.form.controls;
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private shared: SharedDataService
    , private route: ActivatedRoute, private clienteService: ClienteService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.idAux = x[`id`];
    });

    this.clienteService.getById(this.idAux).subscribe(
      (result) => {
        this.Clientes = result
        //console.log(this.Clientes)
        this.cdRef.detectChanges();
      }
    );

    this.validacao();
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;

    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  atualizarCliente() {
    //console.log(this.form.value);

    this.clienteService.put(this.idAux, this.form.value).subscribe(
      () => {
        console.log();
        this.backPage();
      }
    );

  }

  public validacao(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidadorSenha.isEqual("senha", "confSenha")
    }

    this.form = this.formBuilder.group({
      id: this.idAux,
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      dataNascimento: ['', Validators.required],
      ddd: ['', Validators.required],
      telefone: ['', Validators.required],
      tipoTelefone: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(60)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confSenha: ['', Validators.required]
    }, formOptions);

  }

  //voltar para a tela de informação

  backPage() { this.router.navigate(['/perfil-usuario-main']); }

}
