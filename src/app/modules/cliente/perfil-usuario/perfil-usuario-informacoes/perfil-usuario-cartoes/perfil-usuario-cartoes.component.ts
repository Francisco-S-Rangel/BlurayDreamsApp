import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-cartoes',
  templateUrl: './perfil-usuario-cartoes.component.html',
  styleUrls: ['./perfil-usuario-cartoes.component.css']
})
export class PerfilUsuarioCartoesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaPerfil(){ this.router.navigate(['/perfil-usuario-main'])}

  irParaPedidos(){this.router.navigate(['/perfil-usuario-pedidos'])}

  irParaEnderecos(){this.router.navigate(['/perfil-usuario-enderecos'])}

  irParaAlteraCartao(){this.router.navigate(['/perfil-usuario-altera-cartao'])}

  irParaCadastrarCartao(){this.router.navigate(['/perfil-usuario-cadastrar-cartao'])}

}
