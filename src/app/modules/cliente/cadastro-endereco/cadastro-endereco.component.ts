import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  backPage() { this.router.navigate(['/cadastrar-cliente']); }

  irParaCartao(){ this.router.navigate(['/cadastrar-cartao'])}

}

