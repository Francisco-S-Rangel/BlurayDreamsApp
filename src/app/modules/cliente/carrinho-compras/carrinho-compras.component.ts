import { EfetivarCompraRequest } from './../../shared/models/efetivarCompraRequest';
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
  valorFinal: number = 0

  valorCredito: number = 0;
  valorCreditoAtualizado: number = 0;
  creditoCliente: number = 0;

  cep: string = "";
  cupomDesconto: string = "";
  ultimoCep: string = ""

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

      if (this.carrinho.carrinhoProduto!.length > 0) {
        for (let i = 0; i < this.carrinho.carrinhoProduto!.length; i++) {
          this.ProdutoService.getById(carrinho.carrinhoProduto![i].produtoId).subscribe((produto) => {
            this.carrinho.carrinhoProduto![i].produto = produto
            var aux = this.carrinho.carrinhoProduto![i].quantidade * this.carrinho.carrinhoProduto![i].produto.preco
            this.valorProdutos += aux
            //this.valorFinal = this.valorProdutos
            this.calcularValorFinal()
          })
        }
      } else {
        this.valorCredito = 0
        this.valorFrete = 0
        this.valorDesconto = 0
        this.calcularValorFinal()
      }
    })
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

  alterarQuantidade(carrinhoProduto: CarrinhoProduto, produto: Produto) {
    if (carrinhoProduto.quantidade > produto.estoque) {
      alert(`Você não pode adicionar mais produtos que o estoque atual: ${produto.estoque}.`)
      this.ngOnInit()
    } else {
      this.CarrinhoComprasService.addCarrinhoProdutos(1, carrinhoProduto).subscribe(
        () => {
          this.ngOnInit()
        })
    }
  }

  valorFreteAleatorio() {
    return Math.floor(
      Math.random() * (15 - 5) + 5
    )
  }

  calcularFrete() {
    if (this.cep.length == 9) {
      if (this.cep == this.ultimoCep) {
      } else {
        this.valorFrete = this.valorFreteAleatorio()
      }
    } else {
      alert("CEP Invalido!")
      this.valorFrete = 0
    }
    this.ultimoCep = this.cep
    this.calcularValorFinal()
  }

  calcularCupom() {
    if (this.cupomDesconto == "abc123") {
      if (this.valorProdutos + this.valorFrete >= 20) {
        this.valorDesconto = 20
      } else {
        this.valorDesconto = this.valorProdutos + this.valorFrete
      }
    } else {
      alert("Cupom Invalido!")
      this.valorDesconto = 0
    }
    this.calcularValorFinal()
  }

  verificaValorExcesso() {

    if (this.valorCredito > this.creditoCliente) {
      alert("O valor de credito inserido foi superior ao valor disponivel");
      this.valorCredito = 0;
    } else {
      var total = this.valorProdutos + this.valorFrete - this.valorDesconto
      total = parseFloat(total.toFixed(2))
      if (this.valorCredito > total) {
        alert("Voce esta colocando um valor superior ao valor do carrinho!")
        let aux = this.valorProdutos + this.valorFrete - this.valorDesconto
        this.valorCredito = parseFloat(aux.toFixed(2))
      }
      this.valorFinal = this.valorProdutos + this.valorFrete - this.valorDesconto - this.valorCredito
      let aux = this.valorFinal
      this.valorFinal = Math.round(aux * 100) / 100
    }
  }

  calcularValorFinal() {
    this.valorFinal = this.valorProdutos
    this.valorFinal += this.valorFrete
    this.valorFinal -= this.valorDesconto
    let aux = this.valorFinal
    this.valorFinal = Math.round(aux * 100) / 100

    this.verificaValorExcesso()
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 46 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      if (charCode == 47) {
        return false
      } else {
        return true;
      }
    }
  }

  finalizarPedido() {

    this.valorCreditoAtualizado = this.creditoCliente - this.valorCredito;
    //console.log(this.valorCreditoAtualizado);
    this.cliente.credito = this.valorCreditoAtualizado;
    //console.log(this.cliente);
    this.shared.setClientes(this.cliente);

    this.carrinhoPut.desconto = this.valorDesconto

    if (this.valorFrete == 0) {
      this.carrinhoPut.frete = this.valorFreteAleatorio()
      this.valorFinal += this.carrinhoPut.frete
    } else {
      this.carrinhoPut.frete = this.valorFrete
    }

    if (this.valorFinal == -0) {
      this.valorFinal = 0
    }
    this.carrinhoPut.precoFinal = parseFloat(this.valorFinal.toFixed(2))
    console.log(this.carrinhoPut)
    if (this.valorFinal != 0) {
      this.CarrinhoComprasService.put(1, this.carrinhoPut).subscribe(() => {
        this.router.navigate(['/finalizar-cartao'])
      })
    } else {
      let EfetivarCompraRequest: EfetivarCompraRequest = { enderecoCobrancaId: 2, enderecoEntregaId: 0, cartaoId: 2 }
      this.shared.setRequest(EfetivarCompraRequest)
      this.CarrinhoComprasService.put(1, this.carrinhoPut).subscribe(() => {
        this.router.navigate(['/finalizar-endereco-entrega']);
      })
    }

  }

  irParaCartao() {
    this.finalizarPedido()
  }

}


