import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }


  constructor( private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validacao();
  }

  backPage() { this.router.navigate(['']); }

  irParaEndereco(){ this.router.navigate(['/cadastrar-endereco'])}

  public validacao(): void {
    this.form = this.fb.group({
      Nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      DataNascimento: ['', Validators.required],
      ddd: ['', Validators.required],
      Telefone: ['', Validators.required],
      TipoTelefone: ['', Validators.required],
      CPF: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(60)]],
      Senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confSenha: ['', Validators.required]
    })
  }

}
