import { ModalEditarCartaoCreditoComponent } from './modules/admin/modal-alteracoes/modal-editar-cartao-credito/modal-editar-cartao-credito.component';
import { ModalEditarEnderecoEntregaComponent } from './modules/admin/modal-alteracoes/modal-editar-endereco-entrega/modal-editar-endereco-entrega.component';
import { ModalEditarEnderecoCobrancaComponent } from './modules/admin/modal-alteracoes/modal-editar-endereco-cobranca/modal-editar-endereco-cobranca.component';
import { ModalEditarClienteComponent } from './modules/admin/modal-alteracoes/modal-editar-cliente/modal-editar-cliente.component';
import { InformacaoClienteComponent } from './modules/admin/informacao-cliente/informacao-cliente.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './modules/cliente/tela-inicial/tela-inicial.component';
import { CadastroClienteComponent } from './modules/cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroEnderecoComponent } from './modules/cliente/cadastro-endereco/cadastro-endereco.component';
import { CadastroCartaoComponent } from './modules/cliente/cadastro-cartao/cadastro-cartao.component';
import { ConsultarClientesComponent } from './modules/admin/consultar-clientes/consultar-clientes.component';


const routes: Routes = [
  {path: "", component: TelaInicialComponent},
  {path: "cadastrar-cliente", component: CadastroClienteComponent},
  {path: "cadastrar-endereco", component: CadastroEnderecoComponent},
  {path: "cadastrar-cartao", component: CadastroCartaoComponent},
  {path: "consultar-clientes", component: ConsultarClientesComponent},
  {path: "informacao-cliente/:id", component: InformacaoClienteComponent},
  {path: "editar-cliente/:id", component: ModalEditarClienteComponent},
  {path: "editar-endereco-cobranca/:id/:clienteid",component: ModalEditarEnderecoCobrancaComponent},
  {path: "editar-endereco-entregas/:id/:clienteid",component: ModalEditarEnderecoEntregaComponent},
  {path: "editar-cartao-credito/:id/:clienteid", component: ModalEditarCartaoCreditoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
