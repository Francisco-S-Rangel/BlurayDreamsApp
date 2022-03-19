import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';

@Component({
  selector: 'app-info-pedido-escolhido',
  templateUrl: './info-pedido-escolhido.component.html',
  styleUrls: ['./info-pedido-escolhido.component.css']
})
export class InfoPedidoEscolhidoComponent implements OnInit {

  public id: number = 0;

  public cliente?: Cliente;

  constructor(private router: Router,private route: ActivatedRoute,private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
    });
  }

    // carregar Entidades necessarias
    carregarCliente(id: number){
      this.clienteService.getById(id).subscribe(
        (cliente: Cliente)=>{
          this.cliente = cliente;
          console.log(this.cliente);
        }
      );
    }

  backPage(){this.router.navigate([`informacao-pedidos/${this.id}`]);}

}
