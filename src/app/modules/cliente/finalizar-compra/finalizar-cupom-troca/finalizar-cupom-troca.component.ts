import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions, AbstractControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-finalizar-cupom-troca',
  templateUrl: './finalizar-cupom-troca.component.html',
  styleUrls: ['./finalizar-cupom-troca.component.css']
})
export class FinalizarCupomTrocaComponent implements OnInit {

  public id?: number;
  public idcliente: number = 0;
  public formTroca!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder
  , private route: ActivatedRoute, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {}


  backPage() {
    this.router.navigate(['/carrinho-compras']);
  }

}
