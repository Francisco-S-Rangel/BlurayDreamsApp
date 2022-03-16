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

  public id?: number;
  public idcliente: number = 0;
  public formCartao!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
  , private route: ActivatedRoute,private cartaoCreditoService: CartaoCreditoService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x[`clienteid`];
      this.idcliente = x[`clienteid`];
    });
    this.validacao();
  }



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

  str: any;

  cartaoCreditos =
    {
      id: 0,
      clienteId: this.id,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }




  get f(): any {
    return this.formCartao.controls;
  }



  cadastrarCartao(){
    console.log(this.formCartao.value);
    this.cartaoCreditoService.post(this.formCartao.value).subscribe(
      ()=>{
        console.log();
        this.backPage();
      }
    );
  }

  public validacao(): void {

    const formOptions: AbstractControlOptions = {
      validators: this.controlBandeiraPermitida("BandeiraCartao")
    }

    this.formCartao = this.fb.group({
      id: 0,
      clienteid: this.idcliente,
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
      let match:boolean = false

      for (let i = 0; i < this.bandeiraCartao.length; i++) {

        if (control.value.toLowerCase() == this.bandeiraCartao[i].bandeira){
          match = true
        }

      }

      if (control.errors && !control.errors['notValid']) {
        return null
      }

      if(match != true){
        control.setErrors({notValid: true})
      } else {
        control.setErrors(null)
      }

      return null

    }
  }


  backPage() {
    this.router.navigate(['/carrinho-compras']);
  }

}
