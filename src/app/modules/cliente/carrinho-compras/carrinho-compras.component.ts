import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from './../../shared/services/cadastro-dados-pedido/produto.service';
import { CarrinhoProduto } from './../../shared/models/carrinhoProduto';
import { Carrinho } from './../../shared/models/carrinho';
import { CarrinhoComprasService } from './../../shared/services/cadastro-dados-pedido/carrinho-compras.service';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produto } from '../../shared/models/produto';
import { ClienteService } from '../../shared/services/cadastro-dados-cliente/cliente.service';
import { Cliente } from '../../shared/models/cliente';
import { SharedDataService } from '../../shared/services/shared-data.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  carrinho: Carrinho = {
    id: 0,
    clienteId: 0,
    desconto: 0,
    frete: 0,
    precoFinal: 0,
    carrinhoProduto: [{
      id: 0,
      carrinhoId: 0,
      produtoId: 0,
      quantidade: 0,
      carrinho: new Carrinho(),
      produto: new Produto()
    }]
  };

  cliente = {
    id: 0,
    nome: "",
    dataNascimento: "",
    ddd: "",
    telefone: "",
    tipoTelefone: "",
    cpf: "",
    email: "",
    senha: "",
    credito: 0,
    status: true,
    cupomtroca: 0,
  }


  valorProdutos: number = 0;
  valorFrete: number = 0;
  valorDesconto: number = 0;

  valorCredito: number = 0;
  valorCreditoAtualizado: number = 0;
  creditoCliente: number = 0;

  cep: string = "";
  cupomDesconto: string = "";

  carrinhoPut: Carrinho = {
    id: 1,
    clienteId: 1,
    desconto: 0,
    frete: 0,
    precoFinal: 0
  };

  constructor(private router: Router, private CarrinhoComprasService: CarrinhoComprasService, private shared: SharedDataService,
    private ProdutoService: ProdutoService, private formBuilder: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.carregarCarrinho();
    this.carregarCliente();
  }

  carregarCarrinho() {

    this.CarrinhoComprasService.getCarrinhoProdutos(1).subscribe((carrinho) => {
      this.carrinho = carrinho

      this.valorProdutos = 0;

      for (let i = 0; i < this.carrinho.carrinhoProduto!.length; i++) {
        this.ProdutoService.getById(carrinho.carrinhoProduto![i].produtoId).subscribe((produto) => {
          this.carrinho.carrinhoProduto![i].produto = produto
          this.valorProdutos += this.carrinho.carrinhoProduto![i].quantidade * this.carrinho.carrinhoProduto![i].produto.preco
        })
      }
    })
    //console.error = () => {};
  }
  carregarCliente() {
    this.clienteService.getById(1).subscribe(
      (cliente: Cliente) => {
        this.cliente = cliente;
        this.creditoCliente = cliente.credito;
      }
    );
  }

  excluirProduto(idCliente: number, idProduto: number) {
    console.log(idProduto)
    this.CarrinhoComprasService.excluirProdutoCarrinho(idCliente, idProduto).subscribe(() => {
      this.ngOnInit()
    })
  }

  calcularFrete() {
    if (this.cep.length == 9) {
      this.valorFrete = 10
    } else {
      alert("CEP Invalido!")
      this.valorFrete = 0
    }
  }

  calcularCupom() {
    if (this.cupomDesconto == "abc123") {
      this.valorDesconto = 20
    } else {
      alert("Cupom Invalido!")
      this.valorDesconto = 0
    }
  }

  calcularCredito() {

    if (this.valorCredito > this.creditoCliente) {
      alert("O valor de credito inserido foi supeior ao valor disponivel");
    } else {
      this.valorCreditoAtualizado = this.creditoCliente - this.valorCredito;
      console.log(this.valorCreditoAtualizado);

    }
  }

  finalizarPedido() {

    if (this.valorCredito > this.creditoCliente) {
      alert("O valor de credito inserido foi supeior ao valor disponivel");
    } else {

      this.valorCreditoAtualizado = this.creditoCliente - this.valorCredito;
      console.log(this.valorCreditoAtualizado);

      this.cliente.credito = this.valorCreditoAtualizado;
      console.log(this.cliente);
      this.shared.setClientes(this.cliente);
      this.carrinhoPut.desconto = this.valorDesconto
      this.carrinhoPut.frete = 10
      this.carrinhoPut.precoFinal = ((this.valorProdutos + 10) - this.valorDesconto) - this.valorCredito
      this.carrinhoPut.precoFinal = parseFloat(this.carrinhoPut.precoFinal.toFixed(2))
      console.log(this.carrinhoPut)
      this.CarrinhoComprasService.put(1, this.carrinhoPut).subscribe(() => {
        this.router.navigate(['/finalizar-cartao'])
      })
    }

  }


  alterarQuantidade(carrinhoProduto: CarrinhoProduto) {
    console.log(carrinhoProduto)
    this.CarrinhoComprasService.addCarrinhoProdutos(1, carrinhoProduto).subscribe(
      () => {
        this.ngOnInit()
      })
  }

  irParaCartao() {
    this.finalizarPedido()
  }

}


