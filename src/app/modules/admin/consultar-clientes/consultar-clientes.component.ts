import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/services/cadastro-dados-cliente/cliente.service';
import { Cliente } from '../../shared/models/cliente';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consultar-clientes',
  templateUrl: './consultar-clientes.component.html',
  styleUrls: ['./consultar-clientes.component.css']
})
export class ConsultarClientesComponent implements OnInit {

  public paginacao = [1,2,3];
  public clientes?: Cliente[];
  public pesquisaNome = new FormControl('');

  constructor(private router: Router,private clienteService : ClienteService ) { }

  ngOnInit(): void {
    this.carregarClientes();
  }


  carregarClientes(){
    this.clienteService.getAll().subscribe(
      (clientes: Cliente[])=>{
        this.clientes = clientes;
        console.log(this.clientes);
      }
    );
  }

  deletarCliente(id: number){
    this.clienteService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
        this.carregarClientes();
      }
    );
  }
  // Botões
  backPage() { this.router.navigate(['tela-funcionario']); }

  pesquisarCliente() {  
    console.log(this.pesquisaNome.value);
    
    this.router.navigate([`pesquisa-cliente/${this.pesquisaNome.value}`])
  }

  cadastrarCliente(){ this.router.navigate(['cadastrar-cliente']); }

  irInformacaoCliente(id: number) {this.router.navigate([`informacao-cliente/${id}`]);}

  inativarCliente(id: number){
    this.router.navigate([`/motivo-inativacao-cliente/${id}`]);
  }
  ativarCliente(id: number){this.router.navigate([`/motivo-ativacao-cliente/${id}`]);
}

}
