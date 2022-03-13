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
    TelaFuncionarioComponent
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
