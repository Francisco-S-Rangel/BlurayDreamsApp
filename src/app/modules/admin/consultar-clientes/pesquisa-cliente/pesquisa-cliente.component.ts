import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modules/shared/models/cliente';
import { ClienteService } from 'src/app/modules/shared/services/cadastro-dados-cliente/cliente.service';

@Component({
  selector: 'app-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.css']
})
export class PesquisaClienteComponent implements OnInit {

  public paginacao = [1,2,3];
  public clientes?: Cliente[];
  public pesquisaNome = new FormControl('');

  public comparacao: number = 0;
  public nome: string = "";
  public resultado: string = "";

  constructor(private route: ActivatedRoute,private router: Router,private clienteService : ClienteService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.nome = x[`nome`];
      this.carregarClientesporNome(this.nome);
      this.resultado = this.nome;
    });
  }


  carregarClientesporNome(nome: string){
    this.clienteService.getClientesPorNome(nome).subscribe(
      (clientes: Cliente[])=>{
        this.clientes = clientes;
        console.log(this.clientes);
        if(clientes.length == 0){
          this.comparacao++;
        }
        if(clientes.length > 0){
          this.comparacao = 0;
        }
      }
    );
  }

  deletarCliente(id: number){
    this.clienteService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
        this.carregarClientesporNome(this.nome);
      }
    );
  }
  // Botões
  backPage() { this.router.navigate(['tela-funcionario']); }

  pesquisarCliente() { 
     this.router.navigate([`pesquisa-cliente/${this.pesquisaNome.value}`])}

  cadastrarCliente(){ this.router.navigate(['cadastrar-cliente']); }

  irInformacaoCliente(id: number) {this.router.navigate([`informacao-cliente/${id}`]);}

  inativarCliente(id: number){
    this.router.navigate([`/motivo-inativacao-cliente/${id}`]);
  }
  ativarCliente(id: number){this.router.navigate([`/motivo-ativacao-cliente/${id}`]);
}
}
