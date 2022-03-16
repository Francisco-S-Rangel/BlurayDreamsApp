import { CartaoCreditoService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cartao-credito.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormGroup, Validators, AbstractControlOptions, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario-altera-cartao',
  templateUrl: './perfil-usuario-altera-cartao.component.html',
  styleUrls: ['./perfil-usuario-altera-cartao.component.css']
})
export class PerfilUsuarioAlteraCartaoComponent implements OnInit {

  public id?: number;
  public id2?: number;
  public idcartao: number =0;
  public idcliente: number = 0;
  public formCartao!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
  , private route: ActivatedRoute,private cartaoCreditoService: CartaoCreditoService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.idcartao = x[`id`];
      this.id2= x[`clienteid`];
      this.idcliente= x[`clienteid`];
    });
    this.validacao();

    this.cartaoCreditoService.getById(this.idcartao).subscribe(
      (result)=>{
        //console.log(result)
        this.cartaoCreditos = result
        this.cdRef.detectChanges();
      }
    );

  }

  cliente: any;

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
      id: this.id,
      clienteId: this.id2,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }




  get f(): any {
    return this.formCartao.controls;
  }



  alterarCartao(){
    console.log(this.formCartao.value);
    this.cartaoCreditoService.put(this.idcartao,this.formCartao.value).subscribe(
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
      id: this.idcartao,
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

  backPage() { this.router.navigate(['/perfil-usuario-cartoes']); }

}
