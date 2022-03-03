import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cartao',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent implements OnInit {

  formCartao!: FormGroup;

  get f(): any {
    return this.formCartao.controls;
  }


  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.validacao();
  }

  backPage() { this.router.navigate(['/cadastrar-endereco']); }

  VoltarTelaInicial(){ this.router.navigate(['']);}

  public validacao(): void {

    this.formCartao = this.fb.group({
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
