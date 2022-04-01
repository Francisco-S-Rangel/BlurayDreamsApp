import { DesativacaoClienteService } from './../../../../shared/services/cadastro-dados-cliente/desativacao-cliente.service';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-motivo-inativacao-cliente',
  templateUrl: './motivo-inativacao-cliente.component.html',
  styleUrls: ['./motivo-inativacao-cliente.component.css']
})
export class MotivoInativacaoClienteComponent implements OnInit {

  public id:number =0;
  public cliente?: Cliente;

  constructor(private router: Router,private route: ActivatedRoute,private clienteService: ClienteService, private inativacaoService: DesativacaoClienteService) { }

  ngOnInit() {
    this.route.params.subscribe(x=>{
      this.id =  x[`id`];
      this.carregarCliente(this.id);

    });
  }

  contaInativada(){
    
  }
  contraTermo(){

  }

  carregarCliente(id: number){
    this.clienteService.getById(id).subscribe(
      (cliente: Cliente)=>{
        this.cliente = cliente;
      }
    );

  }

  backPage() {
    this.router.navigate(['/consultar-clientes']);
  }

}
