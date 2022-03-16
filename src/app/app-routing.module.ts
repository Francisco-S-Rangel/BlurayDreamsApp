import { FinalizarCartaoComponent } from './modules/cliente/finalizar-compra/finalizar-cartao/finalizar-cartao.component';
import { FinalizarCupomTrocaComponent } from './modules/cliente/finalizar-compra/finalizar-cupom-troca/finalizar-cupom-troca.component';
import { PerfilUsuarioAlteraUsuarioComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-usuario/perfil-usuario-altera-usuario.component';
import { PerfilUsuarioCadastrarEntregaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-cadastro/perfil-usuario-cadastrar-entrega/perfil-usuario-cadastrar-entrega.component';
import { PerfilUsuarioCadastrarCobrancaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-cadastro/perfil-usuario-cadastrar-cobranca/perfil-usuario-cadastrar-cobranca.component';
import { PerfilUsuarioCadastrarCartaoComponent } from './modules/cliente/perfil-usuario/perfil-usuario-cadastro/perfil-usuario-cadastrar-cartao/perfil-usuario-cadastrar-cartao.component';
import { PerfilUsuarioAlteraCartaoComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-cartao/perfil-usuario-altera-cartao.component';
import { PerfilUsuarioAlteraCobrancaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-cobranca/perfil-usuario-altera-cobranca.component';
import { PerfilUsuarioAlteraEntregaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-entrega/perfil-usuario-altera-entrega.component';
import { PerfilUsuarioTrocasComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-trocas/perfil-usuario-trocas.component';
import { PerfilUsuarioPedidosComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-pedidos/perfil-usuario-pedidos.component';
import { InformacaoTrocaComponent } from './modules/admin/consultas/informacao-troca/informacao-troca.component';
import { ConsultarTrocasComponent } from './modules/admin/consultas/consultar-trocas/consultar-trocas.component';
import { PerfilUsuarioCartoesComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-cartoes/perfil-usuario-cartoes.component';
import { PerfilUsuarioEnderecosComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-enderecos/perfil-usuario-enderecos.component';
import { InformacaoProdutoComponent } from './modules/admin/consultas/informacao-produto/informacao-produto.component';
import { ConsultarProdutosComponent } from './modules/admin/consultas/consultar-produtos/consultar-produtos.component';
import { TelaFuncionarioComponent } from './modules/admin/funcionario/tela-funcionario/tela-funcionario.component';
import { PerfilUsuarioMainComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-main/perfil-usuario-main.component';
import { CarrinhoComprasComponent } from './modules/cliente/carrinho-compras/carrinho-compras.component';
import { TelaLoginComponent } from './modules/cliente/telas-publicas/tela-login/tela-login.component';
import { ModalCadastrarCartaoCreditoComponent } from './modules/admin/modal-cadastros/modal-cadastrar-cartao-credito/modal-cadastrar-cartao-credito.component';
import { ModalCadastrarEnderecoEntregaComponent } from './modules/admin/modal-cadastros/modal-cadastrar-endereco-entrega/modal-cadastrar-endereco-entrega.component';
import { ModalCadastrarEnderecoCobrancaComponent } from './modules/admin/modal-cadastros/modal-cadastrar-endereco-cobranca/modal-cadastrar-endereco-cobranca.component';
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
  {path: "editar-cartao-credito/:id/:clienteid", component: ModalEditarCartaoCreditoComponent},
  {path: "cadastrar-endereco-cobranca/:clienteid", component: ModalCadastrarEnderecoCobrancaComponent},
  {path: "cadastrar-endereco-entregas/:clienteid", component: ModalCadastrarEnderecoEntregaComponent},
  {path: "cadastrar-cartao-credito/:clienteid", component: ModalCadastrarCartaoCreditoComponent},
  {path: "tela-login", component: TelaLoginComponent},
  {path: "carrinho-compras", component: CarrinhoComprasComponent},
  {path: "perfil-usuario-main", component: PerfilUsuarioMainComponent},
  {path: "perfil-usuario-enderecos", component: PerfilUsuarioEnderecosComponent},
  {path: "perfil-usuario-cartoes", component: PerfilUsuarioCartoesComponent},
  {path: "perfil-usuario-pedidos", component: PerfilUsuarioPedidosComponent},
  {path: "tela-funcionario", component: TelaFuncionarioComponent},
  {path: "perfil-usuario-main", component: PerfilUsuarioMainComponent},
  {path: "consultar-produtos", component: ConsultarProdutosComponent},
  {path: "informacao-produto", component: InformacaoProdutoComponent},
  {path: "consultar-trocas", component: ConsultarTrocasComponent},
  {path: "informacao-trocas", component: InformacaoTrocaComponent},
  {path: "perfil-usuario-trocas", component: PerfilUsuarioTrocasComponent},
  {path: "perfil-usuario-altera-entrega", component: PerfilUsuarioAlteraEntregaComponent},
  {path: "perfil-usuario-altera-cobranca", component: PerfilUsuarioAlteraCobrancaComponent},
  {path: "perfil-usuario-altera-cartao", component: PerfilUsuarioAlteraCartaoComponent},
  {path: "perfil-usuario-cadastrar-cobranca", component: PerfilUsuarioCadastrarCobrancaComponent},
  {path: "perfil-usuario-cadastrar-entrega", component: PerfilUsuarioCadastrarEntregaComponent},
  {path: "perfil-usuario-cadastrar-cartao", component: PerfilUsuarioCadastrarCartaoComponent},
  {path: "perfil-usuario-altera-usuario", component: PerfilUsuarioAlteraUsuarioComponent},
  {path: "finalizar-cupom-troca", component: FinalizarCupomTrocaComponent},
  {path: "finalizar-cartao", component: FinalizarCartaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
