import { Funcionario } from './../../../../shared/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuncionarioService } from 'src/app/modules/shared/services/cadastro-dados-funcionario/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa-funcionario',
  templateUrl: './pesquisa-funcionario.component.html',
  styleUrls: ['./pesquisa-funcionario.component.css']
})
export class PesquisaFuncionarioComponent implements OnInit {

  public paginacao = [1,2,3];
  public funcionarios?: Funcionario[];
  public pesquisaNome = new FormControl('');

  public comparacao: number = 0;
  public nome: string = "";
  public resultado: string = "";

  constructor(private route: ActivatedRoute,private router: Router,private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.nome = x[`nome`];
      this.carregarClientesporNome(this.nome);
      this.resultado = this.nome;
    });
  }

  carregarClientesporNome(nome: string){
    this.funcionarioService.getFuncionariosPorNome(nome).subscribe(
      (funcionarios: Funcionario[])=>{
        this.funcionarios = funcionarios;
        console.log(this.funcionarios);
        if(funcionarios.length == 0){
          this.comparacao++;
        }
        if(funcionarios.length > 0){
          this.comparacao = 0;
        }
      }
    );
  }

  deletarFuncionario(id: number){
    this.funcionarioService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
      }
    );
  }

  //Botões
  backPage() { this.router.navigate(['tela-funcionario']); }
  irParaFuncionario(id: number){this.router.navigate([`informacao-funcionario/${id}`]);}
  inativarFuncionario(id: number){this.router.navigate([`motivo-inativacao-funcionario/${id}`]);}
  ativarFuncionario(id: number){this.router.navigate([`motivo-ativacao-funcionario/${id}`]);}
  irParaCadastrarFuncionario(){this.router.navigate(['cadastrar-funcionario']);}

}
