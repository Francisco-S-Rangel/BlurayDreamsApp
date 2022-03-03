import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  form!: FormGroup;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  backPage() { this.router.navigate(['']); }

  irParaEndereco(){ this.router.navigate(['/cadastrar-endereco'])}

  public validacao(): void {
    this.form = new FormGroup({
      Nome: new FormControl(),
      DataNascimento: new FormControl(),
      DDD: new FormControl(),
      Telefone: new FormControl(),
      TipoTelefone: new FormControl(),
      CPF: new FormControl(),
      Email: new FormControl(),
      Senha: new FormControl(),
      confSenha: new FormControl()
    })
  }

}
