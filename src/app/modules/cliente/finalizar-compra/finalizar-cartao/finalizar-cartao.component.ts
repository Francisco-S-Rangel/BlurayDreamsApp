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

  public formCartao!: FormGroup;
  public radioUsarCartao: boolean = true
  cartaoId: number = 0

  bandeiraCartao: any = [
    {
      bandeira: "visa"
    },
    {
      bandeira: "mastercard"
    },
    {
      bandeira: "elo"
    }
  ]

  cartaoCreditos =
    {
      id: 0,
      clienteId: 0,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }

  cartoesCliente?: CartaoCredito[]

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
    , private route: ActivatedRoute, private cartaoCreditoService: CartaoCreditoService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.validacao();
    this.carregarCartoesCliente(1)
  }

  carregarCartoesCliente(id: number) {
    this.cartaoCreditoService.getByClienteId(id).subscribe(
      (cartaoCreditos: CartaoCredito[]) => {
        this.cartoesCliente = cartaoCreditos;
      }
    )
  }

  selectChange(event: any){
    this.cartaoId = event.target.value
  }

  radioChange(event: any) {
    if (event.target.value == 1) {
      this.radioUsarCartao = true
    } else {
      this.radioUsarCartao = false
    }
  }

  cadastrarCartao() {
    this.router.navigate(['/finalizar-endereco-cobranca']);
  }

  public validacao(): void {

    const formOptions: AbstractControlOptions = {
      validators: this.controlBandeiraPermitida("BandeiraCartao")
    }

    this.formCartao = this.fb.group({
      numeroCartao: ['', [Validators.required]],
      NomeTitular: ['', Validators.required],
      BandeiraCartao: ['', Validators.required],
      cvv: ['', Validators.required]
    }, formOptions)

  }

  private controlBandeiraPermitida(controlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup
      const control = formGroup.controls[controlName]
      let match: boolean = false

      for (let i = 0; i < this.bandeiraCartao.length; i++) {

        if (control.value.toLowerCase() == this.bandeiraCartao[i].bandeira) {
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

  backPage() {
    this.router.navigate(['/carrinho-compras']);
  }

}
