import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBar2Component } from './modules/shared/components/nav-bar2/nav-bar2.component';
import { CadastroClienteComponent } from './modules/cliente/cadastro-cliente/cadastro-cliente.component';
import { TelaInicialComponent } from './modules/cliente/tela-inicial/tela-inicial.component';
import { NavBarComponent } from './modules/shared/components/nav-bar/nav-bar.component';
import { CadastroEnderecoComponent } from './modules/cliente/cadastro-endereco/cadastro-endereco.component';
import { CadastroCartaoComponent } from './modules/cliente/cadastro-cartao/cadastro-cartao.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { ConsultarClientesComponent } from './modules/admin/consultar-clientes/consultar-clientes.component';
import { InformacaoClienteComponent } from './modules/admin/informacao-cliente/informacao-cliente.component';
import { ModalEditarClienteComponent } from './modules/admin/modal-alteracoes/modal-editar-cliente/modal-editar-cliente.component';
import { ModalEditarEnderecoCobrancaComponent } from './modules/admin/modal-alteracoes/modal-editar-endereco-cobranca/modal-editar-endereco-cobranca.component';
import { ModalEditarEnderecoEntregaComponent } from './modules/admin/modal-alteracoes/modal-editar-endereco-entrega/modal-editar-endereco-entrega.component';
import { ModalEditarCartaoCreditoComponent } from './modules/admin/modal-alteracoes/modal-editar-cartao-credito/modal-editar-cartao-credito.component';
import { ModalCadastrarEnderecoCobrancaComponent } from './modules/admin/modal-cadastros/modal-cadastrar-endereco-cobranca/modal-cadastrar-endereco-cobranca.component';
import { ModalCadastrarEnderecoEntregaComponent } from './modules/admin/modal-cadastros/modal-cadastrar-endereco-entrega/modal-cadastrar-endereco-entrega.component';
import { ModalCadastrarCartaoCreditoComponent } from './modules/admin/modal-cadastros/modal-cadastrar-cartao-credito/modal-cadastrar-cartao-credito.component';
import { TelaLoginComponent } from './modules/cliente/telas-publicas/tela-login/tela-login.component';
import { CarrinhoComprasComponent } from './modules/cliente/carrinho-compras/carrinho-compras.component';
import { TelaFuncionarioComponent } from './modules/admin/funcionario/tela-funcionario/tela-funcionario.component';
import { PerfilUsuarioMainComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-main/perfil-usuario-main.component';
import { PerfilUsuarioEnderecosComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-enderecos/perfil-usuario-enderecos.component';
import { PerfilUsuarioCartoesComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-cartoes/perfil-usuario-cartoes.component';
import { ConsultarProdutosComponent } from './modules/admin/consultas/consultar-produtos/consultar-produtos.component';
import { InformacaoProdutoComponent } from './modules/admin/consultas/informacao-produto/informacao-produto.component';
import { ConsultarTrocasComponent } from './modules/admin/consultas/consultar-trocas/consultar-trocas.component';
import { InformacaoTrocaComponent } from './modules/admin/consultas/informacao-troca/informacao-troca.component';
import { PerfilUsuarioPedidosComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-pedidos/perfil-usuario-pedidos.component';
import { PerfilUsuarioTrocasComponent } from './modules/cliente/perfil-usuario/perfil-usuario-informacoes/perfil-usuario-trocas/perfil-usuario-trocas.component';
import { PerfilUsuarioAlteraEntregaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-entrega/perfil-usuario-altera-entrega.component';
import { PerfilUsuarioAlteraCobrancaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-cobranca/perfil-usuario-altera-cobranca.component';
import { PerfilUsuarioAlteraCartaoComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-cartao/perfil-usuario-altera-cartao.component';
import { PerfilUsuarioCadastrarCartaoComponent } from './modules/cliente/perfil-usuario/perfil-usuario-cadastro/perfil-usuario-cadastrar-cartao/perfil-usuario-cadastrar-cartao.component';
import { PerfilUsuarioCadastrarCobrancaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-cadastro/perfil-usuario-cadastrar-cobranca/perfil-usuario-cadastrar-cobranca.component';
import { PerfilUsuarioCadastrarEntregaComponent } from './modules/cliente/perfil-usuario/perfil-usuario-cadastro/perfil-usuario-cadastrar-entrega/perfil-usuario-cadastrar-entrega.component';
import { PerfilUsuarioAlteraUsuarioComponent } from './modules/cliente/perfil-usuario/perfil-usuario-alteracoes/perfil-usuario-altera-usuario/perfil-usuario-altera-usuario.component';
import { FinalizarCupomTrocaComponent } from './modules/cliente/finalizar-compra/finalizar-cupom-troca/finalizar-cupom-troca.component';
import { FinalizarCartaoComponent } from './modules/cliente/finalizar-compra/finalizar-cartao/finalizar-cartao.component';
import { TelaPesquisaComponent } from './modules/cliente/telas-publicas/tela-pesquisa/tela-pesquisa.component';
import { ModalCadastroProdutoComponent } from './modules/admin/modal-cadastros/modal-cadastro-produto/modal-cadastro-produto.component';
import { FinalizarEnderecoCobrancaComponent } from './modules/cliente/finalizar-compra/finalizar-endereco-cobranca/finalizar-endereco-cobranca.component';
import { FinalizarEnderecoEntregaComponent } from './modules/cliente/finalizar-compra/finalizar-endereco-entrega/finalizar-endereco-entrega.component';
import { ModalEditarProdutosComponent } from './modules/admin/modal-alteracoes/modal-editar-produtos/modal-editar-produtos.component';
import { ModalCadastrarEstoqueComponent } from './modules/admin/modal-cadastros/modal-cadastrar-estoque/modal-cadastrar-estoque.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar2Component,
    CadastroClienteComponent,
    TelaInicialComponent,
    CadastroEnderecoComponent,
    CadastroCartaoComponent,
    FooterComponent,
    ConsultarClientesComponent,
    InformacaoClienteComponent,
    ModalEditarClienteComponent,
    ModalEditarEnderecoCobrancaComponent,
    ModalEditarEnderecoEntregaComponent,
    ModalEditarCartaoCreditoComponent,
    ModalCadastrarEnderecoCobrancaComponent,
    ModalCadastrarEnderecoEntregaComponent,
    ModalCadastrarCartaoCreditoComponent,
    TelaLoginComponent,
    CarrinhoComprasComponent,
    PerfilUsuarioMainComponent,
    PerfilUsuarioEnderecosComponent,
    PerfilUsuarioCartoesComponent,
    TelaFuncionarioComponent,
    PerfilUsuarioMainComponent,
    ConsultarProdutosComponent,
    InformacaoProdutoComponent,
    ConsultarTrocasComponent,
    InformacaoTrocaComponent,
    PerfilUsuarioPedidosComponent,
    PerfilUsuarioAlteraEntregaComponent,
    PerfilUsuarioAlteraCobrancaComponent,
    PerfilUsuarioTrocasComponent,
    PerfilUsuarioAlteraCartaoComponent,
    PerfilUsuarioCadastrarCartaoComponent,
    PerfilUsuarioCadastrarCobrancaComponent,
    PerfilUsuarioCadastrarEntregaComponent,
    PerfilUsuarioAlteraUsuarioComponent,
    FinalizarCupomTrocaComponent,
    FinalizarCartaoComponent,
    TelaPesquisaComponent,
    ModalCadastroProdutoComponent,
    FinalizarEnderecoCobrancaComponent,
    FinalizarEnderecoEntregaComponent,
    ModalEditarProdutosComponent,
    ModalCadastrarEstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
