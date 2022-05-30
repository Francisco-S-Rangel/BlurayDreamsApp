import { Carrinho } from './../../../shared/models/carrinho';
import { CarrinhoComprasService } from './../../../shared/services/cadastro-dados-pedido/carrinho-compras.service';
import { BandeiraCartaoService } from './../../../shared/services/cadastro-dados-cliente/bandeira-cartao.service';
import { EfetivarCompraRequest } from './../../../shared/models/efetivarCompraRequest';
import { CartaoCredito } from 'src/app/modules/shared/models/cartaoCredito';
import { CartaoCreditoService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cartao-credito.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions, AbstractControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-finalizar-cartao',
  templateUrl: './finalizar-cartao.component.html',
  styleUrls: ['./finalizar-cartao.component.css']
})
export class FinalizarCartaoComponent implements OnInit {

  public qtdCartoes: number = 1

  public formCartao!: FormGroup;
  public radioUsarCartao: boolean = true;
  public radioCadastrarCartao: boolean = true;
  public cartaoId: number = 0;
  public valorCartao: number = 0

  public formCartao2!: FormGroup;
  public cartaoId2: number = 0;
  public radioUsarCartao2: boolean = true;
  public radioCadastrarCartao2: boolean = true;
  public valorCartao2: number = 0

  public formCartao3!: FormGroup;
  public cartaoId3: number = 0;
  public radioUsarCartao3: boolean = true;
  public radioCadastrarCartao3: boolean = true;
  public valorCartao3: number = 0

  idCliente: number = 1;

  public EfetivarCompraRequest: EfetivarCompraRequest = {
    enderecoCobrancaId: 0,
    enderecoEntregaId: 0,
    cartaoId: 0,
    cartaoId2: 0,
    cartaoId3: 0
  }

  /*bandeiraCartao: any = [
    {
      bandeira: "visa"
    },
    {
      bandeira: "mastercard"
    },
    {
      bandeira: "elo"
    }
  ]*/

  bandeiras: any = []

  cartaoCreditos =
    {
      id: 0,
      clienteId: this.idCliente,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }

  cartaoCreditos2 =
    {
      id: 0,
      clienteId: this.idCliente,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }

  cartaoCreditos3 =
    {
      id: 0,
      clienteId: this.idCliente,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }

  cartoesCliente?: CartaoCredito[]

