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
      numeroCartao: ['', [Validators.required]],
      NomeTitular: ['', Validators.required],
      BandeiraCartao: ['', Validators.required],
      cvv: ['', Validators.required]
    })


  }

}
