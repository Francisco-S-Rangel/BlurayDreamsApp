import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ValidadorSenha } from 'src/app/modules/shared/helpers/ValidadorSenha';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartaoCreditoService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cartao-credito.service';


@Component({
  selector: 'app-modal-editar-cartao-credito',
  templateUrl: './modal-editar-cartao-credito.component.html',
  styleUrls: ['./modal-editar-cartao-credito.component.css']
})
export class ModalEditarCartaoCreditoComponent implements OnInit {

  public id?: number;
  public id2?: number;
  public idcartao: number =0;
  public idcliente: number = 0;
  public formCartao!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
  , private route: ActivatedRoute,private cartaoCreditoService: CartaoCreditoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.idcartao = x[`id`];
      this.id2= x[`clienteid`];
      this.idcliente= x[`clienteid`];
    });
    this.validacao();
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

  cartaoCreditos = [
    {
      id: this.id,
      clienteId: this.id2,
      numeroCartao: "",
      bandeiraCartao: "",
      cvv: "",
      nomeTitular: ""
    }
  ]



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


  backPage() { this.router.navigate([`informacao-cliente/${this.id}`]); }
}