  precoFinal: number = 0

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
    , private cartaoCreditoService: CartaoCreditoService, private BandeiraCartaoService: BandeiraCartaoService, private CarrinhoComprasService: CarrinhoComprasService) { }

  ngOnInit(): void {
    this.validacao();
    this.carregarCartoesCliente(1)
    this.carregarBandeiras()
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    this.CarrinhoComprasService.getCarrinhoProdutos(1).subscribe((carrinho) => {
      this.precoFinal = carrinho.precoFinal
    })
  }

  carregarCartoesCliente(id: number) {
    this.cartaoCreditoService.getByClienteId(id).subscribe(
      (cartaoCreditos: CartaoCredito[]) => {
        this.cartoesCliente = cartaoCreditos;
      }
    )
  }

  carregarBandeiras() {
    this.BandeiraCartaoService.getAll().subscribe((bandeiras) => {
      this.bandeiras = bandeiras
      console.log(this.bandeiras)
    })
  }

  selectChangeQtdCartoes(event: any) {
    let evt: number = parseInt(event.target.value)
    this.qtdCartoes = evt
  }

  selectChange(event: any) {
    let evt: number = parseInt(event.target.value)
    this.cartaoId = evt
  }

  selectChange2(event: any) {
    let evt: number = parseInt(event.target.value)
    this.cartaoId2 = evt
  }

  selectChange3(event: any) {
    let evt: number = parseInt(event.target.value)
    this.cartaoId3 = evt
  }


  radioAddCartaoChange(event: any) {
    if (event.target.value == 1) {
      this.radioCadastrarCartao = true
    } else {
      this.radioCadastrarCartao = false
    }
  }

  radioAddCartaoChange2(event: any) {
    if (event.target.value == 1) {
      this.radioCadastrarCartao2 = true
    } else {
      this.radioCadastrarCartao2 = false
    }
  }

  radioAddCartaoChange3(event: any) {
    if (event.target.value == 1) {
      this.radioCadastrarCartao3 = true
    } else {
      this.radioCadastrarCartao3 = false
    }
  }

  radioChange(event: any) {
    if (event.target.value == 1) {
      this.radioUsarCartao = true
    } else {
      this.radioUsarCartao = false
    }
  }

  radioChange2(event: any) {
    if (event.target.value == 1) {
      this.radioUsarCartao2 = true
    } else {
      this.radioUsarCartao2 = false
    }
  }

  radioChange3(event: any) {
    if (event.target.value == 1) {
      this.radioUsarCartao3 = true
    } else {
      this.radioUsarCartao3 = false
    }
  }

  verificarValorDigitado() {

    if (this.valorCartao < 10) {
      alert("Você não pode inserir um valor inferior a R$ 10 no cartão")
      this.valorCartao = 0
    } else if (this.valorCartao > this.precoFinal) {
      alert("Voce esta digitando um valor superior ao valor total compra!")
      this.valorCartao = 0
    }

  }

  verificarValorDigitado2() {

    if (this.valorCartao2 < 10) {
      alert("Você não pode inserir um valor inferior a R$ 10 no cartão")
      this.valorCartao2 = 0
    } else if (this.valorCartao2 > this.precoFinal) {
      alert("Voce esta digitando um valor superior ao valor total compra!")
      this.valorCartao2 = 0
    }

  }

  verificarValorDigitado3() {

    if (this.valorCartao3 < 10) {
      alert("Você não pode inserir um valor inferior a R$ 10 no cartão")
      this.valorCartao3 = 0
    } else if (this.valorCartao3 > this.precoFinal) {
      alert("Voce esta digitando um valor superior ao valor total compra!")
      this.valorCartao3 = 0
    }

  }

  verificarBotaoFinalizar() {

    let aux = parseFloat((this.precoFinal - this.valorCartao - this.valorCartao2 - this.valorCartao3).toFixed(2))

    if (this.qtdCartoes == 1) {

      if (this.radioUsarCartao && this.cartaoId == 0) {
        return true
      } else if (this.radioUsarCartao == false && this.formCartao.invalid) {
        return true
      } else {
        return false
      }

    } else if (this.qtdCartoes == 2) {

      if (aux == 0) {

        if (this.radioUsarCartao && this.cartaoId == 0) {
          return true
        } else if (this.radioUsarCartao == false && this.formCartao.invalid) {
          return true
        } else {

          if (this.radioUsarCartao2 && this.cartaoId2 == 0) {
            return true
          } else if (this.radioUsarCartao2 == false && this.formCartao2.invalid) {
            return true
          } else {
            return false
          }

        }

      } else {
        return true
      }

    } else if (this.qtdCartoes == 3) {

      if (aux == 0) {

        if (this.radioUsarCartao && this.cartaoId == 0) {
          return true
        } else if (this.radioUsarCartao == false && this.formCartao.invalid) {
          return true
        } else {

          if (this.radioUsarCartao2 && this.cartaoId2 == 0) {
            return true
          } else if (this.radioUsarCartao2 == false && this.formCartao2.invalid) {
            return true
          } else {

            if (this.radioUsarCartao3 && this.cartaoId3 == 0) {
              return true
            } else if (this.radioUsarCartao3 == false && this.formCartao3.invalid) {
              return true
            } else {
              return false
            }

          }

        }

      } else {
        return true
      }
    } else {
      return true
    }
  }

  cadastrarCartao() {
    if (this.radioUsarCartao) {
      this.EfetivarCompraRequest.cartaoId = this.cartaoId
      this.EfetivarCompraRequest.enderecoCobrancaId = 0
      this.EfetivarCompraRequest.enderecoEntregaId = 0
      this.shared.setRequest(this.EfetivarCompraRequest)
      this.router.navigate(['/finalizar-endereco-cobranca']);
    } else {

      if (this.radioCadastrarCartao) {
        this.cartaoCreditoService.post(this.formCartao.value).subscribe(() => {
          this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
            this.EfetivarCompraRequest.cartaoId = cartoesCreditos[cartoesCreditos.length - 1].id
            this.EfetivarCompraRequest.enderecoCobrancaId = 0
            this.EfetivarCompraRequest.enderecoEntregaId = 0
            this.shared.setRequest(this.EfetivarCompraRequest)
            this.router.navigate(['/finalizar-endereco-cobranca']);
          })
        })
      } else {
        this.EfetivarCompraRequest.cartaoId = 2
        this.EfetivarCompraRequest.enderecoCobrancaId = 0
        this.EfetivarCompraRequest.enderecoEntregaId = 0
        this.shared.setRequest(this.EfetivarCompraRequest)
        this.router.navigate(['/finalizar-endereco-cobranca']);
      }

    }
  }


  cadastrarCartao3() {
    if (this.qtdCartoes > 0) {
      if (this.radioUsarCartao) {

        this.EfetivarCompraRequest.cartaoId = this.cartaoId
        this.EfetivarCompraRequest.enderecoCobrancaId = 0
        this.EfetivarCompraRequest.enderecoEntregaId = 0

      } else {

        if (this.radioCadastrarCartao) {
          this.cartaoCreditoService.post(this.formCartao.value).subscribe(() => {
            this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
              this.EfetivarCompraRequest.cartaoId = cartoesCreditos[cartoesCreditos.length - this.qtdCartoes].id
              this.EfetivarCompraRequest.enderecoCobrancaId = 0
              this.EfetivarCompraRequest.enderecoEntregaId = 0


            })
          })
        } else {
          this.EfetivarCompraRequest.cartaoId = 2
          this.EfetivarCompraRequest.enderecoCobrancaId = 0
          this.EfetivarCompraRequest.enderecoEntregaId = 0


        }
      }
    }

    if (this.qtdCartoes > 1) {

      if (this.radioUsarCartao2) {
        this.EfetivarCompraRequest.cartaoId2 = this.cartaoId2
      } else {

        if (this.radioCadastrarCartao2) {

          this.cartaoCreditoService.post(this.cartaoCreditos2).subscribe(() => {
            this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
              this.EfetivarCompraRequest.cartaoId2 = cartoesCreditos[cartoesCreditos.length - this.qtdCartoes + 1].id
              
            })
          })

        } else {
          this.EfetivarCompraRequest.cartaoId2 = 2
        }
      }
    }

    if (this.qtdCartoes > 2) {

      if (this.radioUsarCartao3) {
        this.EfetivarCompraRequest.cartaoId3 = this.cartaoId3
      } else {

        if (this.radioCadastrarCartao3) {

          this.cartaoCreditoService.post(this.cartaoCreditos3).subscribe(() => {
            this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
              this.EfetivarCompraRequest.cartaoId3 = cartoesCreditos[cartoesCreditos.length - this.qtdCartoes + 2].id
            })
          })

        } else {
          this.EfetivarCompraRequest.cartaoId3 = 2
        }
      }
    }

    this.shared.setRequest(this.EfetivarCompraRequest)
    this.router.navigate(['/finalizar-endereco-cobranca']);
  }

  /*cadastrarCartao2() {
    if (this.qtdCartoes == 1) {

      if (this.radioUsarCartao) {

        this.EfetivarCompraRequest.cartaoId = this.cartaoId
        this.EfetivarCompraRequest.enderecoCobrancaId = 0
        this.EfetivarCompraRequest.enderecoEntregaId = 0
        this.shared.setRequest(this.EfetivarCompraRequest)
        this.router.navigate(['/finalizar-endereco-cobranca']);

      } else {

        if (this.radioCadastrarCartao) {

          this.cartaoCreditoService.post(this.formCartao.value).subscribe(() => {
            this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
              this.EfetivarCompraRequest.cartaoId = cartoesCreditos[cartoesCreditos.length - 1].id
              this.EfetivarCompraRequest.enderecoCobrancaId = 0
              this.EfetivarCompraRequest.enderecoEntregaId = 0
              this.shared.setRequest(this.EfetivarCompraRequest)
              this.router.navigate(['/finalizar-endereco-cobranca']);
            })
          })

        } else {

          this.EfetivarCompraRequest.cartaoId = 2
          this.EfetivarCompraRequest.enderecoCobrancaId = 0
          this.EfetivarCompraRequest.enderecoEntregaId = 0
          this.shared.setRequest(this.EfetivarCompraRequest)
          this.router.navigate(['/finalizar-endereco-cobranca']);

        }
      }
    } else if (this.qtdCartoes == 2) {

      if (this.radioUsarCartao) {

        if (this.radioUsarCartao2) {

          this.EfetivarCompraRequest.cartaoId = this.cartaoId
          this.EfetivarCompraRequest.cartaoId2 = this.cartaoId2
          this.EfetivarCompraRequest.enderecoCobrancaId = 0
          this.EfetivarCompraRequest.enderecoEntregaId = 0
          this.shared.setRequest(this.EfetivarCompraRequest)
          this.router.navigate(['/finalizar-endereco-cobranca']);

        } else {

          if (this.radioCadastrarCartao2) {

            this.cartaoCreditoService.post(this.formCartao2.value).subscribe(() => {
              this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
                this.EfetivarCompraRequest.cartaoId = this.cartaoId
                this.EfetivarCompraRequest.cartaoId2 = cartoesCreditos[cartoesCreditos.length - 1].id
                this.EfetivarCompraRequest.enderecoCobrancaId = 0
                this.EfetivarCompraRequest.enderecoEntregaId = 0
                this.shared.setRequest(this.EfetivarCompraRequest)
                this.router.navigate(['/finalizar-endereco-cobranca']);
              })
            })

          } else {

            this.EfetivarCompraRequest.cartaoId = this.cartaoId
            this.EfetivarCompraRequest.cartaoId2 = 2
            this.EfetivarCompraRequest.enderecoCobrancaId = 0
            this.EfetivarCompraRequest.enderecoEntregaId = 0
            this.shared.setRequest(this.EfetivarCompraRequest)
            this.router.navigate(['/finalizar-endereco-cobranca']);

          }

        }

      } else {

        if (this.radioCadastrarCartao) {

          if (this.radioUsarCartao2) {

            this.cartaoCreditoService.post(this.formCartao.value).subscribe(() => {
              this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
                this.EfetivarCompraRequest.cartaoId = cartoesCreditos[cartoesCreditos.length - 1].id
                this.EfetivarCompraRequest.cartaoId2 = this.cartaoId2
                this.EfetivarCompraRequest.enderecoCobrancaId = 0
                this.EfetivarCompraRequest.enderecoEntregaId = 0
                this.shared.setRequest(this.EfetivarCompraRequest)
                this.router.navigate(['/finalizar-endereco-cobranca']);
              })
            })

          } else {

            if (this.radioCadastrarCartao2) {
              //cadastrar o cartao 1 e 2

              this.cartaoCreditoService.post(this.formCartao.value).subscribe(() => {
                this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
                  this.EfetivarCompraRequest.cartaoId = cartoesCreditos[cartoesCreditos.length - 1].id
                  this.EfetivarCompraRequest.cartaoId2 = this.cartaoId2
                  this.EfetivarCompraRequest.enderecoCobrancaId = 0
                  this.EfetivarCompraRequest.enderecoEntregaId = 0
                  this.shared.setRequest(this.EfetivarCompraRequest)
                  this.router.navigate(['/finalizar-endereco-cobranca']);
                })
              })

            } else {

              this.cartaoCreditoService.post(this.formCartao.value).subscribe(() => {
                this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
                  this.EfetivarCompraRequest.cartaoId = cartoesCreditos[cartoesCreditos.length - 1].id
                  this.EfetivarCompraRequest.cartaoId2 = 2
                  this.EfetivarCompraRequest.enderecoCobrancaId = 0
                  this.EfetivarCompraRequest.enderecoEntregaId = 0
                  this.shared.setRequest(this.EfetivarCompraRequest)
                  this.router.navigate(['/finalizar-endereco-cobranca']);
                })
              })
            }
          }

        } else { //nao cadastrar o cartao 1

          this.EfetivarCompraRequest.cartaoId = 2
          this.EfetivarCompraRequest.enderecoCobrancaId = 0
          this.EfetivarCompraRequest.enderecoEntregaId = 0
          this.shared.setRequest(this.EfetivarCompraRequest)
          this.router.navigate(['/finalizar-endereco-cobranca']);

        }
      }
    } else {

      if (this.radioUsarCartao) {

        this.EfetivarCompraRequest.cartaoId = this.cartaoId
        this.EfetivarCompraRequest.enderecoCobrancaId = 0
        this.EfetivarCompraRequest.enderecoEntregaId = 0
        this.shared.setRequest(this.EfetivarCompraRequest)
        this.router.navigate(['/finalizar-endereco-cobranca']);

      } else {

        if (this.radioCadastrarCartao) {

          this.cartaoCreditoService.post(this.formCartao.value).subscribe(() => {
            this.cartaoCreditoService.getByClienteId(1).subscribe((cartoesCreditos) => {
              this.EfetivarCompraRequest.cartaoId = cartoesCreditos[cartoesCreditos.length - 1].id
              this.EfetivarCompraRequest.enderecoCobrancaId = 0
              this.EfetivarCompraRequest.enderecoEntregaId = 0
              this.shared.setRequest(this.EfetivarCompraRequest)
              this.router.navigate(['/finalizar-endereco-cobranca']);
            })
          })

        } else {

          this.EfetivarCompraRequest.cartaoId = 2
          this.EfetivarCompraRequest.enderecoCobrancaId = 0
          this.EfetivarCompraRequest.enderecoEntregaId = 0
          this.shared.setRequest(this.EfetivarCompraRequest)
          this.router.navigate(['/finalizar-endereco-cobranca']);

        }
      }
    }
  }*/

  public validacao(): void {

    const formOptions: AbstractControlOptions = {
      validators: this.controlBandeiraPermitida("BandeiraCartao")
    }

    const formOptions2: AbstractControlOptions = {
      validators: this.controlBandeiraPermitida("BandeiraCartao2")
    }

    const formOptions3: AbstractControlOptions = {
      validators: this.controlBandeiraPermitida("BandeiraCartao3")
    }

    this.formCartao = this.fb.group({
      id: 0,
      clienteid: this.idCliente,
      numeroCartao: ['', [Validators.required]],
      NomeTitular: ['', Validators.required],
      BandeiraCartao: ['', Validators.required],
      cvv: ['', Validators.required]
    }, formOptions)

    this.formCartao2 = this.fb.group({
      id: 0,
      clienteid: this.idCliente,
      numeroCartao2: ['', [Validators.required]],
      NomeTitular2: ['', Validators.required],
      BandeiraCartao2: ['', Validators.required],
      cvv2: ['', Validators.required]
    }, formOptions2)

    this.formCartao3 = this.fb.group({
      id: 0,
      clienteid: this.idCliente,
      numeroCartao3: ['', [Validators.required]],
      NomeTitular3: ['', Validators.required],
      BandeiraCartao3: ['', Validators.required],
      cvv3: ['', Validators.required]
    }, formOptions3)

  }

  private controlBandeiraPermitida(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup
      const control = formGroup.controls[controlName]
      let match: boolean = false

      for (let i = 0; i < this.bandeiras.length; i++) {

        if (control.value.toLowerCase() == this.bandeiras[i].nome) {
          match = true
        }

      }

      if (control.errors && !control.errors['notValid']) {
        return null
      }

      if (match != true) {
        control.setErrors({ notValid: true })
      } else {
        control.setErrors(null)
      }

      return null

    }
  }

  get f(): any {
    return this.formCartao.controls;
  }

  get f2(): any {
    return this.formCartao2.controls;
  }

  get f3(): any {
    return this.formCartao3.controls;
  }

  backPage() {
    this.router.navigate(['/carrinho-compras']);
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

}
