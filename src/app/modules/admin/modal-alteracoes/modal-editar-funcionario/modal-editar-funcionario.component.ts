import { EnderecoService } from './../../../shared/services/cadastro-dados-funcionario/endereco.service';
import { FuncionarioService } from './../../../shared/services/cadastro-dados-funcionario/funcionario.service';
import { Endereco } from './../../../shared/models/endereco';
import { ValidadorSenha } from './../../../shared/helpers/ValidadorSenha';
import { SharedDataService } from './../../../shared/services/shared-data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/modules/shared/models/funcionario';

@Component({
  selector: 'app-modal-editar-funcionario',
  templateUrl: './modal-editar-funcionario.component.html',
  styleUrls: ['./modal-editar-funcionario.component.css']
})
export class ModalEditarFuncionarioComponent implements OnInit {

  public id: number =0;
  public idAux: number =0;
  form!: FormGroup;
  public endereco?: Endereco;

  funcionario = {
    id: this.idAux,
    nome: "",
    dataNascimento: "",
    ddd: "",
    telefone: "",
    tipoTelefone: "",
    cpf: "",
    email: "",
    senha: "",
    status: true,
    endereco: this.endereco,
  }

 get f(): any {
   return this.form.controls;
 }

 constructor( private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute,
  private funcionarioService: FuncionarioService,private enderecoService: EnderecoService,private cdRef: ChangeDetectorRef) { }

 ngOnInit(): void {
  this.route.params.subscribe(x => {
    this.id = x[`id`];
    this.idAux = x[`id`];
    this.carregarEndereco(this.id);
  
  });

  this.funcionarioService.getById(this.idAux).subscribe(
    (result) => {
      this.funcionario = result
      //console.log(this.Clientes)
      this.cdRef.detectChanges();
    }
  );
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

 atualizarFuncionario(){
  const datacompleta = new Date(`${this.funcionario.dataNascimento}T06:00:00.000Z`);
  this.form.value.dataNascimento = datacompleta;

   console.log(this.form.value);
   this.funcionarioService.put(this.idAux,this.form.value).subscribe(
     ()=>{
       console.log();
       this.backPage();
     }
   );

 }

 public validacao(): void {

   const formOptions: AbstractControlOptions = {
     validators: ValidadorSenha.isEqual("Senha", "confSenha")
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
     endereco: this.endereco,
     confSenha: ['', Validators.required],
   }, formOptions)

 }

 //carregar para Edição
 carregarFuncionario(id: number){
  this.funcionarioService.getById(id).subscribe(
    (funcionario: Funcionario)=>{
      this.funcionario = funcionario;
    }
  );
}
carregarEndereco(id: number){
  this.enderecoService.getByFuncionarioId(id).subscribe(
    (endereco: Endereco)=>{
      this.endereco = endereco;
      console.log(this.endereco);
    }

  );
  }

  backPage() { this.router.navigate([`informacao-funcionario/${this.id}`]); }

}
