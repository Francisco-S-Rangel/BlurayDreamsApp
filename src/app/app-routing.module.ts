import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './modules/cliente/tela-inicial/tela-inicial.component';
import { CadastroClienteComponent } from './modules/cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroEnderecoComponent } from './modules/cliente/cadastro-endereco/cadastro-endereco.component';
import { CadastroCartaoComponent } from './modules/cliente/cadastro-cartao/cadastro-cartao.component';


const routes: Routes = [
  {path: "", component: TelaInicialComponent},
  {path: "cadastrar-cliente", component: CadastroClienteComponent},
  {path: "cadastrar-endereco", component: CadastroEnderecoComponent},
  {path: "cadastrar-cartao", component: CadastroCartaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
