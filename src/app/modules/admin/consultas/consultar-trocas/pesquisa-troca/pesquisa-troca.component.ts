import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Troca } from 'src/app/modules/shared/models/troca';
import { TrocaService } from 'src/app/modules/shared/services/cadastro-dados-pedido/troca.service';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pesquisa-troca',
  templateUrl: './pesquisa-troca.component.html',
  styleUrls: ['./pesquisa-troca.component.css']
})
export class PesquisaTrocaComponent implements OnInit {

  public paginacao = [1, 2, 3];
  public id: number = 0;

  public troca?: Troca;
  public idtroca= new FormControl('');
  public comparacao: number = 0;

  constructor(private route: ActivatedRoute,private router: Router, private TrocaService: TrocaService, private ClienteService: ClienteService) { }


  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.getTrocaById(this.id);
    });
  }

  getTrocaById(id: number){
    this.TrocaService.getById(id).subscribe(
      (troca: Troca) =>{
        this.troca = troca;
        this.comparacao = 1;
       
      },
      (err : any)=>{
        this.troca = undefined;
        this.comparacao = 0;
      }
    );
  }

  backPage() { this.router.navigate(['tela-funcionario']); }
  irParaInformacaoTroca(idTroca: number) { this.router.navigate([`informacao-trocas/${idTroca}`]); }
  pesquisarTroca(){
    if(this.idtroca.value == ""){
      this.router.navigate([`consultar-trocas`]);
    }else{
      this.router.navigate([`pesquisa-troca/${this.idtroca.value}`]);
    }
  }
}
