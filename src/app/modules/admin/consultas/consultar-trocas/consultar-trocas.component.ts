import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';
import { TrocaService } from './../../../shared/services/cadastro-dados-pedido/troca.service';
import { Troca } from './../../../shared/models/troca';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-trocas',
  templateUrl: './consultar-trocas.component.html',
  styleUrls: ['./consultar-trocas.component.css']
})
export class ConsultarTrocasComponent implements OnInit {
  public paginacao = [1, 2, 3];

  public trocas?: Troca[]

  constructor(private router: Router, private TrocaService: TrocaService, private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.carregarTrocas()
  }

  carregarTrocas() {
    this.TrocaService.getAll().subscribe((trocas) => {
      this.trocas = trocas
      console.log(this.trocas)

      this.ClienteService.getAll().subscribe((clientes) => {
        for (let i = 0; i < trocas.length; i++) {
          for (let j = 0; j < clientes.length; j++) {
            if (this.trocas![i].clienteId == clientes[j].id) {
              this.trocas![i].cliente = clientes[j]
            }
          }
        }
        console.log(trocas)
      })

    })
  }

  backPage() { this.router.navigate(['tela-funcionario']); }
  irParaInformacaoTroca(idTroca: number) { this.router.navigate([`informacao-trocas/${idTroca}`]); }
}
