import { ValidadorSenha } from './../../../shared/helpers/ValidadorSenha';
import { SharedDataService } from './../../../shared/services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroFuncionarioService } from 'src/app/modules/shared/services/cadastro-dados-funcionario/cadastro-funcionario.service';

@Component({
  selector: 'app-modal-cadastrar-funcionario',
  templateUrl: './modal-cadastrar-funcionario.component.html',
  styleUrls: ['./modal-cadastrar-funcionario.component.css']
})
export class ModalCadastrarFuncionarioComponent implements OnInit {

  form!: FormGroup;

  funcionario = {
   id: 0,
   nome: "",
   dataNascimento: "",
   ddd: "",
   telefone: "",
   tipoTelefone: "",
   cpf: "",
   email: "",
   senha: "",
   status: true,
 }

/*
 public atualizarData() {
  const nascimento = new Date(1982,11,28);
} */

 get f(): any {
   return this.form.controls;
 }

 constructor( private router: Router, private formBuilder: FormBuilder, private cadastrofuncionario: CadastroFuncionarioService) { }

 ngOnInit(): void {
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


 backPage() { this.router.navigate(['/consultar-funcionarios']); }

 irParaEndereco(){ this.router.navigate(['/cadastrar-funcionario-endereco'])}

 cadastrarFuncionario(){
   this.cadastrofuncionario.setFuncionario(this.funcionario);
   this.irParaEndereco()
 }

 public validacao(): void {

   const formOptions: AbstractControlOptions = {
     validators: ValidadorSenha.isEqual("Senha", "confSenha")
   }

   this.form = this.formBuilder.group({
     nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
     dataNascimento: ['', Validators.required],
     ddd: ['', Validators.required],
     telefone: ['', Validators.required],
     tipoTelefone: ['', Validators.required],
     cpf: ['', Validators.required],
     email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(60)]],
     senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
     confSenha: ['', Validators.required]
   }, formOptions)




 }

}
