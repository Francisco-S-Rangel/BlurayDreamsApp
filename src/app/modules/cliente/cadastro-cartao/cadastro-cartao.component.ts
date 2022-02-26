import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cartao',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backPage() { this.router.navigate(['/cadastrar-endereco']); }

  VoltarTelaInicial(){ this.router.navigate(['']);}

}
