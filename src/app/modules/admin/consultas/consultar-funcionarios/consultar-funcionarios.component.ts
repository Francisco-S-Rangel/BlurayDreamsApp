import { Funcionario } from 'src/app/modules/shared/models/funcionario';
import { FuncionarioService } from './../../../shared/services/cadastro-dados-funcionario/funcionario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-funcionarios',
  templateUrl: './consultar-funcionarios.component.html',
  styleUrls: ['./consultar-funcionarios.component.css']
})
export class ConsultarFuncionariosComponent implements OnInit {

  public paginacao = [1,2,3];
  public funcionarios?: Funcionario[];

  constructor(private router: Router,private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  carregarFuncionarios(){
    this.funcionarioService.getAll().subscribe(
      (funcionarios: Funcionario[])=>{
        this.funcionarios= funcionarios;
        console.log(this.funcionarios);
      }
    );
  }

  // Botões
  backPage() { this.router.navigate(['tela-funcionario']); }
  irParaFuncionario(){this.router.navigate(['informacao-funcionario']);}
  inativarFuncionario(){this.router.navigate(['motivo-inativacao-funcionario']);}
  irParaCadastrarFuncionario(){this.router.navigate(['cadastrar-funcionario']);}

}
