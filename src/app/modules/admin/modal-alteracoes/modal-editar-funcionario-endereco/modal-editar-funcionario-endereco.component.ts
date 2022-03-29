import { SharedDataService } from './../../../shared/services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/modules/shared/models/endereco';
import { EnderecoService } from 'src/app/modules/shared/services/cadastro-dados-funcionario/endereco.service';

@Component({
  selector: 'app-modal-editar-funcionario-endereco',
  templateUrl: './modal-editar-funcionario-endereco.component.html',
  styleUrls: ['./modal-editar-funcionario-endereco.component.css']
})
export class ModalEditarFuncionarioEnderecoComponent implements OnInit {


  public id?: number;
  public id2?: number;
  public idEndereco: number =0;
  public idfuncionario: number = 0;
  public str: any
  formEndereco!: FormGroup;

  funcionario: any

  endereco=
    {
      id: this.id,
      funcionarioId: this.id2,
      cep: "",
      tipoResidencia: "",
      logradouro: "",
      tipoLogradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "",
      numero: ""
    }


  constructor(private router: Router, private fb: FormBuilder, private shared: SharedDataService
    , private route: ActivatedRoute, private enderecoService: EnderecoService,private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x[`id`];
      this.idEndereco = x[`id`];
      this.id2= x[`funcionarioid`];
      this.idfuncionario= x[`funcionarioid`];
    });

    this.enderecoService.getById(this.idEndereco).subscribe(
      (result)=>{
        //console.log(result)
        this.endereco = result
        this.cdRef.detectChanges();
      }
    );

    this.validacao()
  }


  get f(): any {
    return this.formEndereco.controls;
  }


  alterarEndereco() {
    //console.log(this.formEndereco.value);
    this.enderecoService.put(this.idEndereco,this.formEndereco.value).subscribe(
      ()=>{
        console.log();
        this.backPage();
      }
    );
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  public validacao(): void {

    this.formEndereco = this.fb.group({
      id: this.idEndereco,
      funcionarioid: this.idfuncionario,
      cep: ['', Validators.required],
      tipoResidencia: ['', Validators.required],
      logradouro: ['', Validators.required],
      tipoLogradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      pais: ['', Validators.required],
      numero: ['', [Validators.required]],
    })

  }

  backPage() { this.router.navigate([`informacao-funcionario/${this.id2}`]); }

}
